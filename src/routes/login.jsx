import React from 'react';

const Login = () => {
    return (
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
                <h1>Connection</h1>
                <div className="inputbox">
                    <ion-icon name="pseudo"></ion-icon>
                    <input type="text" required />
                    <label>Utilisateur</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Mot de pass</label>
                </div>

                <button>Log in</button>
                {/*<div className="register">
                    <p>
                        New Teacher ? <a href="register.jsx">Register</a>
                    </p>
                </div>*/}
            </form>
        </section>
        </body>
        </html>
    );
};

export default Login;
