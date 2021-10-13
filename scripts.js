const navLinks = [].slice.call(document.querySelectorAll('.nav-link'));


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
