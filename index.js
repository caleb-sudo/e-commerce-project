//inlarges the pictures

const images = document.querySelectorAll(".pic img");
let imgIndex
let imgSrc;
images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
        imgIndex = i;
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
        modal.remove();
    };
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
  nextBtn.onclick = () => {
      newImage.setAttribute("src", nextImg())
  };
  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
  prevBtn.onclick = () => {
      newImage.setAttribute("src", prevImg())
  }
  modal.append(newImage, closeBtn, nextBtn, prevBtn)
};
let nextImg = () => {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    return images[imgIndex].src;
};
let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    return images[imgIndex].src;
}