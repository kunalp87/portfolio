let bm = document.querySelector("#bm");
let bank = document.querySelectorAll(".bank"); // Use querySelectorAll to get a collection of elements.
let weather = document.querySelector("#wa");
let cal = document.querySelector("#cal");
let tic = document.querySelector("#tic");
let rock = document.querySelector("#rock");
let pig = document.querySelector("#pig");
let QR = document.querySelector("#QRG");
let web= document.querySelector("#web");
let netlify = document.querySelector("#netlify");

bm.addEventListener("click", () => {
    bank[0].style.display = "block";
});
weather.addEventListener("click", () => { // Use 'weather' instead of 'wa'
    bank[1].style.display = "block";
});
cal.addEventListener("click", () => {
    bank[2].style.display = "block";
});
tic.addEventListener("click", () => {
    bank[3].style.display = "block";
});
rock.addEventListener("click", () => {
    bank[4].style.display = "block";
});
pig.addEventListener("click", () => {
    bank[5].style.display = "block";
});
QR.addEventListener("click", () => {
    bank[6].style.display = "block";
});
web.addEventListener("click", () => {
    bank[7].style.display = "block";
});
netlify.addEventListener("click", () => {
    bank[8].style.display = "block";
});

// Close each '.bank' item on click
bank.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.display = "none";
    });
});
