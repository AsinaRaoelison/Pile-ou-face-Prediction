let previousChoice = null;
let wins = 0;
let totalGames = 0;

function submitChoice() {
  const userChoice = document.querySelector('input[name="userChoice"]:checked');
  if (userChoice) {
    const result = coinFlip();
    const outcome = userChoice.value === result ? 'gagné' : 'perdu';
    document.getElementById('result').innerHTML = `Vous avez ${outcome} !`;

    if (userChoice.value === result) {
      wins++;
    }
    totalGames++;

    updateStats();

    previousChoice = userChoice.value;
  }
}

function coinFlip() {
  return Math.random() < 0.5 ? 'pile' : 'face';
}

function togglePrediction() {
  const userChoice = document.querySelector('input[name="userChoice"]:checked');
  if (!userChoice) {
    alert('Veuillez choisir "pile" ou "face" avant de soumettre.');
    return;
  }

  const userChoiceValue = userChoice.value;

  // Ici, vous effectuez la requête AJAX à l'API pour obtenir la prédiction
  // Utilisez la méthode fetch ou une librairie AJAX comme Axios ou jQuery.ajax

  // Pour cet exemple, nous allons simplement simuler une prédiction aléatoire
  const prediction = Math.random() < 0.5 ? 'pile' : 'face';

  const predictionDiv = document.getElementById('prediction');
  predictionDiv.style.display = 'block';
  predictionDiv.innerHTML = `Le modèle prédit : ${prediction}`;
}

function updateStats() {
  const statsDiv = document.getElementById('stats');
  const winPercentage = (wins / totalGames) * 100 || 0;
  statsDiv.innerHTML = `Parties gagnées : ${wins}/${totalGames} (${winPercentage.toFixed(2)}% de réussite)`;
}
