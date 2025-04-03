
let btn_1 = document.getElementById('btn_1');
let btn_2 = document.getElementById('btn_2');
let btn_3 = document.getElementById('btn_3');
let btn_4 = document.getElementById('btn_4');
let btn_5 = document.getElementById('btn_5');
let btn_6 = document.getElementById('btn_6');
let btn_7 = document.getElementById('btn_7');
let btn_8 = document.getElementById('btn_8');
let btn_9 = document.getElementById('btn_9');

let chance = 'X';

function changeChance() {
    chance = chance === 'X' ? 'O' : 'X';
}

function checkWin() {
    if ((btn_1.innerText && btn_1.innerText === btn_2.innerText && btn_1.innerText === btn_3.innerText) ||
        (btn_4.innerText && btn_4.innerText === btn_5.innerText && btn_4.innerText === btn_6.innerText) ||
        (btn_7.innerText && btn_7.innerText === btn_8.innerText && btn_7.innerText === btn_9.innerText) ||
        (btn_1.innerText && btn_1.innerText === btn_4.innerText && btn_1.innerText === btn_7.innerText) ||
        (btn_2.innerText && btn_2.innerText === btn_5.innerText && btn_2.innerText === btn_8.innerText) ||
        (btn_3.innerText && btn_3.innerText === btn_6.innerText && btn_3.innerText === btn_9.innerText) ||
        (btn_1.innerText && btn_1.innerText === btn_5.innerText && btn_1.innerText === btn_9.innerText) ||
        (btn_3.innerText && btn_3.innerText === btn_5.innerText && btn_3.innerText === btn_7.innerText)) {
        return true; 
    }

    if ([btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9].every(button => button.innerText !== '')) {
        alert("Game Draw! No one wins.");
        resetGame();
        return false;
    }

    return false;
}


function resetGame() {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.innerText = '';
        button.classList.remove('x', 'o');
    });
    chance = 'X';
}


function handleClick(button) {
    if (!button.innerText) {
        button.innerText = chance;
        button.classList.add(chance.toLowerCase());
        if (checkWin()) {
            setTimeout(() => {
                alert(chance + ' Wins!');
                resetGame();
            }, 100);
            return;
        }
        changeChance();
    }

}


btn_1.onclick = function () { handleClick(btn_1); };
btn_2.onclick = function () { handleClick(btn_2); };
btn_3.onclick = function () { handleClick(btn_3); };
btn_4.onclick = function () { handleClick(btn_4); };
btn_5.onclick = function () { handleClick(btn_5); };
btn_6.onclick = function () { handleClick(btn_6); };
btn_7.onclick = function () { handleClick(btn_7); };
btn_8.onclick = function () { handleClick(btn_8); };
btn_9.onclick = function () { handleClick(btn_9); };