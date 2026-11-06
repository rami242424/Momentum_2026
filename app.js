const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);
