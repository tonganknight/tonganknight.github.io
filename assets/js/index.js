



/* Audio Control */


const ukediv = document.getElementById("playukulele");

const guitardiv = document.getElementById("playguitar");

const ukulelesong = document.getElementById("ukulelemp3");

const guitarsong = document.getElementById("guitarmp3");




ukediv.addEventListener("click", function(){

    function playUke() {
    guitarsong.pause()
    ukulelesong.play()
};

playUke()

});

guitardiv.addEventListener("click", function(){

    function playguitar() {
        ukulelesong.pause()
        guitarsong.play()
    };
    
    playguitar()
})


//Event listener for show hobbies button
document.getElementById("hobbiestoggle").addEventListener("click", function() {

 const turnon = document.getElementById("hobbielist").style.visibility = "visible"

document.getElementById("hobbiestoggle").style.visibility = "hidden"

const show = true;

});