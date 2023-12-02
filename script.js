const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVEEE YOUU TOO!, send a message "buttercup" in whatsapp to tell alil";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";


  btnGroup.style.display = "none";

  gif.style.display = "block";
  gif.style.margin = "0 auto";
  gif.style.position = "relative";
  gif.style.top = "-50px"; 
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
