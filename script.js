$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});

alert("deeee");

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");
var display = document.getElementById("display");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const titleText = document.getElementById("modal-title");

img.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display.src;
  captionText.innerHTML = display.alt;
  titleText.innerHTML = display.title;
};

img2.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display2.src;
  captionText.innerHTML = display2.alt;
  titleText.innerHTML = display2.title;
};
img3.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display3.src;
  captionText.innerHTML = display3.alt;
  titleText.innerHTML = display3.title;
};
img4.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display4.src;
  captionText.innerHTML = display4.alt;
};
img5.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display5.src;
  captionText.innerHTML = display5.alt;
};
img6.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display6.src;
  captionText.innerHTML = display6.alt;
};
img7.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display7.src;
  captionText.innerHTML = display7.alt;
};
img8.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display8.src;
  captionText.innerHTML = display8.alt;
};
img9.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display9.src;
  captionText.innerHTML = display9.alt;
};
img10.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display10.src;
  captionText.innerHTML = display10.alt;
};
img11.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display11.src;
  captionText.innerHTML = display11.alt;
};
img12.ondblclick = function () {
  modal.style.display = "block";
  modalImg.src = display12.src;
  captionText.innerHTML = display12.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
