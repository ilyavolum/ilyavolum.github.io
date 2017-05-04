document.addEventListener("DOMContentLoaded", function() {
  var homepage = document.getElementById("homepage");
  var imagesHomepage = ['1.2.jpg', '2.jpg', '3.jpg'];

  if (homepage) {
    var img = document.createElement('img');
    var i = Math.floor(Math.random() * 3);
    console.log(imagesHomepage[i]);
    img.setAttribute("src",imagesHomepage[i]);
    homepage.appendChild(img);
  }
});
