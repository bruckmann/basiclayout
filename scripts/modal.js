const modal  = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const closer = document.getElementById("fechar");



for (let card of cards) {

    card.addEventListener("click" , () => {
    modal.classList.add("active")
    })
    closer.addEventListener("click" , () => {
    modal.classList.remove("active")
    })
}
