# Bits-Please-Chat
## Description
  A emojis only chat room that allows users to interact and express themselves in modern hieroglyphics
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future Development](#future)
  - [Credits](#credits) 
  
  ## Installation
  To download this code, use git clone with the https link found under the green code button. Once downloaded, run npm i -y in an integrated terminal to install all the required packages specified in the i package.json file. Create a .env file that specifies your MySQL username as DB_USER, your MySQL password as DB_PASSWORD and the database as DB_NAME= 'bits_please_db'. Use the code found in the schema file under db to generate a database in MySQL. Then in the integrated terminal 'npm run seed' will populate the database with seed data.
  
  To access the running version of this site go to https://damp-river-11459.herokuapp.com/

  ## Usage
  <img src="/screenshots/home_page_scrnshot.png">
  On page load users are presented with a home page that briefly explains the way the site functions. Existing users can log in using the login button in the top right of the page while new users can click the sign up button to join
  <img src="/screenshots/signup_page_scrnshot.png">
  New users that chose to sign up are redirected to a sign in page that prompts them to create their username, email and password. When all fields are filled out correctly and the user clicks sign up, they will be automatically signed in and redirected to the chat room page. Users remain signed in until they sign out or their browser cache is cleared
  <img src="/screenshots/chat_page_scrnshot.png">
  In the chat room, users are presented with a keyboard of emojis from which to select. To send a message, users simply click the emoji button and it appears in the chat log. 

  ## Future Development
  Obviously we would like to expand our keyboard of emojis beyond the 4 currently coded in so users could have utility in conversation. Some other features that would be relatively easy to add in the future would be more chat rooms for users to chose from and the ability for users to generate their own chat room that can only be access by those with the correct URL. We also would like to consider features like adding users to 'friends' lists and email notifications for messages sent while a user is logged off 

  ## Credits
 Coded by: ![S. D. McMillan](https://github.com/sdanimc) ![Mony Sary](https://github.com/monysary) ![Griffin Hobbs](https://github.com/ffirgin) ![Jason Doss](https://github.com/dossj88) ![Misty Pham](https://github.com/phammist)
 
