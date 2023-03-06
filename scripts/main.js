//Скрытие панели навигации при прокрутке вниз
// let lastScrollTop = 0;
// $(window).scroll(function(event) {
//   let st = $(this).scrollTop();
//   if (st > lastScrollTop) {
//     // scroll down
//     $('.fixed-top').addClass('navbar-hidden');
//     $('.fixed-top').removeClass('navbar-visible');
//   } else {
//     // scroll up
//     $('.fixed-top').addClass('navbar-visible');
//     $('.fixed-top').removeClass('navbar-hidden');
//   }
//   lastScrollTop = st;
// });
let menuToggle = $("#menu__toggle");
menuToggle.change((e) => {
  if (menuToggle[0].checked) {
    $("body").addClass("noscrloll");
  } else {
    $("body").removeClass("noscrloll");
  }
});
