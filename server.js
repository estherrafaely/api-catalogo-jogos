const express = require('express');

const app = express();

const PORT = 3000;

//Permite que o servidor receba dados no formato JSON
app.use(express.json());

//Registra as requisições  recebidas
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const jogosRoutes = require('./routes/jogos');

app.use('/jogos', jogosRoutes);

// Quando o endereço solicitado não existe
app.use((req, res) => {
    res.status(404).json({
        mensagem: 'Rota não encontrada.'
    });
});

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});