const app = document.querySelector('#app');
const button = document.querySelector('#button');

button.addEventListener('click', function () {
  const input = app.querySelector('.form input');
  const takeMessage = input.value;
  input.value = '';

  const task = '<div class="item">' + takeMessage + '</div>';
  const list = app.querySelector('.list');
  list.innerHTML += task;
  const counter = app.querySelector('.counter');
  counter.innerHTML = list.querySelectorAll('div').length;
});
