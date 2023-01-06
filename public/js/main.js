const chatForm = document.querySelectorAll('.msg');
const chatMessages = document.querySelector('#chat-messages');

const socket = io();

// Messages from server
socket.on('add-message', messages => {
  // console.log(message);
  // outputMessage(message);
  console.log(messages, "messages");
  messages.forEach((message) => {
    const div = document.createElement('div'); //${username}
        div.classList.add('message'); // add to CSS
        div.innerHTML = `
        
          <p class="meta text-[#F2EFE9]"> ${message.username} </p>
          <img src="${message.messageContent}" class="w-52 bg-[#BFB48F] text-[#904E55] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        `;
        document.querySelector('#chat-messages').appendChild(div);
  })
  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

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


// Output Emojis to DOM
function outputMessage(message) {
    // fetch('/api/user/getUser')
    //   .then(res => res.json())
    //   .then(data => {
    //     updateUrl(data)

    //     const { username } = Qs.parse(location.search, {
    //       ignoreQueryPrefix: true,
    //     });

        const div = document.createElement('div'); //${username}
        const username = document.querySelector('#username').value;
        div.classList.add('message'); // add to CSS
        div.innerHTML = `
        
          <p class="meta text-[#F2EFE9]"> ${username} </p>
          <img src="${message}" class="w-52 bg-[#BFB48F] text-[#904E55] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        `;
        document.querySelector('#chat-messages').appendChild(div);

      // })

};

// Output Server to DOM
function outputServer(serverMessage) {
  const div = document.createElement('div');
  div.classList.add('serverMessage'); //add to CSS
  div.innerHTML = `
    <p class="meta text-[#F2EFE9]"> Server says </p>
    <div class="bg-[#BFB48F] text-[#904E55] font-medium rounded-lg text-sm px-5 py-2.5 text-center">${serverMessage}</div>
  `;
  document.querySelector('#chat-messages').appendChild(div);
};

// Update URL with username
function updateUrl(username) {
  const pathname = window.location.pathname;
  const newUrl = `${pathname}?username=${username}`;
  window.history.pushState({}, '', newUrl);
}