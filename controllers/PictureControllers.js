const Picture = require('../models/Picture');


exports.create = async (req, res) => {

    try {
        const { name } = req.body;

        const file = req.file;

        const picture = new Picture({
            name,
            image: file.buffer,
            contentType: file.mimetype,
        });

        await picture.save();
        res.json({ message: "Imagem salva com sucesso", });

    } catch (error) {
        res.status(500).json({ message: "Erro ao salvar a imagem (erro no: export.create)", });
    }
};

exports.findAll = async (req, res) => {
    try {
        const picture = await Picture.find();
        res.json(picture);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar as imagens (erro no: export.findALL)", });
    }
};

exports.getImage = async (req, res) => {
    try {
        // Buscando a imagem pelo id no banco de dados
        const picture = await Picture.findById(req.params.id);

        // Verificando se a imagem foi encontrada, caso não, retorna erro 404
        if (!picture) {
            return res.status(404).json({ message: "Imagem não encontrada (erro no: exports.getImage)", });
        }

        // Setando o tipo de conteudo da imagem, 
        res.set('Content-Type', picture.contentType);

        // Mostra a imagem na tela do usuario
        res.send(picture.image);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar a imagem (erro no: exports.getImage depois do catch)", });
    }
}
exports.update = async (req, res) => {
    try {
        const { name } = req.body;

        const file = req.file;

        const picture = await Picture.findById(req.params.id);

        if (!picture) {
            return res.status(404).json({ message: "Imagem não encontrada (erro no: exports.update)", });
        }

        picture.name = name;
        picture.src = file.path;

        await picture.save();

        res.json({ message: "Imagem atualizada com sucesso", });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar a imagem (erro no: exports.update depois do catch)", });
    }
};

exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id);

        if (!picture) {
            return res.status(404).json({ message: "Imagem não encontrada (erro no: exports.remove)", });
        }

        await picture.deleteOne({ _id: req.params.id });

        res.json({ message: "Imagem removida com sucesso", });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar a imagem (erro no: exports.remove depois do catch)", });
    }
}