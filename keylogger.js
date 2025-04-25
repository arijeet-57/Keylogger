const logdiv =  document.getElementById('log');
const statediv =  document.getElementById('state');
const startbtn =  document.getElementById('start');
const stopbtn =  document.getElementById('stop');

startbtn.addEventListener("click", () => {
    document.addEventListener("keydown", handledown);
    document.addEventListener("keyup", handleup);
    startbtn.disabled = true;
    stopbtn.disabled = false;
})

stopbtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handledown);
    document.removeEventListener("keyup", handleup);
    logdiv.textContent = "";
    statediv.textContent = "";
    stopbtn.disabled = true;
    startbtn.disabled = false;
})


function handledown(e) {
    logdiv.textContent = `Key ${e.key} is pressed down`;
    statediv.textContent = `Key is down`;
}

function handleup(e) {
    logdiv.textContent = `Key ${e.key} is Up`;
    statediv.textContent = `Key is Up`;
}