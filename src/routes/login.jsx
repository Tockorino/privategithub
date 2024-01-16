import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pseudo, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('userToken', data.token);
                navigate('/orgManagement.jsx');
            } else {
                const errorData = await response.json();
                alert(`Erreur lors de la connexion : ${errorData.error}`);
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            alert('Erreur lors de la connexion.');
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