import React from 'react';

const Register = () => {
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
                nomodule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></script>
        </head>
        <body>
        <section>
            <form>
                <h1>New Teacher</h1>
                <div className="inputbox">
                    <ion-icon name="person-outline"></ion-icon>
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Confirm Password</label>
                </div>
                <button>Register</button>
                <div className="login">
                    <p>
                        Already have an account? <a href="login.jsx">Log in</a>
                    </p>
                </div>
            </form>
        </section>
        </body>
        </html>
    );
};

export default Register;
