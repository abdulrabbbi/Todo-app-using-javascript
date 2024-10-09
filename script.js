let btn = document.querySelector("#btn");
let inputText = document.querySelector("#inputText");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let newli = document.createElement("li");
  newli.innerText = inputText.value;

  let delbtn = document.createElement("button");
  delbtn.id = "btn";
  delbtn.className = "Delete";
  delbtn.innerText = "Delete";
  newli.appendChild(delbtn);
  ul.appendChild(newli);
  console.dir(ul);
  inputText.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
        let deleli = event.target.parentElement;
        deleli.remove();
        
  }
});

// let delbtns = document.querySelectorAll(".Delete");
// for (let delbtn of delbtns) {
//   delbtn.addEventListener("click", function (event) {
//     console.log("btn is clicked");
//   });
// }
