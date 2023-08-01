
# FullStack Social Media App

Simplistic example of a social media application using MongoDB, Express.js, Node.js and React. The user is able to register an account and with API, , login, post, like, comment, add friends and dm other users. This application uses data tables to respond with other sets to make this application functional.


## Installation

Clone the repository

Make sure you are in the correct folder to run these commands to download in the terminal.

Make sure you are in "Server":

First, install nodemon
```bash
npm i -g nodemon
```
Next, install these packages. Copy and Paste
```bash
npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose
```
Now make sure you are in "Client"

Install these packages
```bash
npm i react-redux @redux.js/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material 
```
Restart the server and then restart the client. You are ready to initialize a Cluster in mongoose. Do not forget to add a security key in the .env file


