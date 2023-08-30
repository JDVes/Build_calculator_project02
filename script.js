document.addEventListener('DOMContentLoaded', function () {
  // Sélection de l'affichage et des boutons de la calculatrice
  const display = document.querySelector('.calculator__display');
  const keys = document.querySelector('.calculator__keys');

  // Variables pour le suivi de l'état de la calculatrice
  let firstValue = 0;
  let operator = '';
  let awaitingNextValue = false;

  // Écouteur d'événements pour les boutons de la calculatrice
  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;

      // Gestion des touches numériques
      if (!action) {
        if (awaitingNextValue) {
          display.textContent = keyContent;
          awaitingNextValue = false;
        } else {
          display.textContent =
            displayedNum === '0' ? keyContent : displayedNum + keyContent;
        }
      }

      // Gestion de la touche décimale
      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.';
        }
      }

      // Gestion des opérations (add, subtract, multiply, divide)
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        if (!operator) {
          firstValue = parseFloat(displayedNum);
          operator = action;
          awaitingNextValue = true;
        }
      }

      // Gestion de la touche de réinitialisation (clear)
      if (action === 'clear') {
        display.textContent = '0';
        firstValue = 0;
        operator = '';
        awaitingNextValue = false;
      }

      // Gestion du calcul
      if (action === 'calculate') {
        if (operator && !awaitingNextValue) {
          const secondValue = parseFloat(displayedNum);
          let result = 0;

          switch (operator) {
            case 'add':
              result = firstValue + secondValue;
              break;
            case 'subtract':
              result = firstValue - secondValue;
              break;
            case 'multiply':
              result = firstValue * secondValue;
              break;
            case 'divide':
              result = firstValue / secondValue;
              break;
            default:
              break;
          }

          display.textContent = result;
          awaitingNextValue = true;
          firstValue = result;
          operator = '';
        }
      }
    }
  });
});
