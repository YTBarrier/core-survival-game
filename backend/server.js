import express from 'express';
import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(path.dirname(import.meta.url));
const app = express();

app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');
    next();
});
app.get('/menu', (req, res) => {
    const object = { head: '', body: '' };
    const headStream = createReadStream(path.join(__dirname, 'menu-head.html'));
    headStream.on('data', chunk => object.head += chunk.toString());
    headStream.on('close', () => {
        const bodyStream = createReadStream(path.join(__dirname, 'menu-body.html'));
        bodyStream.on('data', chunk => object.body += chunk.toString());
        bodyStream.on('close', () => res.end( JSON.stringify(object) ));
    });
});
app.get('/game', (req, res) => {
    const object = { head: '', body: '' };
    const headStream = createReadStream(path.join(__dirname, 'game-head.html'));
    headStream.on('data', chunk => object.head += chunk.toString('utf-8'));
    headStream.on('close', () => {
        const bodyStream = createReadStream(path.join(__dirname, 'game-body.html'));
        bodyStream.on('data', chunk => object.body += chunk.toString('utf-8'));
        bodyStream.on('close', () => res.end( JSON.stringify(object) ));
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));