import SocketIo from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.Server(app);

export default function startServer(store) {
    app.get('/ping', function(req, res) {
        res.send('Hello from the server!');
    });

    const io = SocketIo(server);
    server.listen(8080);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}
