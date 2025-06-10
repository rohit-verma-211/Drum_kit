// Select all drum buttons
var drumButtons = document.querySelectorAll(".drum");

// Add click listeners
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
}

// Add keyboard listener
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    addAnimation(event.key);
});

// Function to play sound based on key
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("sounds/snare.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play(); // corrected file name
            break;
        default:
            console.log("Key not mapped: " + key);
    }
}

// Function to animate pressed button
function addAnimation(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
