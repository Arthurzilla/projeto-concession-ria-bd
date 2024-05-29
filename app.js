const mysql = require('mysql');
const http = require('http');
const url = require('node:url');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_concessionaria'
})

const callback =  function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
    var rota = url.parse(req.url);

    if(rota.path == '/ford'){
        let query = 'select * from carro where marca_id = 1'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            
            res.end(JSON.stringify(results))
        })
    }else if(rota.path == '/chevy'){
        let query = 'select * from carro where marca_id = 2'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            res.end(JSON.stringify(results))
        })
    }else if(rota.path == '/dodge'){
        let query = 'select * from carro where marca_id = 3'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            res.end(JSON.stringify(results))
        })
    }else if(rota.path == '/pontiac'){
        let query = 'select * from carro where marca_id = 4'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            res.end(JSON.stringify(results))
        })
    }else if(rota.path == '/carros'){
        let query = 'select * from carro'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            res.end(JSON.stringify(results))
        })
    }else if(rota.path == '/marcas'){
        let query = 'select * from marca'
        connection.query(query, function(error, results, fields){
            if(error) throw error;
            res.end(JSON.stringify(results))
        })
    }
};

const server = http.createServer(callback);
server.listen(3000);
console.log('servidor iniciado em http://localhost:3000');