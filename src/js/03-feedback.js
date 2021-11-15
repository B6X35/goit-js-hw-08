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

inputEl.addEventListener("input", throttle(inputText, 500));

messageEl.addEventListener("input", throttle(messageText, 500));

function inputText(event) {
    textEl.email = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textEl));
}

function messageText(event) {
    textEl.message = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textEl));
}


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