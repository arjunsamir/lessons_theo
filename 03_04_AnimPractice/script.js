const blueSquare = document.querySelector(".blue-box");
const belleDelphine = blueSquare.querySelector("img");
let state = false;


blueSquare.addEventListener("click" ,(e)=>{
    //blueSquare.classList.toggle("rotate");
    
    blueSquare.style.transform = `scale(${state ? 1.5 : 1})`
    


    belleDelphine.style.transform = `scale(${state ? 1.5 : 1})`

    state = !state;
    
})