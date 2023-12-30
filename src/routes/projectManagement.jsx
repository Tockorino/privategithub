import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
const ProjectManagement = () => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState('');
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);

        // Appel à l'API GitHub pour récupérer les repositories
        const octokit = new Octokit({
            auth: storedToken,
        });

        const fetchRepositories = async () => {
            try {
                const response = await octokit.repos.listForAuthenticatedUser();
                setRepositories(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des repositories:', error.message);
            }
        };

        if (storedToken) {
            fetchRepositories().then(r => console.log('Repositories récupérés !'));
        }
    }, [userToken]);

    const createProject = () => {
        // Utilisez le token comme nécessaire...
        console.log('Token de l\'utilisateur connecté :', userToken);

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
                            {repositories.map(repo => (
                                <li key={repo.id}>
                                    <Link to={`/projet/${repo.id}`}>{repo.name}</Link>
                                </li>
                            ))}
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