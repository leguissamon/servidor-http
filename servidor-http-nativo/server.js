import http from 'node:http';

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) =>{
    console.log(`servidor funcionando! ${req.method} ${req.url}`);
    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end("Recurso criao");
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`)
});