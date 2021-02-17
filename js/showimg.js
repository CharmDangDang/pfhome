const modals = document.querySelector(".showimg");
let img = modals.getElementsByTagName("img");
for (let x = 0; x < img.length; x++) {
    img.item(x).onclick = function() { window.open(this.src) };
}