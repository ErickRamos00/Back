import express from 'express';
import knexdb from './knexfile.js';
import cors from 'cors';
import { validateHeaderValue } from 'http';
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {

    res.send('Servidor rodando!');

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
app.get('/Diretor', async (req, res) => {

    const Diretor = await knexdb('Diretor').select('*');

    res.json(Diretor);

}
);
app.get('/filmes', async (req, res) => {

    const Filmes = await knexdb('Filmes').select('*');
    res.json(Filmes);

}
);

app.get('/Diretor/:diretorid', async (req, res) => {
    const { diretorid } = req.params;
    const Diretor = await knexdb('Diretor').select('*').where({ diretorid });
    if (Diretor.length === 0) {
        return res.status(404).json({ message: 'Diretor nao encontrado' });
    }
    else {
        res.json(Diretor);
    }

});
app.get('/filmes/:idFilme', async (req, res) => {
    const { idFilme } = req.params;
    const filmes = await knexdb('filmes').select('*').where({ idFilme });
    if (filmes.length === 0) {
        return res.status(404).json({ message: 'Filme nao encontrado' });
    }
    else {
        res.json(filmes[0]);
    }
});

app.post('/Diretor', async (req, res) => {
    const { nome } = req.body; 

   
    if (!nome || nome.trim() === '') {
        return res.status(400).json({ error: 'Nome do diretor é obrigatório' });
    }

    try {
       
        const {novoDiretor} = await knexdb('Diretor').insert({ nomeDiretor: nome });
        
        
        res.status(201).json(novoDiretor);
  
    } catch (error) {
        console.error('Erro ao inserir o diretor:', error);
        res.status(500).json({ error: 'Erro ao inserir o diretor' });
    }
});

app.delete('/filmes/:idFilme', async (req, res) => {
    const { idFilme } = req.params;
    const filmes = await knexdb('diretores').select('*').where({ idFilme });
    if (filmes.length === 0) {
        return res.status(404).json({ message: 'filme nao encontrado' });
    }
    else {
        await knexdb('filmes').where({ idFilme }).delete();
        res.json('filme excluido com sucesso!');

    }

app.delete('/Diretor/:diretorid', async (req, res) => {
    const { diretorid } = req.params;
    const Diretor = await knexdb('diretores').select('*').where({ diretorid });
    if (Diretor.length === 0) {
        return res.status(404).json({ message: 'Diretor nao encontrado' });
    }
    else {
        await knexdb('diretores').where({ diretorid }).delete();
        res.json('Diretor excluido com sucesso!');

    }
});
}); 
