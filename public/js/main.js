const chatForm = document.querySelectorAll('.msg');
// const chatMessages = document.querySelector('.chat-messages');

const socket = io();

// Messages from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

socket.on('serverMessage', serverMessage => {
  outputServer(serverMessage);
})

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


// Output Emojis to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message'); // add to CSS
  div.innerHTML = `
    <p class="meta"> Brad <span>9:12pm</span></p>
    <img src="${message}" class="w-52 bg-[#BFB48F] text-[#904E55] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
  `;
  document.querySelector('#chat-messages').appendChild(div);
};

// Output Server to DOM
function outputServer(serverMessage) {
  const div = document.createElement('div');
  div.classList.add('serverMessage'); //add to CSS
  div.innerHTML = `
    <p class="meta"> Server Please <span>9:12pm</span></p>
    <div class="bg-[#BFB48F] text-[#904E55] font-medium rounded-lg text-sm px-5 py-2.5 text-center">${serverMessage}</div>
  `;
  document.querySelector('#chat-messages').appendChild(div);
};