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
const header = document.querySelector("header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
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
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Menu ativo conforme a seção na página
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

// When Scroll
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
