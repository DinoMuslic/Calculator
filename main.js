let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
const clear = document.getElementById('clear');

let equation = ``;
buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(!isNaN(button.innerHTML)){
            display.value += `${button.innerHTML}`;
            equation += button.innerHTML;
        }else{
            display.value = ``;
            if(button.innerHTML !== '=' && button.innerHTML !== 'C'){
                equation += button.innerHTML;
            }else if(button.innerHTML === 'C'){
                equation = ``;
            }else{
                display.value = eval(equation);
                equation = parseFloat(display.value);
            }
        }
    })
});

clear.addEventListener('click', () => {
    display.value = ``;
    equation = [];
})