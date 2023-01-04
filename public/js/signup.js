const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#username");
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/chatroom');
  } else {
    alert('Failed to sign up!');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);