const section = document.querySelector('footer');
count=0;
const counterDisplay = document.querySelector('footer div');
section.addEventListener('click', function() {
  count++;
  counterDisplay.textContent = count;
})