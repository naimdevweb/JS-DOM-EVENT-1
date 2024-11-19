
const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  image.addEventListener("mouseover", handleMouseEnterOnImage);
});


let toggle = true;

function handleMouseEnterOnImage(event) {
  let imageName = event.target.id;

  if (toggle == true) {
    event.target.src = "./images/" + event.target.id + "_2.jpg";
  }
  if (toggle == false) {
    event.target.src = "./images/" + event.target.id + ".jpg";
  }

  toggle = !toggle
}