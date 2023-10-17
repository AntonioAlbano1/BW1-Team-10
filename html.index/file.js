const check = document.getElementById("checkButton");
const button = document.getElementById("lastButton");

check.addEventListener("change", function(){
    button.disabled = !check.checked;
});
button.addEventListener("click", function(){
window.location.href = "./benchmark.html";
});