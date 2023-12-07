import React from 'react';

const Register = () => {
    return (
        <div>
            <section>
                <form>
                    <h1>Nouveau Prof</h1>
                    <div className="inputbox">
                        <ion-icon name="Pseudo"></ion-icon>
                        <input type="text" required />
                        <label>Pseudo</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="tokken"></ion-icon>
                        <input type="text" required />
                        <label>Tokken GitHub</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required />
                        <label>Mot de passe</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required />
                        <label>Confirmez mot de pass</label>
                    </div>
                    <button>Enregistrer</button>
                    <div className="login">
                        <p>
                            Vous avez déjà un compte.?<a href="login.jsx">Log in</a>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;
