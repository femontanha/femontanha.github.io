document.addEventListener("DOMContentLoaded", function() {
  var home_list = document.querySelectorAll('.home__name .js-hidden');
  var i = 0;

  while (i < home_list.length) {
    doSetTimeout(i);
  }

  function doSetTimeout(i) {
    setTimeout(function() {
      alert(i);
      var current = home_list[i];
      var next = home_list[i].nextElementSibling;

      if(i =3) {
        current.classList.add('js-hidden');
        current.classList.remove('js-visible');
      } else {
        current.classList.add('js-hidden');
        current.classList.remove('js-visible');
        next.classList.remove('js-hidden');
        next.classList.add('js-visible');
        i++;
      }

    }, i * 1000);
  }

});