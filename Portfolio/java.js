document.addEventListener("DOMContentLoaded", function () {
  
  // --- MENU BURGER ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    // Ouvrir / Fermer le menu au clic sur le burger
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Fermer le menu quand on clique sur un lien pour éviter qu'il reste ouvert
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // --- Animation pour la timeline (Apparition au scroll) ---
  const items = document.querySelectorAll(".timeline-item");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));


  // --- Bouton de retour en haut ---
  const backToTopButton = document.getElementById("backToTop");
  
  if (backToTopButton) {
      // Afficher le bouton quand l'utilisateur descend de plus de 500px
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      });

      // Retour en haut quand on clique sur le bouton
      backToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
  }
});