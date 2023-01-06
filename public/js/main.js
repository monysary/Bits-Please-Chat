const chatForm = document.querySelectorAll('.msg');
// const chatMessages = document.querySelector('.chat-messages');

const socket = io();

// Messages from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

console.log(chatForm);

// Message submit
chatForm.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Getting emoji from user
    const msg = event.currentTarget.value;
  
    // Emitting a message to the server
    socket.emit('chatMessage', msg);
  });
}) 


// Output messages to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `    <p class="meta"> Brad <span>9:12pm</span></p>
  <img src="${message}">`;
  document.querySelector('#chat-messages').appendChild(div);
}