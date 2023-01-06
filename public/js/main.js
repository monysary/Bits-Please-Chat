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
    fetch('/api/user/getUser')
      .then(res => res.json())
      .then(data => {
        updateUrl(data)

        const { username } = Qs.parse(location.search, {
          ignoreQueryPrefix: true,
        });

        const div = document.createElement('div');
        div.classList.add('message'); // add to CSS
        div.innerHTML = `
          <p class="meta text-[#F2EFE9]">${username}</p>
          
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#B87678] "><img src="${message}"</span></div>
            </div>
          
        `;
        document.querySelector('#chat-messages').appendChild(div);

      })

};

// Output Server to DOM
function outputServer(serverMessage) {
  const div = document.createElement('div');
  div.classList.add('serverMessage'); //add to CSS
  div.innerHTML = `
    <p class="meta text-[#F2EFE9] text-right"> Server says </p>
   
    <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#EBC9AF] ">${serverMessage}</span></div>
            </div>
  `;
  document.querySelector('#chat-messages').appendChild(div);
};

// Update URL with username
function updateUrl(username) {
  const pathname = window.location.pathname;
  const newUrl = `${pathname}?username=${username}`;
  window.history.pushState({}, '', newUrl);
}