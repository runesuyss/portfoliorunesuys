document.addEventListener("scroll", () => {
const navbar = document.querySelector('#navbar'); // Correct ID selecteren
    if (window.scrollY > 0)
    {
    navbar.classList.add('scrolled'); // Zorg dat de juiste klasse wordt toegevoegd
    }
    else
    {
    navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#navbar a");
    const sections = document.querySelectorAll("section");

    function setActiveLink() {
        let index = sections.length;

        // Vind de huidige zichtbare sectie
        while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

        // Verwijder de 'active' class van alle links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Voeg 'active' toe aan de link van de huidige sectie
        if (navLinks[index]) {
            navLinks[index].classList.add("active");
        }
    }

    setActiveLink(); // Initialiseren bij het laden van de pagina
    window.addEventListener("scroll", setActiveLink); // Updaten bij scrollen
});
