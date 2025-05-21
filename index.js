var allButtons= document.querySelectorAll("button");// a vaariable is set to the function that gives a list of items(buttons) to iterate through. A variable is set to use in the for loop. 
for(var i= 0; i< allButtons.length; i++){ //for loop is used to iterate through the list of items from allButtons. 
allButtons[i].addEventListener ("click", handleClick ); //the list of buttons are captured again but in iteration with [i] and an event listener is added to them.
}
function handleClick() {
    var buttonInnerHtml = this.innerHTML; //store the button being clicked
    //each case in the switch statement takes the innerHTML letter and connects it to a sound. And when the button is clicked it stops at the break. Default statement is for when something goes wrong. 
    switch (buttonInnerHtml){
        case "w":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
            default: console.log(buttonInnerHtml);

    }
    

    //alert ("I've been clicked");
} //this function is called to give an alert every time a button is clicked. 