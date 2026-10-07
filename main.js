const warning = document.getElementById("warning");
const warningTime = localStorage.getItem("warningAccepted");
const tenMinutes = 10 * 60 * 1000;

if (warningTime && Date.now() - Number(warningTime) < tenMinutes) {
    warning.style.display = "none";
} else {
    localStorage.removeItem("warningAccepted");
}

function enterSite() {
    localStorage.setItem("warningAccepted", Date.now());
    warning.style.display = "none";
}

const logo = document.getElementById("logo");

let clickCount = 0;

logo.addEventListener("click", () => {
    clickCount++;

    // Normal click sound
    const clickSound = new Audio("assets/click.mp3");
    clickSound.play();

    // Jumpscare on 4th click
    if (clickCount === 4) {
        setTimeout(() => {
            const jumpscare = document.createElement("div");

            jumpscare.style.position = "fixed";
            jumpscare.style.top = "0";
            jumpscare.style.left = "0";
            jumpscare.style.width = "100vw";
            jumpscare.style.height = "100vh";
            jumpscare.style.zIndex = "99999";
            jumpscare.style.backgroundImage = "url('assets/shi.gif')";
            jumpscare.style.backgroundSize = "cover";
            jumpscare.style.backgroundPosition = "center";
            jumpscare.style.backgroundRepeat = "no-repeat";

            document.body.appendChild(jumpscare);

            const jumpSound = new Audio("assets/jumpsc.mp3");
            jumpSound.play();
        }, 1000);
    }
});
