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
