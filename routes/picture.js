/**
 * @fileoverview Rotas para lidar com operações relacionadas a imagens.
 * Este arquivo define os endpoints para criar, recuperar, atualizar e deletar imagens.
 * Ele utiliza o Multer para upload de arquivos e delega a lógica ao PictureController.
 */

// Rota para criar uma nova imagem, utilizando o middleware de upload de arquivo.
router.post("/", upload.single("file"), PictureController.create);

// Rota para buscar todas as imagens armazenadas.
router.get("/", PictureController.findAll);

// Rota para buscar uma imagem específica pelo ID.
router.get("/:id", PictureController.getImage);

// Rota para atualizar uma imagem existente pelo ID, com suporte a upload de arquivo.
router.put("/:id", upload.single("file"), PictureController.update);

// Rota para remover uma imagem específica pelo ID.
router.delete("/:id", PictureController.remove);


module.exports = router;