// Header and footer manipulations
window.onscroll = () => {
  let header = document.querySelector('.header');
  let footer = document.querySelector('.footer');
  let logo = document.querySelector('.logo-header');
  let navigation = document.querySelector('.navigation');
  let loginSignup = document.querySelector('.login-signup');

  let distance = (footer.offsetTop + header.offsetHeight) - (header.offsetTop + header.offsetHeight);
  let bottomViewport = window.scrollY + window.innerHeight;

  header.classList.toggle('sticky', window.scrollY > 100 && bottomViewport < distance);
  logo.classList.toggle('vanish', bottomViewport > distance);
  navigation.classList.toggle('vanish', bottomViewport > distance);
  loginSignup.classList.toggle('vanish', bottomViewport > distance);
};

// Active navigation indicator
let pathName = window.location.pathname;
let navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
    // Check if the end of the href matches the pathName
    if (pathName.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});



//Swipper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Tabs
let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}


