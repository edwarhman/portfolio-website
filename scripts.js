const navLinks = [].slice.call(document.querySelectorAll('.nav-link'));
let projectsCards = Array.from(document.querySelectorAll('.project-card'));

document.getElementById("nav-bar").addEventListener('click', e => {
  const navLink = e.target.parentElement;
  if ( navLinks.indexOf(navLink) >= 0) {
    navLinks.forEach(el => {
      el.classList.remove('active');
    });
    console.log(e.target.parentElement);  
    e.target.parentElement.classList.add("active");
  }
})

document.querySelector('h1').addEventListener('click', e => {
  console.log(document.getElementById('projectsSection').offsetTop);
})


function isElementInRange(el, top, bottom, left, right) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= top &&
    rect.bottom <= bottom &&
    (left === undefined || rect.left >= left) &&
    (right === undefined || rect.right <= right)
  )
}


const mouseover = new MouseEvent('mouseover', {
  'view': window,
  'bubbles': true,
  'cancelable': false
});

document.addEventListener('scroll', ()=> {
  if (document.documentElement.clientWidth < 460) {
    const rect = projectsCards[0].getBoundingClientRect();
    projectsCards.forEach((card) => {
      if (isElementInRange(card, 0, rect.height * 2.5)) {
        console.log(`card ${card} is in range`);
        card.lastElementChild.firstElementChild.classList.add('showed');
      } else {
        card.lastElementChild.firstElementChild.classList.remove('showed');
      }

    });
  }


});
