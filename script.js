function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
//RECENTLY FINISHED
const carousel = document.querySelector('.project-carousel');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  next.addEventListener('click', () => {
    carousel.scrollBy({ left: 400, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -400, behavior: 'smooth' });
  });
  function revealOnScroll() {
    const elements = document.querySelectorAll('.project-details');
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // trigger on load too
  //enquiry
  
  function openPopup() {
    document.getElementById("enquiryPopup").style.display = "flex";
    document.body.style.overflow = "hidden"; // optional: lock scroll
  }

  function closePopup() {
    document.getElementById("enquiryPopup").style.display = "none";
    document.body.style.overflow = "auto";
  }








