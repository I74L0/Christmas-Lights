document.querySelector(".button").addEventListener("click", function () {
    document.querySelector(".container").classList.toggle('on');
});

let inputs = document.querySelectorAll(".light");
inputs.forEach(element => {
    element.addEventListener("click", function () {
        this.querySelector("input").click();
        this.querySelector("input").addEventListener("change", function () {
            element.style.color = this.value;
            element.style.backgroundColor = this.value;
        });
    });
});

document.getElementById("interval").addEventListener("blur", function () {
    if (this.value >= 1)
        document.documentElement.style.setProperty('--interval', this.value + 's');
});

document.getElementById("intensity").addEventListener("blur", function () {
    if (this.value >= 15 && this.value <= 40)
        document.documentElement.style.setProperty('--intensity', this.value + 'px');
});
