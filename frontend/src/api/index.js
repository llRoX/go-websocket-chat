let socket;

const connect = (cb) => {
    console.log("Attempting Connection...");
    socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = (msg) => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = (event) => {
        console.log("Socket Connection Closed: ", event);
    };

    socket.onerror = (event) => {
        console.log("Socket Error: ", event);
    };

};

const disconnect = () => {
    socket.close();
}


const sendMsg = (msg) => {
    console.log("Sending Message: ", msg);
    socket.send(msg);
}


export { connect, sendMsg, disconnect };