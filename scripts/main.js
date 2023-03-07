  let menuToggle = $("#menu__toggle");
  menuToggle.change((e) => {
    if (menuToggle[0].checked) {
      $("body").addClass("noscrloll");
    } else {
      $("body").removeClass("noscrloll");
    }
  });
