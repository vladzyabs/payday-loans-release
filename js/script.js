"use strict";

var rangeYouNeed = document.getElementById('range__you_need');
var selectedYouNeed = document.getElementById('select-box__you-need');
var formYouNeed = document.getElementById('form-you-need');
var value = 100;

rangeYouNeed.oninput = function () {
  selectedYouNeed.value = rangeYouNeed.value;
  value = rangeYouNeed.value; // rangeYouNeed.style.cssText = `background: -webkit-linear-gradient(left, $color-yellow 0%, $color-yellow 25%, $color-blue-light 25%, $color-blue-light 100%);`
};

selectedYouNeed.addEventListener('change', function (e) {
  rangeYouNeed.value = selectedYouNeed.value;
  value = selectedYouNeed.value;
});
formYouNeed.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(value);
}); //burger menu

var menu = document.getElementById('menu');
var links = document.querySelectorAll('.menu__nav-link');
var burger = document.getElementById('burger');
var burgerLine = document.querySelectorAll('.burger__line');
var activeMenu = false;

var showMenu = function showMenu() {
  menu.classList.add('menu__show');
  activeMenu = true;
  burger.classList.add('burger__close');
};

var hideMenu = function hideMenu() {
  menu.classList.remove('menu__show');
  activeMenu = false;
  burger.classList.remove('burger__close');
};

burger.onclick = function () {
  !activeMenu ? showMenu() : hideMenu();

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      hideMenu();
    });
  }
};

(function () {
  window.onscroll = function () {
    if (window.pageYOffset > 1) {
      hideMenu();
    }
  };
})();