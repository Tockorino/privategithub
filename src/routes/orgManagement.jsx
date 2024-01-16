import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';

const OrgManagement = () => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState('');
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);

        const octokit = new Octokit({
            auth: storedToken,
        });

        const fetchOrganizations = async () => {
            try {
                const response = await octokit.orgs.listForAuthenticatedUser();
                setOrganizations(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des organisations:', error.message);
            }
        };

        if (storedToken) {
            fetchOrganizations().then(() => console.log('Organisations récupérées !'));
        }
    }, [userToken]);


    return (
        <div>
            <div className="project-management-container">
                <section>
                    <form>
                        <h1>Liste des organisations</h1>
                        <p>{userToken && `Token : ${userToken}`}</p>
                        <ul className="project-list">
                            {organizations.map(org => (
                                <li key={org.id}>
                                    <Link to={`/repositoryManagement/${org.login}`}>{org.login}</Link>
                                </li>
                            ))}
                        </ul>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default OrgManagement;