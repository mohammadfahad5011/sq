const contestIndex = document.querySelector('.contest-cards').querySelectorAll('.card'),
      elements = ['essay-contest', 'photo-contest', 'quiz-contest'];

contestIndex.forEach((btn, i) => {
   btn.addEventListener('click', scrollHere.bind(null, elements[i]));
});

function scrollHere(el) {
   const posY = document.querySelector('.'+el).offsetTop;

   window.scrollTo({ 
      top: posY-50,
      left: 0,
      behavior: 'smooth'
   });
}

