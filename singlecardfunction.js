// Sélectionnez toutes les icônes
const icons = document.querySelectorAll('.icons');
console.log(icons);
// Ajoutez un écouteur d'événements click à chaque icône
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Sélectionnez toutes les divs qui ont la classe "hide"
    hiddenDivs = document.querySelectorAll('.collapse-advanced-search');
    // console.log('div', hiddenDivs);

    // Retirez la classe "hide" de toutes les divs qui ont cette classe
    hiddenDivs.forEach(div => {
      div.classList.remove('show');
    });

    // Sélectionnez la div associée à l'icône qui a été cliquée
    const clickedIconId = icon.id;
    console.log(clickedIconId)
    const clickedDiv = document.querySelector(`#${clickedIconId.replace('icon', 'collapse')}`);

    // Ajoutez la classe "hide" à toutes les autres divs
    hiddenDivs.forEach(div => {
        if (div.id == clickedDiv.id) {
        console.log(div.id, clickedDiv.id);
        div.classList.add('collapse');
    }
    });
  });
});