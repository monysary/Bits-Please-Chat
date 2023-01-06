# Bits-Please-Chat
## Description
  A emojis only chat room that allows users to interact and express themselves in modern hieroglyphics
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future Development](#futuredevelopment)
  - [Credits](#credits) 
  
  ## Installation
  To download this code, use git clone with the https link found uner the green code button. Once downloaded, run npm i -y in an integrated terminal to install all the required packages specified in the i package.json file. Create a .env file that specifies your MySQL username as DB_USER, your MySQL password as DB_PASSWORD and the database as DB_NAME= 'bits_please_db'. Use the code found in the schema file under db to generate a database in MySQL. Then in the integrated terminal 'npm run seed' will populate the database with seed data.

  ## Usage
  <img src="/screenshots/home_page_scrnshot.png">
  On page load users are presented with a home page that briefly explains the way the site functions. Existing users can log in using the login button in the top right of the page while new users can click the sign up button to join
  <img src="/screenshots/signup_page_scrnshot.png">
  New users that chose to sign up are redirected to a sign in page that prompts them to create their username, email and password. When all fields are filled out correctly and the user clicks sign up, they will be automatically signed in and redirected to the chat room page. Users remain signed in until they sign out (?????)
  <img src="/screenshots/chat_page_scrnshot.png">
  In the chat room, users are presented with a keyboard of emojis from which to select. To send a message, users simply click the emoji button and it appears in the chat log

  ## Future Development
  More room options, create rooms to share with friends, have friends lists?, allow text as well as emojis, able to create chat rooms and specfic whether it supports text or is emoji only, email notification that friends or specific chat rooms have message while user is not logged in ??

  ## Credits
 Coded by: ![S. D. McMillan](https://github.com/sdanimc) ![Mony Sary](https://github.com/monysary) ![Griffin Hobbs](https://github.com/ffirgin) ![Jason Doss](https://github.com/dossj88) 
 