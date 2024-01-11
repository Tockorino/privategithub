import bcrypt from "bcrypt";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const PseudoAdmin = 'theo';
const PasswordAdmin = 'web3';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);

// Construire le chemin complet vers user.json en utilisant le chemin relatif
const filePath = path.join(currentDir, 'data/user.json');

bcrypt.hash(PasswordAdmin, 10, function(err, hash) {
    if (err) {
        console.error('Erreur lors du hachage du mot de passe', err);
        return;
    }

    const adminData = {
        pseudo: PseudoAdmin,
        password: hash
    };
    fs.writeFile(filePath, JSON.stringify(adminData), (err) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement des données admin', err);
        } else {
            console.log('Compte admin enregistré avec succès');
        }
    });
});