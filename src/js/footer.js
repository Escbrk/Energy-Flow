import axios from 'axios';
import iziToast from 'izitoast';

const refs = {
  form: document.getElementById('subscriptionForm'),
  email: document.getElementById('email'),
  pattern: new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
  button: document.getElementById('submitButton'),
};

refs.email.addEventListener('input', fieldChecker);

async function emailChecker(e) {
  e.preventDefault();

  try {
    if (refs.pattern.test(refs.email.value) || refs.email.value.length != 0) {
      await axios
        .post('https://energyflow.b.goit.study/api/subscription', {
          email: refs.email.value,
        })
        .then(response =>
          iziToast.success({
            title: 'Success',
            message: response.data.message,
          })
        )
        .catch(error =>
          iziToast.error({
            title: 'Error',
            message: error.response.data.message,
          })
        );
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again',
    });
  }
}

function fieldChecker() {
  const input = refs.email.value;

  if (input.length === 0) {
    refs.button.disabled = true;
    refs.button.classList.add('noActive');
  } else {
    refs.button.disabled = false;
    refs.button.classList.remove('noActive');
  }

  refs.form.addEventListener('submit', emailChecker);
}
