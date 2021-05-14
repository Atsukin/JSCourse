'use strict';

// const target1 = document.getElementById('target1');
// const target2 = document.getElementById('target2');
// const target3 = document.getElementById('target3');

// // allow関数の書き方
// target1.addEventListener('click', () => {
//     target1.classList.toggle('circle');
//     console.log('success');
// });
// target2.addEventListener('click', () => {
//     target2.classList.toggle('circle');
//     console.log('success');
// });
// target3.addEventListener('click', () => {
//     target3.classList.toggle('circle');
//     console.log('success');
// });

const row = document.getElementById('row')

const num = 5;
const winner = Math.floor(Math.random() * num);

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('box');

    div.addEventListener('click', () => {
        if (i === winner) {
            div.textContent = 'Win!';
            div.classList.add('win');
        } else {
            div.textContent = 'Lose!';
            div.classList.add('lose');
        }
    });

    document.body.appendChild(div);
}
