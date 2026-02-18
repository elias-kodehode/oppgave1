"use strict";
var slider = document.getElementById("slider");
var sliderLabel = document.getElementsByTagName("label")[0];
window.addEventListener("load", function () {
    console.log("animation::load");
    setSpeed(Number(slider.value));
    slider.oninput = function () {
        setSpeed(Number(slider.value));
    };
});
function setSpeed(speed) {
    sliderLabel.textContent = "Animation speed: " + speed;
    document.documentElement.style.setProperty("--spin-duration", speed.toString() + "s");
}
