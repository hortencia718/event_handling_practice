
console.log("basic javascript");


// // find the appropriate element
// // attach an event listener on that element
// // tell the element/ code what to do once that event occurs

// // let tacoButton = document.querySelector("#taco")

// const linkName = document.querySelector(".link-name");
// const nameInput = document.querySelector(".name-input");


// function setName(name){
//     linkName.innerText= "Welcome, ";
//     let nameInner =document.createElement("span");
//     nameInner.innerText = name;
//     nameInner.setAttribute("class", "name");
//     linkName.appendChild(nameInner);
//     return nameInner;

// }

// nameInput.addEventListener("change" , () => {
//     setName(nameInput.value);
// })



const btn = document.querySelector(".btn");
const text = document.querySelector('.text');

let shown =true;

// to toggle btn
function toggleText(){
    if(shown){
        btn.innerText ="show text 👀";
        text.getElementsByClassName.opacity =0;

    }
    else {
        btn.innerText = "hide text 🙈";
        text.getElementsByClassName.opacity = 1;
    }
}