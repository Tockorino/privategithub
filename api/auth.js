import fs from 'fs';
import bcrypt from 'bcryptjs';

const filePath = './users.json'; // Remplacez par le chemin correct vers votre fichier JSON

const saltRounds = 10;

// Fonction pour crypter un mot de passe
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

// Fonction pour comparer un mot de passe avec son hachage
const comparePassword = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
};

// Fonction pour ajouter un nouvel utilisateur au fichier JSON avec mot de passe crypté
const addUser = async (username, password) => {
    try {
        const existingData = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(existingData);

        const hashedPassword = await hashPassword(password);

        users.push({ username, password: hashedPassword });

        await fs.writeFile(filePath, JSON.stringify(users, null, 2));

        console.log('Utilisateur ajouté avec succès.');
    } catch (error) {
        throw error;
    }
};

// Fonction pour vérifier l'authentification d'un utilisateur
const authenticateUser = async (username, password) => {
    try {
        const existingData = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(existingData);

        const user = users.find((user) => user.username === username);

        if (user) {
            const isPasswordMatch = await comparePassword(password, user.password);

            if (isPasswordMatch) {
                return user;
            } else {
                return null; // Mot de passe incorrect
            }
        } else {
            return null; // Utilisateur non trouvé
        }
    } catch (error) {
        throw error;
    }
};

module.exports = { addUser, authenticateUser };