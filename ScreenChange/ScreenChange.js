const rightButton = document.querySelector("#right-button");
const leftButton = document.querySelector("#left-button");
const insertImage = document.querySelector("#insert-image");
const radioButtonContainer = document.querySelector(".radio-button-container");
const radioButton = document.querySelectorAll(".radio-button");
const images = ["image/image0.jpeg", "image/image1.jpeg", "image/image2.jpeg", "image/image3.jpeg", "image/image4.jpeg"]

let i = 1;
rightButton.addEventListener("click", function () {
  if ( i <= images.length) {
    insertImage.src = images[i];
    radioButton[i].checked = true;
     i++;
  } else {
    insertImage.src = images[0];
    radioButton[0].checked = true;
    i = 1;
  }
});

let j = images.length - 1;
leftButton.addEventListener("click", function () {
  if ( i >= 0 ) {
    insertImage.src = images[i];
    radioButton[i].checked = true;
     i--;
  } else {
    insertImage.src = images[j];
    radioButton[j].checked = true;
    i = j;
  }
});

for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener("click", function () {
    insertImage.src = images[i];
  })
};
