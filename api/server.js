import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
    try {
        const { pseudo, password } = req.body;
        const rawData = fs.readFileSync('public/users.json');
        const users = JSON.parse(rawData).users;
        const foundUser = users.find(user => user.pseudo === pseudo && user.password === password);

        if (foundUser) {
            res.json({ token: foundUser.token }); // Envoie du token en réponse
        } else {
            res.status(401).json({ error: 'Identifiants incorrects' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});