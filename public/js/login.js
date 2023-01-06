const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#login-username").value;
  const passwordEl = document.querySelector("#login-password").value;

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      usernameEl,
      passwordEl,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Logged in Successfully!');
    document.location.replace('/chatroom');
  } else if (response.status == 400) {
    alert('Incorrect email or password, please try again')
  } else {
    alert('Failed to Login!');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);