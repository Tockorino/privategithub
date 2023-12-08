import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProjectManagement = () => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState('');

    useEffect(() => {
        // Récupérer le token depuis le stockage local
        const storedToken = localStorage.getItem('userToken');

        setUserToken(storedToken);
    }, []);

    const createProject = () => {
        // Utiliser le token comme nécessaire...
        console.log('Id de l\'utilisateur connecté :', userToken);

        // Redirection vers la page CreativeProject si nécessaire
        navigate('/creativeProject.jsx');
    };

    return (
        <div>
            <div className="project-management-container">
                <section>
                    <form>
                        <h1>Liste des projets</h1>
                        <p>{userToken && `Token : ${userToken}`}</p>
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