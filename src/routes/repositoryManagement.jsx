import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';

const RepositoryManagement = () => {
    const navigate = useNavigate();
    const { orgId } = useParams();
    const [userToken, setUserToken] = useState('');
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);

        const octokit = new Octokit({
            auth: storedToken,
        });

        const fetchRepositories = async () => {
            try {
                const response = await octokit.repos.listForOrg({
                    org: orgId,
                });
                setRepositories(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des dépôts:', error.message);
            }
        };

        if (storedToken) {
            fetchRepositories().then(() => console.log('Dépôts récupérés !'));
        }
    }, [userToken, orgId]);

    const createProject = () => {
        console.log('Token de l\'utilisateur connecté :', userToken);
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
                                    <Link to={`/reposMembers/${orgId}/${repo.name}`}>{repo.name}</Link>
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

export default RepositoryManagement;