document.addEventListener("DOMContentLoaded", function() {
  var homepage = document.getElementById("homepage");
  var projectHorizontal = document.getElementById("project-horizontal");
  var imagesHomepage = ['1.2.jpg', '2.jpg', '3.jpg'];
  var wWidth = window.innerWidth;

  if (homepage) {
    var img = document.createElement('img');
    var i = Math.floor(Math.random() * 3);
    img.setAttribute("src",imagesHomepage[i]);
    homepage.appendChild(img);
  }

  if (projectHorizontal) {
    var img = document.querySelectorAll('img');
    if (wWidth > 1100) {
      var imgWidth = 800;
    } else if (wWidth > 900) {
      var imgWidth = 700;
    } else if (wWidth > 600) {
      var imgWidth = 400;
    } else {
      return;
    }

    for (var i = img.length - 1; i >= 0; i--) {
      img[i].style.width = imgWidth + 'px';
    }
    projectHorizontal.style.width = imgWidth * ( img.length + 1 ) - 100 + 'px';
  }
});
