var animation = document.getElementById("animation");
var animationLoop;
var audioPlayed = false;

function doAnimation() {

    clearInterval(animationLoop);

    var frame = 0;
    var frames = [1,2,3,2];

    animationLoop = setInterval(function () {
        frame = (frame == frames.length - 1) ? frame = 0 : frame + 1;
        animation.setAttribute('src', 'img/marty-frame' + frames[frame] + '.png?cb=4');
    }, 500);
}


function jump() {

    clearInterval(animationLoop);

    if(!audioPlayed) {
        document.querySelector("audio").play();
        audioPlayed = true;
    }

    var frame = 0;
    var frames = [4,5,6,7,8,9];

    animationLoop = setInterval(function () {
        frame = (frame == frames.length - 1) ? frame = 0 : frame + 1;
        animation.setAttribute('src', 'img/marty-frame' + frames[frame] + '.png?cb=4');

        if(frames[frame]==9){
            clearInterval(animationLoop);
            animation.setAttribute('src', 'img/marty-frame1.png?cb=4');
            doAnimation();

        }

    }, 100);
}

AFRAME.registerComponent('selectable', {

    init: function () {
        var el = this.el;

        this.el.addEventListener('mouseenter', function (evt) {
        });
        this.el.addEventListener('mouseleave', function (evt) {
        });
        this.el.addEventListener('click', function (evt) {
            jump()
        });
    }
});

window.onload = function() {


    if (DetectRTC.isWebRTCSupported === false ) {

        template = '<h1>There seems to be a problem</h1> \
                    <p>Unfortunately it looks like your smart phone does not have something called WebRTC enabled</p> \
                    <p>WebRTC is a new exciting technology that brings AR to your web browser so you don\'t need an app</p>';
        document.querySelector("#about .inner").innerHTML = template;
        document.getElementById("about").style.display = "table";
        document.getElementById("infoLink").style.display = "none";
    }


    doAnimation();
};


document.getElementById("infoLink").addEventListener("click", function(){
    document.getElementById("about").style.display = "table";
});
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("about").style.display = "none";
});

