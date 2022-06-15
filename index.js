// State 相当の値を準備 (今回の場合は配列)
// ----------------------------------------------------------------------------
var peaces = [
  6,  4,  3, 10,
  7,  1,  2,  5,
  9, 13, 12,  8,
 15, 14, 11, 16,
];


// Component 相当の関数を準備 (State => View にあたるもの)
// ----------------------------------------------------------------------------
function component() {
 for (let n = 0; n < 16; n = n + 1) {
   const piece = document.querySelector('.pos-' + (n + 1));
 
   piece.style.order = peaces[n];
 }
}


// 初期化処理 (WIP: 全てのピースをランダムに配置する)
// ----------------------------------------------------------------------------
component();


// ピースがクリックされたときに実行する処理 (関数)
// ----------------------------------------------------------------------------
function pieceClickHandler(event) {
 console.log('ピースがクリックされました');
 console.log(event.target);
}


// 1 ～ 15 番ピースのクリックを監視し、クリックされたら pieceClickHandler を呼ぶ
// ----------------------------------------------------------------------------
for (let n = 1; n <= 15; n = n + 1) {
 const piece = document.querySelector('.pos-' + n);

 piece.addEventListener('click', pieceClickHandler);
}


//イメージとしては'pos-'+n

/*const piece01 = document.querySelector('.pos-1');

piece01.style.order = parseInt(Math.random() * 16) + 1;

const piece02 = document.querySelector('.pos-2');

piece02.style.order = parseInt(Math.random() * 16) + 1;

const piece03 = document.querySelector('.pos-3');

piece03.style.order = parseInt(Math.random() * 16) + 1;

const piece04 = document.querySelector('.pos-4');

piece04.style.order = parseInt(Math.random() * 16) + 1;

const piece05 = document.querySelector('.pos-5');

piece05.style.order = parseInt(Math.random() * 16) + 1;

const piece06 = document.querySelector('.pos-6');

piece06.style.order = parseInt(Math.random() * 16) + 1;

const piece07 = document.querySelector('.pos-7');

piece07.style.order = parseInt(Math.random() * 16) + 1;

const piece08 = document.querySelector('.pos-8');

piece08.style.order = parseInt(Math.random() * 16) + 1;

const piece09 = document.querySelector('.pos-9');

piece09.style.order = parseInt(Math.random() * 16) + 1;

const piece10 = document.querySelector('.pos-10');

piece10.style.order = parseInt(Math.random() * 16) + 1;

const piece11 = document.querySelector('.pos-11');

piece11.style.order = parseInt(Math.random() * 16) + 1;

const piece12 = document.querySelector('.pos-12');

piece12.style.order = parseInt(Math.random() * 16) + 1;

const piece13 = document.querySelector('.pos-13');

piece13.style.order = parseInt(Math.random() * 16) + 1;

const piece14 = document.querySelector('.pos-14');

piece14.style.order = parseInt(Math.random() * 16) + 1;

const piece15 = document.querySelector('.pos-15');

piece15.style.order = parseInt(Math.random() * 16) + 1;

const piece16 = document.querySelector('.pos-□');

piece16.style.order = parseInt(Math.random() * 16) + 1;
*/
