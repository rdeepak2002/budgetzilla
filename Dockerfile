FROM node:18-alpine AS client-builder
WORKDIR /app/client
COPY client/package.json client/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY client/ ./
RUN pnpm build

FROM golang:1.21-alpine AS server-builder
WORKDIR /app/server
COPY server/go.mod server/go.sum* ./
RUN go mod download
COPY server/ ./
RUN go build -o budgetzilla-server main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=server-builder /app/server/budgetzilla-server .
COPY --from=client-builder /app/client/dist ./public
CMD ["./budgetzilla-server"]