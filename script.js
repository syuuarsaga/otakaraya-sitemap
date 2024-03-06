// html import
document.addEventListener("DOMContentLoaded", function () {
  var includes = document.querySelectorAll('[data-include]');
  includes.forEach(function (element) {
    var file = 'categories/' + element.getAttribute('data-include') + '.html';
    fetch(file)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function (html) {
        element.innerHTML = html;
      })
      .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
});
