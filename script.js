*script.js* (fichier commun à certaines pages)
```
// Exemple de code JavaScript pour la page d'accueil
console.log("Bienvenue sur mon portfolio !");

// Fonction pour afficher les projets
function afficherProjets() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.1)';
        });
        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1)';
        });
    });
}

// Fonction pour afficher les expériences
function afficherExperiences() {
    const experiences = document.querySelectorAll('.experience');
    experiences.forEach((experience) => {
        experience.addEventListener('mouseover', () => {
            experience.style.transform = 'scale(1.1)';
        });
        experience.addEventListener('mouseout', () => {
            experience.style.transform = 'scale(1)';
        });
    });
}

// Fonction pour envoyer le formulaire de contact
function envoyerFormulaire() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulaire envoyé avec succès!');
    });
}

// Appeler les fonctions selon la page
if (document.querySelector('#projects')) {
    afficherProjets();
} else if (document.querySelector('#experience')) {
    afficherExperiences();
} else if (document.querySelector('#contact')) {
    envoyerFormulaire();
}


<script>
    // Appeler la fonction pour afficher les projets
    afficherProjets();
</script>

<script>
    // Appeler la fonction pour afficher les expériences
    afficherExperiences();
</script>

<script>
    // Appeler la fonction pour envoyer le formulaire de contact
    envoyerFormulaire();
</script>
