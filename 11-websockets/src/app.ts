import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    console.log('Client connected');

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('desde el cliente %s', data);

        const payload = JSON.stringify({
            type: 'custom-message',
            payload: data.toString(),
        })

        // ws.send(payload);

        //* Todos - incluyente
        // wss.clients.forEach(function each(client) {
        //     if (client.readyState === WebSocket.OPEN) {
        //         client.send(payload, { binary: false });
        //     }
        // });
        // * Todos excluyente
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(payload, { binary: false });
            }
        });
    });

    // ws.send('hola desde el servidor');

    ws.on('close', () => {
        console.log('client disconnected');
    });

});

console.log('server runnin on port 3000');