// Récupération des éléments du DOM
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultsTable = document.getElementById('results-table');
const moreResultsButton = document.getElementById('more-results-button');
const noResultsMessage = document.getElementById('no-results-message');

// Déclaration des variables
let results = [];
let displayedResults = 0;

// Fonction qui effectue la recherche et remplit le tableau avec les résultats
function performSearch() {
  // Reset des résultats précédents
  results = [];
  displayedResults = 0;

  // TODO : effectuer la recherche et remplir le tableau "results" avec les résultats

  // Affichage des résultats
  if (results.length > 0) {
    noResultsMessage.style.display = 'none';
    resultsTable.style.display = 'table';
    moreResultsButton.style.display = 'inline-block';

    // Affichage des 10 premiers résultats
    for (let i = 0; i < 10; i++) {
      if (results[i]) {
        const row = resultsTable.insertRow();
        const nameCell = row.insertCell();
        const colorCell = row.insertCell();
        const rarityCell = row.insertCell();
        const typeCell = row.insertCell();
        const editionCell = row.insertCell();
        const qualityCell = row.insertCell();
        const priceCell = row.insertCell();
        nameCell.innerText = results[i].name;
        colorCell.innerText = results[i].color;
        rarityCell.innerText = results[i].rarity;
        typeCell.innerText = results[i].type;
        editionCell.innerText = results[i].edition;
        qualityCell.innerText = results[i].quality;
        priceCell.innerText = results[i].price;
      }
    }
    displayedResults += 10;
  } else {
    noResultsMessage.style.display = 'block';
    resultsTable.style.display = 'none';
    moreResultsButton.style.display = 'none';
  }
}

// Fonction qui affiche 20 résultats supplémentaires dans le tableau
function showMoreResults() {
  for (let i = displayedResults; i < displayedResults + 20; i++) {
    if (results[i]) {
      const row = resultsTable.insertRow();
      const nameCell = row.insertCell();
      const colorCell = row.insertCell();
      const rarityCell = row.insertCell();
      const typeCell = row.insertCell();
      const editionCell = row.insertCell();
      const qualityCell = row.insertCell();
      const priceCell = row.insertCell();
      nameCell.innerText = results[i].name;
      colorCell.innerText = results[i].color;
      rarityCell.innerText = results[i].rarity;
      typeCell.innerText = results[i].type;
      editionCell.innerText = results[i].edition;
      qualityCell.innerText = results[i].quality;
      priceCell.innerText = results[i].price;
    }
  }
  displayedResults += 20;
}

// Événement click sur le bouton "Rechercher"
searchButton.addEventListener('click', performSearch);

// Événement appui sur la touche Entrée dans la barre de recherche
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

// Événement click sur le bouton "Afficher plus de résultats"
moreResultsButton.addEventListener('click', showMoreResults);