//Блокируем скролл при открытии меню
let menuToggle = $("#menu__toggle");
menuToggle.change((e) => {
  if (menuToggle[0].checked) {
    $("body").addClass("noscrloll");
  } else {
    $("body").removeClass("noscrloll");
  }
});

//Закрытие меню при нажатии
let menuBox = $('#menu__box');
menuBox.click(()=>{
  menuToggle[0].checked = false;
});

$(window).on("load", setSize);
$(window).on("resize", setSize);

function setSize() {
  let ibg = $(".ibg");
  let body = $("body");
  if (body.width() > 576) {
    var $object = $("#bg__coord"); // выбираем объект
    var offset = $object.offset(); // получаем координаты верхнего левого угла объекта
    var width = $object.width(); // получаем ширину объекта
    var height = $object.height(); // получаем высоту объекта
    var bottomRight = {
      x: offset.left + width, // координата X нижней правой точки
      y: offset.top + height, // координата Y нижней правой точки
    };
    console.log(bottomRight); // выводим результат в консоль
    ibg.css("width", body.css("width"));
    ibg.css("height", bottomRight.y + "px");
  }
  else{
    ibg.css("height", '415px');
    ibg.css("width", '100%');
  }
}
