import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import { Octokit } from '@octokit/rest';
const app = express();
const port = 3001;
const octokit = new Octokit({
    auth: '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',
});
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

// Fonction pour vérifier l'existence de l'utilisateur
const checkUserExistence = (pseudo) => {
    const rawData = fs.readFileSync('public/users.json');
    const users = JSON.parse(rawData).users;
    return users.find(user => user.pseudo === pseudo);
};

app.post('/addCollaborator', async (req, res) => {
    try {
        const { collaboratorName, repoName } = req.body;

        // Vérifier si l'utilisateur GitHub existe
        const octokit = new Octokit();
        const userExists = await octokit.request('GET /users/{username}', {
            username: collaboratorName,
        }).then(() => true).catch(() => false);

        if (userExists) {
            // Ajouter le collaborateur
            await octokit.repos.addCollaborator({
                owner: 'Test-Rest-Api-web',  // Remplacez 'nom_du_proprietaire' par le propriétaire réel
                repo: repoName,
                username: collaboratorName,
                permission: 'push', // ou un autre niveau de permission
            });

            res.json({ success: true });
        } else {
            res.status(404).json({ error: 'Utilisateur GitHub non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de l\'ajout du collaborateur :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});