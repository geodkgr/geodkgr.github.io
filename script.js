var counter = document.getElementById("counter-text")
var count = 0;

function plus() {
    counter.innerHTML = ++count;
}

function minus() {
    counter.innerHTML = --count;
}