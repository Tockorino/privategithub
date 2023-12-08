import React, {useEffect, useState} from "react";

const CreativeProject = () => {
    const [userToken, setUserToken] = useState('');
    useEffect(() => {
        // Récupérer le token depuis le stockage local
        const storedToken = localStorage.getItem('userToken');
        setUserToken(storedToken);
    }, []);

    const newProject = () => {
        // Utiliser le token comme nécessaire...
        console.log('Token de l\'utilisateur connecté :', userToken);

        //tr ne peut pas être enfant de table directement il faut passer par tbody
    };
    return(
        <div>
            <section>
                <form>
                    <h1>Création De Projet</h1>
                    <p>{userToken && `Connecté en tant que : ${userToken}`}</p>
                    <div className="inputbox">
                        <input type="text" required />
                        <label>Nom du projet</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" required />
                        <label>Organisation</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" required />
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
                                    <input type="number" required />
                                    <label>Min</label>
                                </div>
                            </td>
                            <td>
                                <div className="inputbox">
                                    <ion-icon name="Max"></ion-icon>
                                    <input type="number" required />
                                    <label>Max</label>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={newProject}>Créer</button>
                </form>
            </section>
        </div>
    )
};

export default CreativeProject;



