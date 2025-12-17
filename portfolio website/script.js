// 1. Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.Navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#333';  // Darker background on scroll
    navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'black';  // Original color at top
    navbar.style.boxShadow = 'none';
  }
});

// 2. Highlight Active Navbar Link on Scroll
const sections = document.querySelectorAll('section, .About_Container, .GitHub_Container, .Contact_Container');
const navLinks = document.querySelectorAll('.Navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// 3. Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '30px';
backToTop.style.right = '30px';
backToTop.style.padding = '10px 15px';
backToTop.style.fontSize = '16px';
backToTop.style.display = 'none';
backToTop.style.cursor = 'pointer';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.backgroundColor = 'black';
backToTop.style.color = 'white';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});