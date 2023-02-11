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

