// document.querySelectorAll("button")[0].addEventListener("click", () => handleClick("crash"));

// document.querySelectorAll("button")[1].addEventListener("click", () => handleClick("kick-bass"));

// document.querySelectorAll("button")[2].addEventListener("click", () => handleClick("snare"));

// document.querySelectorAll("button")[3].addEventListener("click", () => handleClick("tom-1"));

// document.querySelectorAll("button")[4].addEventListener("click", () => handleClick("tom-2"));

// document.querySelectorAll("button")[5].addEventListener("click", () => handleClick("tom-3"));

// document.querySelectorAll("button")[6].addEventListener("click", () => handleClick("tom-4"));

// var audioSound = document.createElement("audio");



// function handleClick(sound) {
//     audioSound.src=`sounds/${sound}.mp3`;   
//     audioSound.play();
// }

function makeSound (key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation (key) {
    document.querySelector(`.${key}`).classList.add("pressed");

    setTimeout(() => {
        document.querySelector(`.${key}`).classList.toggle("pressed");
    }, 100);
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}


document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})

// document.addEventListener("keydown", fusdnction (event) {console.log(event)});
