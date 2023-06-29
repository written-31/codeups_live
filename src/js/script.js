
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ハンバーガーメニュー
    $(".js-hamburger").on("click", function () {
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
        $(".js-sp-nav").fadeIn();
      } else {
        $(".js-sp-nav").fadeOut();
      }
    });

});
