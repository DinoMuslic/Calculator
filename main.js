const buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
const clear = document.getElementById('clear');

let result = ``;
buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(!isNaN(button.innerHTML)) {
            display.value += `${button.innerHTML}`;
            result += button.innerHTML;
        }else {
            display.value = ``;
            if(button.innerHTML !== '=' && button.innerHTML !== 'C'){
                result += button.innerHTML;
            } else if(button.innerHTML === 'C'){
                result = ``;
            } else{
                display.value = eval(result);
                result = parseFloat(display.value);
            }
        }
        
        // console.log('result: ', result);
    })
});

clear.addEventListener('click', () => {
    display.value = ``;
    result = [];
});