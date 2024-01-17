import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Octokit } from '@octokit/rest';

const ReposMembers = () => {
    const { orgId, repoName } = useParams();
    const [members, setMembers] = useState([]);
    const [userToken, setUserToken] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);

        const octokit = new Octokit({
            auth: storedToken,
        });

        const fetchMembers = async () => {
            try {
                const response = await octokit.repos.listCollaborators({
                    owner: orgId,
                    repo: repoName,
                });
                setMembers(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des membres du dépôt:', error.message);
                setError('Une erreur s\'est produite lors de la récupération des membres du dépôt.');
            }
        };

        if (storedToken) {
            fetchMembers().then(() => console.log('Membres du dépôt récupérés !'));
        }
    }, [orgId, repoName, userToken]);

    return (
        <div>
        <div className="project-management-container">
            <section>
                <form>
            <h1>Membres du Dépôt</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul className="project-list">
                    {members.length === 0 ? (
                        <p>Aucun collaborateur présent dans ce dépôt.</p>
                    ) : (
                        members.map((member) => (
                            <li key={member.id}>{member.login}</li>
                        ))
                    )}
                </ul>
            )}
                </form>
            </section>
        </div>
        </div>
    );
};

export default ReposMembers;