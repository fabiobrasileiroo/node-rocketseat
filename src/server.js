import http from 'node:http'

//requisicao = req e resposta = res
const server = http.createServer((req,res) => {
    return res.end('Hello ol')
})

server.listen(3333)
