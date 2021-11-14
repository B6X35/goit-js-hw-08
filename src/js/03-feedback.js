import { functions } from 'lodash';
import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const textEl = {
    email: '',
    message: ''
}

saveTextMes()

inputEl.addEventListener("input", inputText);

messageEl.addEventListener("input", messageText);

throttle(function inputText(event) {
    textEl.email = event.currentTarget.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textEl));
}, 500);

throttle(function messageText(event) {
    textEl.message = event.currentTarget.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textEl));
}, 500);


function saveTextMes() {
    const savedText = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedText = JSON.parse(savedText);

    if (savedText) {
        inputEl.value = parsedText['email'];
        messageEl.value = parsedText['message'];
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const {
        elements: { email, message }
      } = event.currentTarget;
      
      const em = {
          email: form.email.value,
          message: form.message.value
      }
      
        console.log(em);

    localStorage.clear();
    event.currentTarget.reset();
});