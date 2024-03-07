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

        // accordion
        var accordionItems = document.querySelectorAll(".accordion-item");

        accordionItems.forEach(function (item) {
        var header = item.querySelector(".accordion-header");
        var content = header.nextElementSibling;
        
        header.addEventListener("click", function () {
        console.log(content);
        content.classList.toggle("active");
    });
  });
      })
      .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
});


const goldParent = document.getElementById("goldParent");
const goldUlElements = goldParent.querySelectorAll("ul");
const goldTotalCount = 0;

const dignityCount = document.getElementById("dignityList").childElementCount;
const soubaCount = document.getElementById("soubaList").childElementCount;
const kinkaCount = document.getElementById("kinkaList").childElementCount;

goldUlElements.forEach((ul) => {
  goldTotalCount += ul.querySelectorAll("li").length;
});
goldParent.previousElementSibling.insertAdjacentHTML("afterend", `<span>：${goldTotalCount}</span>`);

document.querySelector('li > a').insertAdjacentHTML('afterend', `<span>：${dignityCount}</span>`);
document.querySelector('li > a').insertAdjacentHTML('afterend', `<span>：${soubaCount}</span>`);
document.querySelector('li > a').insertAdjacentHTML('afterend', `<span>：${kinkaCount}</span>`);
