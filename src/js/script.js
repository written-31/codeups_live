jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ハンバーガーメニュー
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".js-sp-nav").fadeIn();
    } else {
      $(".js-sp-nav").fadeOut();
    }
  });

  // 呼び出しの基本：
  const swiper = new Swiper("#js-works-swiper", {
    // ここにオプション設定が入ります
    loop: true, // 無限ループ
    pagination: {
      el: '.swiper-pagination',
    },
    
  });
});
