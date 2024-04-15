import http from 'node:http'
// StateFul != Stateless
//requisicao = req e resposta = res

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        // Early return ou seja se bate no return ou chega no return ele ignora tudo em baixo
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
