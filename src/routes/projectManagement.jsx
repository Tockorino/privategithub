import React from 'react';
import { Link } from 'react-router-dom';

const ProjectManagement = ({ userEmail }) => {
    return (
        <div>
            <div className="project-management-container">
                <section>
                    <form>
                        <h1>Liste des projets</h1>
                        <ul className="project-list">
                            <li>
                                <Link to="/projet/1">Projet 1</Link>
                            </li>
                            <li>
                                <Link to="/projet/2">Projet 2</Link>
                            </li>
                            {/* Ajoutez d'autres projets selon vos besoins */}
                        </ul>
                        <div>
                            <button>
                                <Link to="/nouveau-projet">Créer un nouveau projet</Link>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ProjectManagement;