import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";


const ProjectManagement = ({ }) => {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    useEffect(() => {}, []);
    const createProject = () => {

            // Redirection vers la page ProjectManagement si les informations sont correctes
            navigate('/creativeProject.jsx');

    };
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
                            <button onClick={createProject}>Créer un nouveau projet</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ProjectManagement;