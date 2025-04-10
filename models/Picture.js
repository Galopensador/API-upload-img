const mongoose = require("mongoose");

// Definindo um Schema para as imagens
const PictureSchema = new Schema({
    // Campo do tipo string e obrigatorio
    name: { type: String, required: true},
    //  armazena como buffer
    Imagem: { type: Buffer, required: true},
    // Campo para armazenar o tipo de imagem
    contentType: { type: String, required: true},
});

// Exportando o modelo em outros arquivos
module.exports = mongoose.model('Picture', PictureSchema);