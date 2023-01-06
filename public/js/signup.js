const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#signup-username");
  const emailEl = document.querySelector("#signup-email");
  const passwordEl = document.querySelector("#signup-password");
  const confPasswordEl = document.querySelector("#confirm-password");
  
  if (passwordEl.value != confPasswordEl.value) {
    alert('Confirm password does not match, please try again!');
    return;
  } else {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log(response);
      alert('Signed up!');
      document.location.replace('/chatroom');
    } else if (response.status == 400) {
      alert ('Account already exists for this email');
    } else {
      alert('Failed to sign up!');
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);