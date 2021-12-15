// set initial count
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll(".btn");


buttons.forEach((button) => {
    button.addEventListener('click', (button) => {
        const styles = button.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
    });
});
