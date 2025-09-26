// Animation des stages au scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineScroll() {
  timelineItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si l'élément est à moins de 3/4 de la hauteur de l'écran
    if (itemTop < windowHeight * 0.75) {
      item.classList.add('visible');
    }
  });
}

// Écouteur d'événement pour le scroll
document.addEventListener("DOMContentLoaded", function () {
  // Animation pour la timeline
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });
  items.forEach(item => observer.observe(item));

  // Bouton de retour en haut
  const backToTopButton = document.getElementById("backToTop");
  
  // Afficher le bouton quand l'utilisateur descend
  window.addEventListener('scroll', function() {
    // Vérifier si on est assez bas dans la page
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
});
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Vérifie que les éléments existent
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  } else {
    console.error("Erreur : bouton hamburger ou menu introuvable.");
  }
});
