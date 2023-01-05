const chatForm = document.querySelectorAll('.msg');

const socket = io();

socket.on('message', message => {
  console.log(message);
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
