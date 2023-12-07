import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProjectManagement = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        // Récupérer le token depuis le stockage local
        const storedId = localStorage.getItem('userId');
        const token = users.userId.token.getItem('token');
        setUserId(storedId);
        setToken(token);
    }, []);

    const createProject = () => {
        // Utiliser le token comme nécessaire...
        console.log('Id de l\'utilisateur connecté :', userId);
        console.log('Token de l\'utilisateur connecté :', token);

        // Redirection vers la page CreativeProject si nécessaire
        navigate('/creativeProject.jsx');
    };

    return (
        <div>
            <div className="project-management-container">
                <section>
                    <form>
                        <h1>Liste des projets</h1>
                        <p>{userId && `Connecté en tant que : ${userId}`}</p>
                        <p>{token && `Token : ${token}`}</p>
                        <ul className="project-list">
                            <li>
                                <Link to="/projet/1">Projet 1</Link>
                            </li>
                            <li>
                                <Link to="/projet/2">Projet 2</Link>
                            </li>
                            {/* Ajoutez d'autres projets selon vos besoins */}
                        </ul>
                        <div>
                            <button onClick={createProject}>Créer un nouveau projet</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ProjectManagement;