import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);  // Ajout de setUsers
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/users.json');
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Erreur lors du chargement des utilisateurs :', error);
            }
        };

        fetchUsers().then(() => console.log('Utilisateurs chargés'));
    }, []);

    const handleLogin = () => {
        // Vérification des informations d'identification
        const foundUser = users.find(user => user.pseudo === pseudo && user.password === password);

        if (foundUser) {
            // Redirection vers la page ProjectManagement si les informations sont correctes
            navigate('/projectManagement.jsx');
        } else {
            // Gérer le cas où les informations d'identification sont incorrectes
            alert('Identifiants incorrects');
        }
    };

    return (
        <div>
            <section>
                <form>
                    <h1>Se connecter</h1>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <label>Pseudo</label>
                    </div>
                    <div className="inputbox">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Mot de passe</label>
                    </div>
                    <button type="button" onClick={handleLogin}>
                        Connexion
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Login;