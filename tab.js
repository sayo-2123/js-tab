(() =>{
  // ここに命令を書く
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');

  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    console.log('targetVal', targetVal);

  //   // 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
  };
  

  // 全nav要素に対して関数を適用・発火
  let index = 0;
  while(index < $nav.length){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }
})();