# API REST — Catálogo de Jogos

## Sobre o projeto

Esta API REST foi desenvolvida com Node.js e Express.js para gerenciar um catálogo de jogos eletrônicos. O sistema permite listar, consultar, cadastrar, atualizar e excluir jogos por meio de requisições HTTP.

Os dados são armazenados inicialmente em um array na memória, sem utilização de banco de dados, conforme a proposta da atividade.

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript
- Postman para testar as requisições HTTP

## Estrutura do projeto

```text
api-catalogo-jogos/
├── routes/
│   └── jogos.js
├── evidencias/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Como executar o projeto

### 1. Instalar as dependências

Com o Node.js instalado, abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 2. Iniciar o servidor

Execute:

```bash
node server.js
```

O servidor será iniciado na porta 3000, no endereço:

```text
http://localhost:3000
```

## Endpoints disponíveis

A URL-base da API é `http://localhost:3000`.

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| GET | `/jogos` | Lista todos os jogos cadastrados. |
| GET | `/jogos/:id` | Consulta um jogo pelo ID. |
| POST | `/jogos` | Cadastra um novo jogo. |
| PUT | `/jogos/:id` | Atualiza os dados de um jogo. |
| DELETE | `/jogos/:id` | Exclui um jogo pelo ID. |

## Estrutura dos dados

Cada jogo possui os seguintes campos:

- `id`: identificador do jogo.
- `titulo`: título do jogo.
- `plataforma`: plataforma em que o jogo está disponível.
- `genero`: gênero do jogo.
- `anoLancamento`: ano de lançamento.

### Exemplo de cadastro

Para cadastrar um jogo, envie uma requisição `POST` para `/jogos`, com o corpo no formato JSON:

```json
{
  "titulo": "Hollow Knight",
  "plataforma": "PC",
  "genero": "Metroidvania",
  "anoLancamento": 2017
}
```

## Validações e tratamento de erros

A API verifica se os campos obrigatórios estão presentes no cadastro e retorna `400 Bad Request` quando faltam informações.

Para operações com IDs inexistentes, retorna `404 Not Found`. Rotas não implementadas também recebem uma resposta JSON com status `404 Not Found`.

O servidor possui um middleware que registra o método HTTP e a URL de cada requisição recebida.

## Testes

O funcionamento dos endpoints foi verificado por meio de requisições HTTP no Postman. As capturas de tela dos testes estão organizadas na pasta `imagens_teste_postman`, quando incluída no repositório.

## Observação

Como os dados são armazenados em um array na memória, as alterações realizadas durante a execução não são persistidas após o encerramento ou reinício do servidor.