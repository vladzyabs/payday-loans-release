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
});