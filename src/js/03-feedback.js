import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

let storedData = { email: ' ', message: ' ' };

// function to add values to storedData object
const updateStorage = throttle(function () {
  storedData.email = emailInput.value;
  storedData.message = messageInput.value;
  localStorage.setItem(storageKey, JSON.stringify(storedData));
}, 1000);

// event listeners
emailInput.addEventListener('input', updateStorage);
messageInput.addEventListener('input', updateStorage);

// make object usable
const parsedInput = JSON.parse(localStorage.getItem(storageKey));
emailInput.value = parsedInput.email;
messageInput.value = parsedInput.message;

// handle reset - log last input
form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(storageKey);
  let lastInputValues = { email: ' ', message: ' ' };
  lastInputValues.email = emailInput.value;
  lastInputValues.message = messageInput.value;
  console.log(lastInputValues);
  form.reset();
});
