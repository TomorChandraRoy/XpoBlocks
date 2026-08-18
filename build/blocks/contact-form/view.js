/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/contact-form/view.js ***!
  \*****************************************/
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll('.guten-contact-form-inner');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const responseDiv = form.querySelector('.form-response');

      // For now, simply mock a successful submission
      responseDiv.innerHTML = '<p style="color: green; margin-top: 10px;">Message sent successfully!</p>';
      form.reset();
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map