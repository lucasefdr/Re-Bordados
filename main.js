// Abre e fecha o menu quando clicar no ícone
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    // .toggle -> se tiver, tira, se não, coloca
    nav.classList.toggle("show");
  });
}

// Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll(".menu ul li a");

for (const element of links) {
  element.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
