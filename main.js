const n = document.querySelector('#n');
const k = document.querySelector('#k');


function silnia(n) {
    if (n > 1)
        return n * silnia(n - 1);
    else
        return 1;
}

function newton(n, k) {
    return silnia(n) / (silnia(k) * silnia(n - k));
}



function showResult() {
    const scoreContainer = document.querySelector('.score');
    scoreContainer.classList.remove('hidden');
    const result = document.querySelector('#score');
    result.innerHTML = newton(n.value, k.value);
}
const checkIfInputsAreNumber = () => {

}
const checkIfInputsAreFull = () => {
    const errortext = document.querySelector('.error_text');
    const errorsBox = document.querySelector('.errors');
    if (isNaN(n.value) || isNaN(k.value)) {
        errortext.innerHTML = "n i k muszą być liczbami";
        errorsBox.classList.remove('hidden');
        setTimeout(function () {
            errorsBox.classList.add('hidden');
        }, 2000);
        return;
    }
    else {
        if (n.value && k.value) {
            if (n.value < k.value) {
                errortext.innerHTML = "n musi być większe od k";
                errorsBox.classList.remove('hidden');
                setTimeout(function () {
                    errorsBox.classList.add('hidden');
                }, 2000);
                return;            }
            showResult();
        }
        else{
            const scoreContainer = document.querySelector('.score');
            scoreContainer.classList.add('hidden');
        }
    }

}

n.addEventListener('input', checkIfInputsAreFull);
k.addEventListener('input', checkIfInputsAreFull);
