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
    result.innerHTML = newton(parseInt(n.value), parseInt(k.value)); // Konwersja na liczby
}

const checkIfInputsAreFull = () => {
    const errortext = document.querySelector('.error_text');
    const errorsBox = document.querySelector('.errors');

    if (isNaN(parseInt(n.value)) || isNaN(parseInt(k.value))) { // Konwersja na liczby
        errortext.innerHTML = "n i k muszą być liczbami";
        errorsBox.classList.remove('hidden');
        setTimeout(function () {
            errorsBox.classList.add('hidden');
        }, 1500);
        return;
    } else {
        if (n.value && k.value) {
            if (parseInt(n.value) < parseInt(k.value)) { // Konwersja na liczby
                errortext.innerHTML = "n musi być większe od k";
                errorsBox.classList.remove('hidden');
                setTimeout(function () {
                    errorsBox.classList.add('hidden');
                }, 1500);
                return;
            } else {
                showResult();
            }

        } else {
            const scoreContainer = document.querySelector('.score');
            scoreContainer.classList.add('hidden');
        }
    }
}

n.addEventListener('input', checkIfInputsAreFull);
k.addEventListener('input', checkIfInputsAreFull);
