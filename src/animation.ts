var slider = document.getElementById("slider") as HTMLInputElement;
var sliderLabel = document.getElementsByTagName("label")[0] as HTMLLabelElement;

window.addEventListener("load", ()=> {
    console.log("animation::load")

    setSpeed(Number(slider.value));

    slider.oninput = function()
    {
        setSpeed(Number(slider.value));
    }
});



function setSpeed(speed: number){
    sliderLabel.textContent = "Animation speed: " + speed;
    document.documentElement.style.setProperty("--spin-duration", speed.toString() + "s");
}
