// Importanto o multer, um middleware para upload de arquivos
const multer = require("multer");

// Configurando o multer para armazenar os arquivos em memória
const storage = multer.memoryStorage();

// middleware do multer para upload de img
const upload = multer ({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //limite de 5mb
    },
});


// Exportando o middleware para uso em outros arquivos
module.exports = upload;