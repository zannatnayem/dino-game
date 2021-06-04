// let cactusFromleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

let dino = document.querySelector(".dino")
let cactus = document.querySelector(".cactus")

function jump(){
   if(dino.classList != jump){ dino.classList.add("jump");
   setTimeout(function(){
       dino.classList.remove("jump")
   },500)
}
}

document.addEventListener("keydown",function(){
    jump()
})



let dinoIsAlive = setInterval(() => {

    let dinoFromTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusFromLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusFromLeft<64 && cactusFromLeft > 19 && dinoFromTop >140){
            const span = document.querySelector(".span");
                  const another = document.querySelector(".another");
                  another.classList.add("display","span");
                  const game = document.querySelector(".game");
                  game.classList.add("none");

    }
 
}, 9);