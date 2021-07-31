var form1 = document.getElementById("personal");
var form2 = document.getElementById("address");
var form3 = document.getElementById("edu");

var b1n = document.getElementById("button1n");
var b2p = document.getElementById("button2p");
var b2n = document.getElementById("button2n");
var b3p = document.getElementById("button3p");
var b3n = document.getElementById("button3n");

b1n.addEventListener("click", () => {
    form1.style.left = "-900px";
    form2.style.left = "20px";
});

b2p.addEventListener("click", () => {
    form1.style.left = "20px";
    form2.style.left = "900px";
});

b2n.addEventListener("click", () => {
    form2.style.left = "-900px";
    form3.style.left = "20px";
});
b3p.addEventListener("click", () => {
    form2.style.left = "20px";
    form3.style.left = "900px";
});
b1n.addEventListener("click", () => {
    form1.style.left = "-900px";
    form2.style.left = "20px";
});
