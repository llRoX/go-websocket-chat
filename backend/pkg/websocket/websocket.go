package websocket

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// Connection Upgrader (HTTP -> Websocket)
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Websocket Endpoint Setup
func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	// Upgrade Connection
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return conn, err
	}

	return conn, nil
}
