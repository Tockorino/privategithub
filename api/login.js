import express from "express";
import fs from "fs/promises";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Endpoint pour la gestion de la connexion
router.post('/login', async (req, res) => {
    const { pseudo, password } = req.body;

    try {
        // Lisez le contenu du fichier user.json
        const usersData = await fs.readFile('./public/user.json', 'utf-8');
        const users = JSON.parse(usersData);

        // Recherchez l'utilisateur dans la liste
        const user = users.users.find(u => u.pseudo === pseudo);

        if (user) {
            // Comparez le mot de passe fourni avec le mot de passe stocké haché
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                // Si le mot de passe correspond, générez un token d'authentification
                const token = jwt.sign({ pseudo: user.pseudo, userId: user.id }, 'votre_secret_key_secrete', { expiresIn: '1h' });

                // Envoyez le token au client
                res.json({ token });
            } else {
                // Si le mot de passe ne correspond pas
                res.status(401).json({ error: 'Mot de passe incorrect' });
            }
        } else {
            // Ajoutez automatiquement un nouvel utilisateur au fichier users.json
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = {
                id: users.users.length + 1, // Vous devrez ajuster cela en fonction de votre structure d'utilisateur réelle
                pseudo,
                password: hashedPassword,
                token: jwt.sign({ pseudo, userId: users.users.length + 1 }, 'votre_secret_key_secrete', { expiresIn: '1h' }),
            };

            users.users.push(newUser);

            // Écrivez la mise à jour du fichier users.json
            await fs.writeFile('./public/users.json', JSON.stringify(users, null, 2));

            // Envoyez le token au client
            res.json({ token: newUser.token });
        }
    } catch (error) {
        // Gérez les erreurs
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

export default router;