import React from 'react';

const CreativeRepo = () => {
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
                <div>
                    {/*<div className="inputbox">
                        <ion-icon name="Collaborateur 1"></ion-icon>
                        <input type="text" required />
                        <label>Collaborateur 1</label>
                    </div>*/}
                </div>
                <button>Valider</button>
            </form>
        </section>
        </body>
        </html>
    );
};

export default CreativeRepo;