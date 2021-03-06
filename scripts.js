const navLinks = [].slice.call(document.querySelectorAll(".nav-link"));
const projectsCards = Array.from(document.querySelectorAll(".project-card"));
const navBar = document.getElementById("nav-bar");
const sections = Array.from(document.querySelectorAll(".main-section"));
const contactBtn = document.getElementById("contact-button");
const emailForm = document.getElementById("emailForm");
const closeModalBtn = document.getElementById("closeModalBtn");

function isElementInRange(el, strict, top, bottom, left, right) {
  const rect = el.getBoundingClientRect();
  if (strict) {
    return (
      rect.top >= top &&
      rect.bottom <= bottom &&
      (left === undefined || rect.left >= left) &&
      (right === undefined || rect.right <= right)
    );
  }

  return (
    (top >= rect.top && bottom <= rect.bottom) ||
    (rect.top >= top && rect.top <= bottom) ||
    (rect.bottom >= top && rect.bottom <= bottom) ||
    (left >= rect.bottom && right <= rect.right) ||
    (rect.left >= left && rect.left <= right) ||
    (rect.right >= left && rect.right <= right)
  );
}

document.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;
  if (navLinks.indexOf(navLink) >= 0) {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add("active");
  }
});

document.addEventListener("scroll", () => {
  if (document.documentElement.clientWidth < 460) {
    const cardRect = projectsCards[0].getBoundingClientRect();
    projectsCards.forEach((card) => {
      if (isElementInRange(card, true, 0, cardRect.height * 2.5)) {
        console.log(`card ${card} is in range`);
        card.lastElementChild.firstElementChild.classList.add("showed");
      } else {
        card.lastElementChild.firstElementChild.classList.remove("showed");
      }
    });
  }

  sections.forEach((section, index) => {
    if (
      isElementInRange(
        section,
        false,
        window.innerHeight * 0.3,
        window.innerHeight * 0.5
      )
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

contactBtn.addEventListener("click", () => {
  emailForm.showModal();
});

closeModalBtn.addEventListener("click", () => {
  emailForm.close();
});
