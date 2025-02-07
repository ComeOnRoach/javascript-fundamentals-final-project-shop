const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {

});

server.listen(PORT);


// let users = [
//   {
//     name: "Олексій",
//     age: 25,
//   },
// ];
// app.use(express.json()); // Дозволяє приймати JSON у запитах


// // Отримати всіх користувачів
// app.get('/users', (req, res) => {
//     res.json(users);
// })

// // Додати нового користувача
// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     users.push(newUser);
//     req.status(201),json({message: `user ${newUser.name} has been added`, newUser});
// })

