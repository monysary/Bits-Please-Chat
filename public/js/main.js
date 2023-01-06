const chatForm = document.querySelectorAll('.msg');
const chatMessages = document.querySelector('#chat-messages');

const socket = io();

// Messages from server
socket.on('add-message', messages => {

  console.log(messages, "messages");
  messages.forEach((message) => {
    const div = document.createElement('div'); 
    div.classList.add('message'); 
        div.innerHTML = `
          <p class="meta text-[#F2EFE9]">${message.username}</p>
          
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#EBC9AF] "><img src="${message.messageContent}"</span></div>
            </div>
        `;
        document.querySelector('#chat-messages').appendChild(div);
  })
  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('serverMessage', serverMessage => 
  outputServer(serverMessage)
)

// Message submit
chatForm.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Getting emoji from user
    const msg = {
      username: document.querySelector('#username').value,
      messageContent: event.currentTarget.value 
    };
  
    // Emitting a message to the server
    socket.emit('chatMessage', msg);
  });
}) 

// Output Server to DOM
function outputServer(serverMessage) {
  const div = document.createElement('div');
  div.classList.add('serverMessage'); 
  div.innerHTML = `
    <p class="meta text-[#F2EFE9] text-right"> Server says </p>
   
    <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#B87678] ">${serverMessage}</span></div>
            </div>
  `;
  document.querySelector('#chat-messages').appendChild(div);
};
