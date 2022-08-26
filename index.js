//Detecting click on the buttons with the images

//Without using jQuery
/*
document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function(){
        var key = element.classList[0];
        playSound(key);
        animateButton(key);
    });
});
*/

//Using jQuery
$("button.drum").each(function( index ) {
    //Getting the value in the class attribute and turning it into a list by splitting the text (in this case '(key) drum')
    var classList = $(this).attr("class").split(/\s+/);
    $( this ).on("click", function(){
        var key = classList[0];
        playSound(key);
        animateButton(key);
    });
  });


//Detecting the drummer keys being pressed

//Without using jQuery
/*
document.addEventListener('keydown', function (e) {
    playSound(e.key);
});
*/

//Using jQuery
$(document).on("keydown", function (e) {
    playSound(e.key);
}); 

//Playing the sound based on the key indicated on the button pressed or pressed on the keyboard
function playSound(key){
    switch(key)
    {
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
        new Audio("sounds/snare.mp3").play();
        break;
        case "k": 
        new Audio("sounds/kick-bass.mp3").play();
        break;
        case "l": 
        new Audio("sounds/crash.mp3").play();
        break;
        default: 
        break;
    }
}

//Without using jQuery
/*
function animateButton(key){
    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
*/

//Using jQuery
function animateButton(key){
    var button = $("button.drum."+key);
    button.addClass("pressed");

    setTimeout(function(){
        button.removeClass("pressed");
    },100);
}