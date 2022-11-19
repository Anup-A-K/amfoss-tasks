document.addEventListener("keypress", (event) =>{
    var code = event.code;
    switch(code)
    {
        case "KeyW":
            {one();break;}
        case "KeyA":
            {two();break;}
        case "KeyS":
            {three();break;}
        case "KeyD":
            {four();break;}
        case "KeyJ":
            {five();break;}
        case "KeyK":
            {six();break;}
        case "KeyL":
            {seven();break;}
    }
})
function one()
{
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
}
function two()
{
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
}
function three()
{
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
}function four()
{
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}function five()
{
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
}function six()
{
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
}
function seven()
{
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
}