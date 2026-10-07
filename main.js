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