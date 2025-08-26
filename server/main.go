package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Serve static files from public directory
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Check if file exists
		path := filepath.Join("public", r.URL.Path)
		if _, err := os.Stat(path); os.IsNotExist(err) {
			// If file doesn't exist, serve index.html for SPA routing
			http.ServeFile(w, r, "public/index.html")
			return
		}
		// Serve the requested file
		fs.ServeHTTP(w, r)
	}))

	fmt.Printf("Server starting on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}