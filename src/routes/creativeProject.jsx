import React from "react";

const CreativeProject = () => {
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>GitHub Test</title>
            <link rel="stylesheet" href="Index.css" />
            <script
                type="module"
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
                noModule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></script>
        </head>
        <body>
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
        </body>
        </html>
    )
};

export default CreativeProject;



