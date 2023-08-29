// selection html element and transform it with js

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

// add event listener

keys.addeventlistener('click' , e => {
    if(e.target.matches("button")) {
    //    do something
    }
}
 ) 
 
  //  determine le type de clé
 
  //  const key = e.target
  //  const action = key.dataset.action

  //  Si la clé n'a pas d' data-actionattribut, il doit s'agir d'une clé numérique.
   if(!action)(
    console.log('number key')
   )

  //  Si la clé a un data-action, add, subtractou multiply, dividenous savons que la clé est un opérateur.


  if (
    action ==='add' ||
    action === 'substract' ||
    action === 'multily'||
    action === 'divide'
  ){
    console.log('operator key!')
  }

  // Si la clé data-action est decimal, nous savons que l'utilisateur a cliqué sur la clé décimale.

  if(actin === 'decimal') {
    console.log('decimal key')
  }
  
  if(action === 'clear'){
    console.log('clear key!')
  }

  if(action === 'calculate') {
    console.log('equal key!')
  }

  //  construire le chemein heureux qui det l'action d'un utilisateur au hasard
  //  det le numeros de la clé sur laquelle on a cliqué et le numeros actuellement afficher(textcontent propriete)
  const display = document.querySelector('.calculator__display')

  keys.addEventListener('click' , e => {
    if (e.target.matches('button')){
      const key = e.target
      const action = key.dataset.action 
      const keyContent = key.textContent
      const displayedNum = display.textContent
    }
  })

  // Si la calculatrice affiche 0, nous souhaitons remplacer l'affichage de la calculatrice par la touche cliquée. Nous pouvons le faire en remplaçant la propriété textContent de l'affichage.

  if(!action) {
    if(displayedNum === '0') {
      display.textContent = keyContent
    }
  }

  // Si la calculatrice affiche un nombre différent de zéro, nous souhaitons ajouter la touche cliquée au nombre affiché. Pour ajouter un nombre, nous concaténons une chaîne.

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else{
      display.textContent = displayedNum + keyContent
    }
  }

  // Lorsque Mary appuie sur la touche décimale, une décimale devrait apparaître à l'écran. Si Mary frappe un nombre après avoir appuyé sur une touche décimale, le nombre doit également être ajouté à l'écran.

  //  Pour créer cet effet, nous pouvons concaténer .le nombre affiché.

  if(action === 'decimal') {
    display.textContent = displayedNum + '.'
  }
  
  // Si Mary appuie sur une touche d'opérateur, l'opérateur doit être mis en surbrillance afin que Mary sache qu'il est actif.
  //  nous allons ajouter la is-depressedclasse à la clé de l'opérateur.

    if(
      action === 'add' ||
      action === 'substract' || 
      action === 'divide' 
    ) {
      key.classList.add('is-depressed')
    }


//  Lorsque Mary appuie à nouveau sur une touche numérique, l'affichage précédent doit être remplacé par le nouveau numéro. La touche opérateur doit également quitter son état enfoncé.
// Pour libérer l'état enfoncé, nous supprimons la is-depressedclasse de toutes les touches via une forEachboucle

keys.addEventListener('click', e => {
  if(e.target.matches('button')) {
    const key = e.target
    //  remove is-depressed class from all keys
    Array.from(key.parentNode.children)
    foreach(k => k.classList.remove('is-depressed'))
  }
}
) 

// Ensuite, nous souhaitons mettre à jour l'affichage avec la touche cliquée. Avant de faire cela, nous avons besoin d’un moyen de savoir si la clé précédente est une clé d’opérateur.

// Une façon de procéder consiste à utiliser un attribut personnalisé. Appelons cet attribut personnalisé data-previous-key-type.

// const calculator = document.querySelector('.calculator')

keys.addEventListener('click' , e => {
  if (e.target.matches('button')) {
    if(
      action === 'add' || 
      action === 'subtract' || 
      action === '' || 
      action === 'divide' 
    ) {
      key.classList.add('is-depressed')
      // add custom attribute
      calculator.dataset.previouskey = 'operator'
    }
  }
}
)

// Si le previousKeyType est un opérateur, nous souhaitons remplacer le numéro affiché par le numéro cliqué.

const previousKeysType = calculator.dataset.previousKeysType
if(!displayedNum === '0' || previousKeyType === 'operator') {
  display.textContent = keyContent
} else {
display.textcontent = displayedNum + keyContent
}

//  Action lorsqu'on appuie sur la touche egale.

//  nous ne connaissons que la seconde valeur pour effectuer le calcule

// if (action === 'calculate') {
//   const secondValue = displayedNum
// }

//  obtention du premier nombre 

if(
  action ==='add'||
  action ==='add'||
  action ==='add'||
  action ==='add'
) {
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
  
// 
if (action === 'calculate') {
  const firstvalue = calculator.dataset.firstValue
  const operator = calculator.dataset.firstValue.operator
  const secondValue =  displayedNum


  display.textContent = calculate(firstvalue, operator, secondValue)
}

//  réalisons le calcule avec la fonction calculate.


const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if ( operator === 'divide') {
    result =parseFloat(n1) / parseFloat(n2)
  }

  return result 
}
   

// Fin du chemin heureux
