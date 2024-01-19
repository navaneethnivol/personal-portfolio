package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func main() {

	// Global Vars
	port := 3001

	fileServer := http.FileServer(http.Dir("./frontend/build"))

	// Database Connection

	// const file string = "database.db"
	// db, err := sql.Open("sqlite3", file)

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// defer db.Close()

	// Routes
	http.Handle("/", fileServer)
	http.HandleFunc("ping", routeHandler)

	fmt.Printf("starting server on port: %d", port)
	if err := http.ListenAndServe(":"+strconv.Itoa(port), nil); err != nil {
		log.Fatal(err)
	}

	// const create string = `
	// 	CREATE TABLE IF NOT EXISTS activities (
	// 	id INTEGER NOT NULL PRIMARY KEY,
	// 	time DATETIME NOT NULL,
	// 	description TEXT
	// 	);
	// `

	// fs := http.FileServer(http.Dir("frontend/build"))
	// http.Handle("/", fs)

	// log.Println("Listening on :3000.")
	// err := http.ListenAndServe(":3000", nil)
	// if err != nil {
	// 	log.Fatal(err)
	// }
}

func routeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/ping" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	fmt.Fprintf(w, "pong!")
}
