<p align="center">
  <img src="public/budgetzilla.svg" alt="Budgetzilla Logo" width="400" />
</p>

# 🦖 Budgetzilla

**Budgetzilla** is an AI-powered personal finance tracker.  
It helps you keep your expenses in check, monitor budgets, and visualize your financial health—all in one clean, private web app.

---

## 🚀 Features

- 🔒 **Private by design** – your data stays yours  
- 💳 **Chase integration (via Plaid API)** – automatic transaction syncing  
- 📊 **Smart dashboards** – income, expenses, budgets, and trends  
- 📱 **Responsive UI** – works seamlessly on desktop, tablet, and mobile  
- 🎨 **Custom categories & rules** – auto-categorize recurring merchants  

---

## 🛠️ Tech Stack

**Frontend:**
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)

**Backend:**
- [Go](https://golang.org/) - Static file server
- [Plaid API](https://plaid.com/)
- [Postgres](https://www.postgresql.org/)

---

## 📦 Getting Started

This is a monorepo with a Go server and React client.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [Go](https://golang.org/) (v1.21+)

### Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/rdeepak2002/budgetzilla.git
cd budgetzilla
pnpm install-deps
```

### Development

Run the React client in development mode:

```bash
pnpm dev
```

This starts the Vite dev server at `http://localhost:5173`

### Production Build

Build both client and server:

```bash
pnpm build
```

This will:
1. Build the React app
2. Copy built files to `server/public/`
3. You can then run the Go server

### Running Production Server

After building, start the Go server:

```bash
pnpm start
```

The server will serve the React app at `http://localhost:8080`

### Available Scripts

- `pnpm dev` - Run client development server
- `pnpm build` - Build client and copy to server
- `pnpm build:client` - Build client only
- `pnpm build:server` - Build Go server binary
- `pnpm start` - Run production server
- `pnpm lint` - Lint client code

---

## 📸 Screenshots

> coming soon

---

## 🤝 Contributing

This is a personal project, but ideas and feedback are welcome!  
Feel free to open issues or discussions for suggestions.

---

## 📄 License

MIT © 2025 — Built with ❤️ by Deepak Ramalingam  
