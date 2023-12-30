import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreativeProject = () => {
    const [userToken, setUserToken] = useState('');
    const [projectName, setProjectName] = useState('');
    const [organization, setOrganization] = useState('');
    const [group, setGroup] = useState('');
    const [minParticipants, setMinParticipants] = useState(0);
    const [maxParticipants, setMaxParticipants] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Récupérer le token depuis le stockage local
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêcher la soumission par défaut du formulaire

        // Utilisez le token comme nécessaire...
        console.log('Token de l\'utilisateur connecté :', userToken);

        // Envoyer les données au serveur Node.js
        const response = await fetch('http://localhost:3001/createProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                projectName,
                organization,
                group,
                minParticipants,
                maxParticipants,
            }),
        });

        if (response.ok) {
            console.log('Projet créé avec succès !');

            // Rediriger vers la page ProjectManagement après la création du projet
            navigate('/projectManagement.jsx');
        } else {
            const errorData = await response.json();
            console.error('Erreur lors de la création du projet :', errorData.error);
            // Gérer l'erreur côté client
        }
    };

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Création De Projet</h1>
                    <p>{userToken && `Connecté en tant que : ${userToken}`}</p>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                        <label>Nom du projet</label>
                    </div>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                        />
                        <label>Organisation</label>
                    </div>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
                        />
                        <label>Groupe</label>
                    </div>
                    <div>
                        <h3>Nombre de participants</h3>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div className="inputbox">
                                    <ion-icon name="Min"></ion-icon>
                                    <input
                                        type="number"
                                        required
                                        value={minParticipants}
                                        onChange={(e) => setMinParticipants(e.target.value)}
                                    />
                                    <label>Min</label>
                                </div>
                            </td>
                            <td>
                                <div className="inputbox">
                                    <ion-icon name="Max"></ion-icon>
                                    <input
                                        type="number"
                                        required
                                        value={maxParticipants}
                                        onChange={(e) => setMaxParticipants(e.target.value)}
                                    />
                                    <label>Max</label>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit">
                        Créer
                    </button>
                </form>
            </section>
        </div>
    );
};

export default CreativeProject;



