import React from 'react';

// info importante
{/*
    String organizationName = '';
    int nbParticipants = 0;
    bool utilisateurValide = true;
    String groupeName = 'Groupe';
    string numRepo = '';
    String collaborator = '';
*/}

//vérification des repos existants et présence de collaborateurs
{/*
    const reposResponse = await octokit.repos.listForOrg({
            org: organizationName,
        });

        for (const repo of reposResponse.data) {
            console.log(repo.name);
            // Récupérez la liste des contributeurs pour chaque repository
            const contributorsResponse = await octokit.repos.listContributors({
                owner: organizationName,
                repo: repo.name,
            });

            console.log('Contributeurs:');
            contributorsResponse.data.forEach(contributor => {
                console.log(contributor.login);
                if (contributor.login === collaborator) {
                    utilisateurValide = false;
                }
            });
        }
*/}

//création de repo
{/*
string repoName = groupeName + numRepo;
const newRepoResponse = await octokit.repos.createInOrg({
    org: organizationName,
    name: repoName,
    description: repoName,
});
*/}

//page de création de repo
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
                        <ion-icon name="Collaborateur"></ion-icon>
                        <input type="text" required />
                        <label>Collaborateur</label>
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