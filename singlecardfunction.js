// Récupère tous les éléments avec la classe "icon"
const icons = document.querySelectorAll(".icon");

// Ajoute un gestionnaire d'événement de clic à chaque icône
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Supprime la classe "active" de toutes les icônes
    icons.forEach((icon) => {
      icon.classList.remove("active");
    });

    // Ajoute la classe "active" à l'icône cliquée
    icon.classList.add("active");

    // Récupère la liste associée à l'icône cliquée
    const list = icon.nextElementSibling;

    // Ajoute ou supprime la classe "active" de la liste en fonction de son état actuel
    if (list.classList.contains("active")) {
      list.classList.remove("active");
    } else {
      list.classList.add("active");
    }
  });
});