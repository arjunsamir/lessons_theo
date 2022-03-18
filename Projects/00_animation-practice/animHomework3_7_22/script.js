const itemOne = document.querySelector(".img-1");
const itemTwo = document.querySelector(".img-2");
const itemThree = document.querySelector(".img-3");
const itemFour = document.querySelector(".img-4");
const mainItem = document.querySelector(".img-main");
const mainItemBox = document.querySelector(".main-item");



const mainContainer = document.querySelector(".main-container");

let allImgs = [itemOne , itemTwo , itemThree , itemFour]

let isHentaiTime = true; // this starts as true since the first click will make it hentai time

//Yeah I know this code is mega ugly but I did this while being one 1h of sleep and with no actual game plan
//I just sort of coded and yeah


mainContainer.addEventListener("click", (e)=>{

   

    if(!isHentaiTime){ //if its not hentai time reset to the original image
        allImgs.forEach((img) => {
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2XOnkDh9JNTMoH-ENta4LJeUpdFRWUJqbQ&usqp=CAU"
        })
        mainItem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrvmQaCYVdVNiHGQboaef6EFJBeRyNStzmA&usqp=CAU"

        mainItemBox.style.animation = "swayMain 1s linear infinite"
    }

    else{
        allImgs.forEach((img) => {
            img.src="https://i.kym-cdn.com/entries/icons/mobile/000/033/758/Screen_Shot_2020-04-28_at_12.21.48_PM.jpg"
        })

        mainItem.src = "https://i.ytimg.com/vi/GG0Js9Suf4w/maxresdefault.jpg"

        mainItemBox.style.animation = "pop 4s linear infinite"
        mainItemBox.style.animationIterationCount = "1"
        
    }

    isHentaiTime = !isHentaiTime; //switch the bool


    

})


