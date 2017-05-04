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

  if (projectHorizontal) {
    var img = document.querySelectorAll('img');
    var imgWidth = img[0].getBoundingClientRect().width;
    projectHorizontal.style.width = imgWidth * ( img.lenght() + 1 );
  }
});
