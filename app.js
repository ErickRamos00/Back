import express from 'express';
import knexdb from './knexfile.js';
import cors from 'cors';
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
        res.json(Diretor[0]);
        
    }
    );

    app.get('/Diretor/:diretorid', async (req, res) => {
            const {diretorid} = req.params;
            const Diretor = await knexdb('Diretor').select('*').where({diretorid});
            if (Diretor.length === 0) {
                return res.status(404).json({ message: 'Diretor nao encontrado' });
            }
            else {
                res.json(Diretor[0]);
            }
            
    });
app.post ('/Diretor', async (req, res) => {
    const {nomeDiretor} = req.body;

     const novoDiretor = await knexdb('Diretor').insert({nomeDiretor});
     
     res.send('Diretor cadastrado com sucesso!');

});

app.delete('/Diretor/:diretorid', async (req, res) => {
    const {diretorid} = req.params;
    const Diretor = await knexdb('diretores').select('*').where({diretorid});
    if (Diretor.length === 0) {
        return res.status(404).json({ message: 'Diretor nao encontrado' });
    }
    else {
        await knexdb('diretores').where({diretorid}).delete();
        res.json('Diretor excluido com sucesso!');   

    }});