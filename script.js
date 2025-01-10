const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1=document.querySelector('h1');
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e.target.id);
 
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML=e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML=e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML=e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML=e.target.id;
    }
  });
});
