const { Octokit } = require('@octokit/rest');

const organizationName = 'Test-Rest-Api-Web';
const accessToken = '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';

const octokit = new Octokit({
    auth: accessToken,
});

async function getMembers() {
    try {
        // Récupérez la liste des membres de l'organisation
        const membersResponse = await octokit.orgs.listMembers({
            org: organizationName,
        });

        // Affichez la liste des membres
        console.log('Membres de mon organisation GitHub:');
        membersResponse.data.forEach(member => {
            console.log(member.login);
        });

        // Récupérez la liste des repositories de l'organisation
        const reposResponse = await octokit.repos.listForOrg({
            org: organizationName,
        });

        console.log('\nRepositories de mon organisation GitHub:');
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
            });
        }
        // Créez un nouveau repository pour l'utilisateur authentifié dans l'organisation
        const newRepoResponse = await octokit.repos.createInOrg({
            org: organizationName,
            name: 'Groupe02',
            description: 'Créé par le script Node.js manuellement',
        });

        console.log('\nNouveau repository créé:');
        console.log(newRepoResponse.data);
    } catch (error) {
        // Gérez les erreurs
        console.error('Erreur lors de la récupération des données:', error.message);
    }
}

// Appelez la fonction pour récupérer les membres, les repositories et les contributeurs
getMembers().then(() => console.log('Fin du script'));