import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import bcrypt from 'bcrypt';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const usersFilePath = 'public/user.json';
// Endpoint pour la connexion
app.post('/login', (req, res) => {
    try {
        const { pseudo, password } = req.body;
        const rawData = fs.readFileSync(usersFilePath);
        const users = JSON.parse(rawData).users;
        const foundUser = users.find(user => user.pseudo === pseudo);

        if (foundUser) {
            // Vérifier le mot de passe avec bcrypt
            bcrypt.compare(password, foundUser.password, (err, passwordMatch) => {
                if (err) {
                    console.error('Erreur lors de la comparaison des mots de passe :', err);
                    res.status(500).json({ error: 'Erreur interne du serveur' });
                } else if (passwordMatch) {
                    res.json({ token: foundUser.token });
                } else {
                    res.status(401).json({ error: 'Identifiants incorrects' });
                }
            });
        } else {
            res.status(401).json({ error: 'Identifiants incorrects' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.post('/createProject', (req, res) => {
    try {
        const { projectName, organization, group, minParticipants, maxParticipants } = req.body;
        const token = req.headers.authorization.replace('Bearer ', '');

        // Vérifier l'authenticité du token, par exemple, en utilisant un middleware d'authentification

        // Envoyer les données à GitHub ou effectuer d'autres actions nécessaires
        // Utilisez le token et les données du projet pour créer un nouveau projet sur GitHub

        res.json({ success: true });
    } catch (error) {
        console.error('Erreur lors de la création du projet :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});