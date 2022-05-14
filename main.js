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

// Mudar o header da página quando der scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector("header");
  const navHeight = header.offsetHeight;

  if (this.window.scrollY >= navHeight) {
    // Scroll maior que a altura do header
    header.classList.add("scroll");
  } else {
    // Scroll menor que a altura do header
    header.classList.remove("scroll");
  }
}

// Testimonials carousel
const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  // Configurações de telas
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scroll Reveal - mostrar elementos quando der scroll na página
const optionsSR = {
  origin: "top",
  distance: "30px",
  duration: 900,
  reset: true,
};

ScrollReveal().reveal(
  `
#home .text, #home .image, 
#about .text, #about .image,
#services header, #services .card,
#bordados header, #home .bordados,
#testimonials header, #home .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  optionsSR
);

window.addEventListener("scroll", function () {});

// Botão Voltar para o Topo (Back to top)
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});
