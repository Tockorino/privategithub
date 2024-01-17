import React, { useState } from 'react';

const CreativeRepo = () => {
    const [collaboratorName, setCollaboratorName] = useState('');
    const [repoName, setRepoName] = useState('');

    const handleAddCollaborator = async () => {
        try {
            const response = await fetch('http://localhost:3001/addCollaborator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ collaboratorName, repoName }),
            });

            const data = await response.json();
            console.log(data);

            // Réinitialiser les champs après l'ajout du collaborateur
            setCollaboratorName('');
            setRepoName('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du collaborateur :', error);
        }
    };

    return (
        <div>
            <section>
                <form>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={collaboratorName}
                            onChange={(e) => setCollaboratorName(e.target.value)}
                        />
                        <label>Nom du Collaborateur</label>
                    </div>
                    <div className="inputbox">
                        <input
                            type="text"
                            required
                            value={repoName}
                            onChange={(e) => setRepoName(e.target.value)}
                        />
                        <label>Nom du Dépôt</label>
                    </div>
                    <button type="button" onClick={handleAddCollaborator}>
                        Valider
                    </button>
                </form>
            </section>
        </div>
    );
};

export default CreativeRepo;