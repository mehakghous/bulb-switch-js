var bulbImg = document.getElementById("bulb-img");
var bulbStatus = false; //false = bulb-off

function switchBulb() {
    if (!bulbStatus) {
        bulbImg.src = "./assets/bulb-on.jpg";
        bulbStatus = true;
    } else {
        bulbImg.src = "./assets/bulb-off.jpg";
        bulbStatus = false;
    }
}