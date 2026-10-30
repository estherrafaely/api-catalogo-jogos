const express = require('express');

const router = express.Router();

//Array que armazena os jogos em memória
let jogos = [
    {
        id: 1, 
        titulo: 'Minecraft', 
        plataforma: 'PC', 
        genero: 'Sandbox',
        anoLancamento: 2011
    },
    {
        id: 2, 
        titulo: 'God of War',
        plataforma: 'Ação e aventura',
        anoLancamento: 2018
    },
];

//GET /jogos - Listar todos os jogos
router.get('/', (req, res) => {
    res.status(200).json(jogos);
});

//GET /jogos/ - Buscar um jogo pelo ID
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const jogo = jogos.find(jogo => jogo.id === id);

    if (!jogo) {
        return res.status(404).json({
            mensagem: 'Jogo não encontrado.'
        });
    }

    res.status(200).json(jogo);
});

// POST /jogos - Cadastrar um novo jogo
router.post('/', (req, res) => {
    const {titulo, plataforma, genero, anoLancamento} = req.body;

    //Verifica se todos os campos obrigatórios foram enviados
    if (
        !titulo || 
        !plataforma ||
        !genero ||
        anoLancamento === undefined ||
        anoLancamento === null ||
        anoLancamento === ''
    ) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios: titulo, plataforma, genero e anoLancamento.'
        });
    }

    //Gera um ID para o novo jogo
    const novoId = jogos.length > 0
    ? Math.max(...jogos.map(jogo => jogo.id)) + 1
    : 1;

    const novoJogo = {
        id: novoId, 
        titulo, 
        plataforma,
        genero, 
        anoLancamento
    };

    //Adiciona o novo jogo ao array
    jogos.push(novoJogo);

    //Retorna 201 porque o jogo foi criado
    res.status(201).json(novoJogo);
});

// PUT /jogos/:id - Atualizar um jogo
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const indice = jogos.findIndex(jogo => jogo.id === id);

    //Verifica se o jogo existe
    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Jogo não encontrado.'
        });
    }

    const { titulo, plataforma, genero, anoLancamento } = req.body;

    //Verifica se todos os campos foram informados
    if (
        !titulo ||
        !plataforma ||
        !genero ||
        anoLancamento === undefined ||
        anoLancamento === null ||
        anoLancamento === ''
    ) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios: titulo, plataforma, genero e anoLancamento.'
        });
    }

    // Substitui os dados do jogo, mantendo o mesmo ID
    const jogoAtualizado = {
        id, 
        titulo, 
        plataforma, 
        genero, 
        anoLancamento
    };

    jogos[indice] = jogoAtualizado;

    res.status(200).json(jogoAtualizado);
});

// DELETE /jogos/:id - Excluir um jogo
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = jogos.findIndex(jogo => jogo.id === id);

    //Verifica se o jogo existe
    if (indice === -1 ) {
        return res.status(404).json({
            mensagem: 'Jogo não encontrado.'
        });
    }

    //Remove o jogo do array
    const jogoRemovido = jogos.splice(indice, 1)[0];

    res.status(200).json({
        mensagem: 'Jogo excluído com sucesso.',
        jogo: jogoRemovido
    });
});


module.exports = router;
