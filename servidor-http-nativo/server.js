import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer();


const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
     const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/saudacao'){
        const nome = urlObj.searchParams.get('nome');
        return res.end(JSON.stringify({"nome" : nome}));
    
    }
    
    else if (req.method === 'GET' && urlObj.pathname === '/'){
        console.log(`Requisição recebida! ${req.method} ${req.url}`);
        return res.end(JSON.stringify({"data" : "está é a pagina inicial"}));
    
    }
    
    else if (req.method === 'GET' && urlObj.pathname === '/contato'){
        console.log(`Requisição recebida! ${req.method} ${req.url}`);
        return res.end(JSON.stringify({"data" : [{"telefone" : "67 99999999" }, {"email": "email@gmail.com"}]}));
    
    }
    
    else if (req.method === 'GET' && urlObj.pathname === '/produto'){
        console.log(`Requisição recebida! ${req.method} ${req.url}`);
        return res.end(JSON.stringify(
            {"data" : [{"descricao" : "nome do produto" }, {"preco": "xxxxxx"}]}));
    
    }
    
    else if (req.method === 'GET' && urlObj.pathname === '/status'){
        console.log(`Requisição recebida! ${req.method} ${req.url}`);
        return res.end(JSON.stringify({ "status": "ok" }));
    }
   

     res.statusCode = 404;
     return res.end(JSON.stringify({"erro" : "Nenhuma rota foi encontrada!! verifique o endereço de acesso."}));


    return res.end(JSON.stringify({ "chave": "valor" }));


    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    res.end();
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});			