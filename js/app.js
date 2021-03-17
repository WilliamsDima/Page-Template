const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const anchors = document.querySelectorAll('a[href*="#"]');
const link = document.querySelectorAll('.nav__link');

/* add class active*/
burger.addEventListener('click', event => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

link.forEach(item => {
        item.addEventListener('click', function (e) {
        e.preventDefault();
         
        item.classList.toggle('active');
        
    })
    
});

/* scroll */
anchors.forEach(item => {
    item.addEventListener('click', function (e) {
    e.preventDefault();
        
        
    const blockID = item.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});



