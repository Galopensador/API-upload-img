const express = require("express"); // Importa o framework Express para criar e gerenciar o servidor web.
const app = express(); // Cria uma instância do Express para configurar o servidor.

// Carrega variáveis de ambiente do arquivo .env para process.env.
require("dotenv").config(); 

// Importa e executa o arquivo de configuração do banco de dados (db.js).
require("./db"); 

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão.
const port = process.env.PORT || 3000; 

// Importa o roteador para gerenciar as rotas relacionadas a "picture".
const pictureRouter = require("./routes/picture");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Define que qualquer origem pode acessar a API.
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, "); // Define os métodos permitidos.
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Define os cabeçalhos permitidos.
    next(); // Chama a próxima função middleware.    
});

// Define que todas as rotas iniciadas com "/picture" serão tratadas pelo pictureRouter.
app.use("/pictures", pictureRouter);



app.listen(port, () => { // Inicia o servidor e o faz escutar na porta definida.
    console.log(`Servidor rodando na porta ${port}`); // Exibe uma mensagem no console indicando que o servidor está rodando.
});