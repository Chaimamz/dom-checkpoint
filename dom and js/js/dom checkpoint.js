alert("hello")

document.querySelectorAll(".fa-heart").forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.classList.contains("far")) {
            element.classList.remove("far")
            element.classList.add("fas")
        }
        else {
            element.classList.remove("fas")
            element.classList.add("far")
        }
    })
})
let trash = document.querySelectorAll(".fa-trash-alt").forEach(function (trash) {
    trash.addEventListener("click", function () {
        if (trash.classList.contains("fas")) {
            trash.parentElement.parentElement.parentElement.remove("fas")
        }
    })
})

let plus = document.getElementsByClassName("plus-btn")
let minus = document.getElementsByClassName("minus-btn")
let qte = document.querySelectorAll(".quantité")
let price = document.getElementsByClassName("prix")

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        console.log(qte[i])
        qte[i].value++
        totale()
    })
}
for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener("click", function () {
        if (qte[i].value > 0) {
            qte[i].value--
            totale()
        }
    })
}
function totale() {
    let somme = 0
    for (let i = 0; i < price.length; i++) {
        somme = somme + qte[i].value * price[i].innerHTML
    }
    document.getElementById("prix-total").innerHTML = somme
}
