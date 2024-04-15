# node-rocketseat

## Funcionamento do Node no padrão web

Cliente/servidor:

Neste exemplo, podemos utilizar o padrão Stateful (com estado) e Stateless (sem estado). Isso significa que no Stateful guardamos os dados em memória ou variável de ambiente local, enquanto no Stateless não guardamos esse valor e, quando o navegador termina sua requisição TCP, os dados simplesmente desaparecem. No Stateful, os dados persistem até que a aba da aplicação seja fechada sumindo com esses dados tambem.

Não existe um melhor tudo depende do caso de uso destacando que o padrão Stateless geralmente é mais escalável, já que não requer a manutenção de estado do cliente no servidor, o que pode facilitar a distribuição de carga em ambientes de alto tráfego. Por outro lado, o padrão Stateful pode oferecer benefícios em certos casos de uso, como a manutenção de sessões de usuário em aplicações web tradicionais.

```javascript
import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        // Early return: se bate no return ou chega no return, ele ignora tudo abaixo
        return res
        .setHeader('Content-type','application/json')
        .end(JSON.stringify(users))
    }
    if (method === 'POST' && url === '/users') {
        users.push({
            id:1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
        return res.writeHead(201).end('Criação de usuário')
    }
    return res.writeHead(404).end('Not found')
})

server.listen(3333)
```


## O que são streams em Node.js

As streams em Node.js são um modelo para leitura e escrita de dados por partes. Isso significa que, por exemplo, ao assistir um vídeo no YouTube ou Netflix, o vídeo é carregado em partes. Não é necessário que o vídeo completo seja baixado para começar a assistir. Pequenas partes são carregadas progressivamente, permitindo uma reprodução contínua e fluida. Node.js simplifica e facilita o uso de streams, tornando o processo eficiente e fluido.
