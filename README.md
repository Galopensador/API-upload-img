# API de Upload de Imagens

Este projeto é uma aplicação web para upload, exibição e gerenciamento de imagens. Ele utiliza Node.js, Express e MongoDB para o backend, e HTML, CSS e JavaScript para o frontend.

## Funcionalidades

- **Upload de Imagens**: Envie imagens para o servidor.
- **Exibição de Galeria**: Visualize as imagens enviadas em uma galeria.
- **Exclusão de Imagens**: Delete imagens específicas.
- **Notificações**: Mensagens de sucesso ou erro para ações realizadas.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Multer (para upload de arquivos)
  - dotenv (para variáveis de ambiente)

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## Pré-requisitos

- Node.js instalado na máquina.
- MongoDB configurado e acessível.

## Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/API-upload-img.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd API-upload-img
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as seguintes variáveis:
     ```env
     DB_USER=<SEU_USUARIO_MONGO>
     DB_PASS=<SUA_SENHA_MONGO>
     PORT=4000
     ```

5. **Inicie o servidor**:
   ```bash
   npm start
   ```

6. **Acesse a aplicação no navegador**:
   - URL padrão: `http://localhost:4000`

## Estrutura do Projeto

```
API-upload-img/
├── app.js                # Arquivo principal da aplicação
├── db.js                 # Configuração do banco de dados
├── routes/               # Rotas da aplicação
│   └── picture.js
├── models/               # Modelos do banco de dados
│   └── Picture.js
├── controllers/          # Controladores da aplicação
│   └── PictureControllers.js
├── config/               # Configurações adicionais
│   └── multer.js
├── public/               # Arquivos estáticos (HTML, CSS, JS)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env                  # Variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```

## Rotas da API

- **POST `/pictures`**: Faz o upload de uma nova imagem.
- **GET `/pictures`**: Retorna todas as imagens.
- **GET `/pictures/:id/image`**: Retorna uma imagem específica.
- **DELETE `/pictures/:id`**: Deleta uma imagem específica.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Agradecimentos

- Ao Docente(Professor) **_Gabriel Godoy_** por ajudar a gente nessa atividade durante o curso técnico.