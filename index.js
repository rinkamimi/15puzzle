// 初期化処理 (全てのピースをランダムに配置する)
for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);
  
    // MEMO: 1 ～ 16 でランダムに数値を決めると、番号が被る場合がある
    piece.style.order = parseInt(Math.random() * 16) + 1;
  }
  
  // ピースがクリックしたときに実行する処理 (関数)
  function pieceClickHandler() {
    console.log('ピースがクリックされました');
  }
  
for (let i = 1; i <= 15; i = i + 1) {

  const piece = document.querySelector('.pos-'+i);
  
  piece01.addEventListener('click',[i], pieceClickHandler);
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
