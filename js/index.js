document.addEventListener("DOMContentLoaded", function() {
  var homepage = document.getElementById("homepage");
  var projectHorizontal = document.getElementById("project-horizontal");
  var imagesHomepage = ['1.2.jpg', '2.jpg', '3.jpg'];

  if (homepage) {
    var img = document.createElement('img');
    var i = Math.floor(Math.random() * 3);
    img.setAttribute("src",imagesHomepage[i]);
    homepage.appendChild(img);
  }

  window.addEventListener("resize", handleResize);

  var img = document.querySelectorAll('img');
  var int = setInterval(function() {
    if (img[img.length - 1].getBoundingClientRect().width) {
      clearInterval(int);
      handleResize();
    }
  }, 100);

  function handleResize() {
    var wWidth = window.innerWidth;
    if (projectHorizontal && wWidth > 600) {
      var img = document.querySelectorAll('img');
      var sliderWidth = 0;

      var int = setInterval(function() {
        if (img[img.length - 1].getBoundingClientRect().width) {
          clearInterval(int);

          for (var i = img.length - 1; i >= 0; i--) {
            var imgWidth = img[i].getBoundingClientRect().width;
            sliderWidth = sliderWidth + imgWidth + 60;
          }
          projectHorizontal.style.width = sliderWidth + 'px';
        }
      }, 100);
    } else {
      projectHorizontal.style.width = 'auto';
    }
  }
});
