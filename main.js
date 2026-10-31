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

// Logo click and jumpscare
const logo = document.getElementById("logo");

let clickCount = 0;

logo.addEventListener("click", () => {
    clickCount++;

    const clickSound = new Audio("assets/click.mp3");
    clickSound.play();

    if (clickCount === 4) {
        setTimeout(() => {
            const jumpscare = document.createElement("div");

            jumpscare.style.position = "fixed";
            jumpscare.style.inset = "0";
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

const booTrigger = document.getElementById("boo-trigger");

booTrigger.addEventListener("click", (event) => {
    event.preventDefault();

    const booSound = new Audio("assets/boo.mp3");
    booSound.play();

    document.body.classList.add("boo");
    document.body.innerHTML = "BOO";
});