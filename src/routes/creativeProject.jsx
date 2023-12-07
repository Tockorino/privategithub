import React from "react";

const CreativeProject = () => {
    return(
        <div>
            <section>
                <form>
                    <h1>Création De Projet</h1>
                    <div className="inputbox">
                        <ion-icon name="Name of project"></ion-icon>
                        <input type="text" required />
                        <label>Nom du projet</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="Organization"></ion-icon>
                        <input type="text" required />
                        <label>Organisation</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="Generic group name"></ion-icon>
                        <input type="text" required />
                        <label>Groupe</label>
                    </div>
                    <div>
                        <h3>Nombre de participants</h3>
                    </div>
                    <table>
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
                    </table>
                    <button>Créer</button>
                </form>
            </section>
        </div>
    )
};

export default CreativeProject;



