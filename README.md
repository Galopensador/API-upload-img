## Como Usar

1. Clone o repositório para sua máquina local:
  ```bash
  git clone https://github.com/Galopensador/API-upload-img.git
  ```

2. Navegue até o diretório do projeto:
  ```bash
  cd <NOME_DO_DIRETORIO>
  ```

3. Instale as dependências necessárias:
  ```bash
  npm install
  ```

4. Configure as variáveis de ambiente:
  - Crie um arquivo `.env` na raiz do projeto.
  - Adicione as seguintes variáveis:
    ```env
    MONGO_URI=<SUA_CONEXAO_MONGO>
    PORT=<PORTA_DESEJADA>
    ```

5. Inicie o servidor:
  ```bash
  npm start
  ```

6. Acesse a aplicação no navegador:
  - URL padrão: `http://localhost:<PORTA_DESEJADA>`

## Tecnologias Usadas

- **JavaScript**: Linguagem principal para o desenvolvimento da aplicação.
- **MongoDB**: Banco de dados NoSQL para armazenar as informações das imagens.
- **Express**: Framework para criar o servidor e gerenciar rotas.
- **Multer**: Middleware para upload de arquivos.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.


