/*===== MENU SHOW =====*/
(function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle('show');
    })
  }
})('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");
const homeButtonContact = document.querySelector(".home .home__data .button");

function linkAction() {
  // Active link
  navLink.forEach(link => link.classList.remove('active'));

  if (this == homeButtonContact) {
    navLink[4].classList.add('active');
    return
  }

  this.classList.add('active');

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove('show');
}

navLink.forEach(link => link.addEventListener("click", linkAction));
homeButtonContact.addEventListener("click", linkAction);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*===== SCROLL HOME =====*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*===== SCROLL ABOUT =====*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 400 });

/*===== SCROLL SKILLS =====*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.skills__data', { delay: 200 });
sr.reveal('.skills__img', { delay: 400 });

/*===== SCROLL WORK =====*/
sr.reveal('.work__img', { interval: 200 });

/*===== SCROLL WORK =====*/
sr.reveal('.contact__input', { interval: 200 })