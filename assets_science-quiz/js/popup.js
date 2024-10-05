const popup = document.querySelector('.popup'),
      popupWrapper = document.querySelector('.popup-wrapper'),
      popupCloseBtn = document.querySelector('.popup-close-btn'),
      essayPopup = document.querySelector('.essay-contest button'),
      photoPopup = document.querySelector('.photo-contest button'),
      popupTitle = document.querySelector('.popup-title'),
      popupInfo = document.querySelector('.popup-info'),
      popupGFormLink = document.querySelector('.popup-section a'),
      popupLiSpan = document.querySelector('.popup-section ul li:nth-of-type(2) span'),
      popupContent = [{
         title: "রচনা প্রতিযোগিতা",
         info: "নিচের যেকোনো একটি মাধ্যম ব্যবহার করে আপনার লেখা পাঠাতে পারেন।",
         googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeXjxROD0zQILaIvuOyaA1LZAaQT_AQo93szM3gH18heP8RTA/viewform?usp=sf_link"
      }, {
         title: "ফটোগ্রাফি প্রতিযোগিতা",
         info: "নিচের যেকোনো একটি মাধ্যম ব্যবহার করে আপনার ছবি পাঠাতে পারেন।",
         googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeywd6TgCeqjuwn14_Av_zDYgi02KYCUXnmBqiK_kP2QTa-dw/viewform?usp=sf_link"
      }];

[essayPopup].forEach((btn, i) => btn.addEventListener('click', showPopupForIndexOf.bind(null, i)));

popupCloseBtn.addEventListener('click', closePopup);
popupWrapper.addEventListener('click', e => e.target === e.currentTarget && closePopup());

function showPopupForIndexOf(i) {
   popupTitle.textContent = popupContent[i].title;
   popupInfo.textContent = popupContent[i].info;
   popupGFormLink.href = popupContent[i].googleFormLink;

   popupLiSpan.textContent = i ? "ছবি" : "রচনা";

   popup.style.top = window.scrollY + 'px';
   popup.classList.remove('hide');
   document.body.style.overflow = 'hidden';
};

function closePopup() {
   if (!popup.classList.contains('hide')) {
      popup.classList.add('hide');
      document.body.style.overflow = 'auto';
   }
}

