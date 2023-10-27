import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const feedbackStorageKey = 'feedback-form-state';

const saveFormStateToLocalStorage = () => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(feedbackStorageKey, JSON.stringify(formState));
};

const loadFormStateFromLocalStorage = () => {
  const savedState = localStorage.getItem(feedbackStorageKey);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
};

loadFormStateFromLocalStorage();

emailInput.addEventListener('input', saveFormStateToLocalStorage);
messageTextarea.addEventListener('input', saveFormStateToLocalStorage);
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!emailInput.value || !messageTextarea.value) {
    alert("Заповніть всі поля.");
    return;
  }
    localStorage.removeItem(feedbackStorageKey);
    emailInput.value = '';
    messageTextarea.value = ''
   });
    
    console.log({ email: emailInput.value, message: messageTextarea.value, });

