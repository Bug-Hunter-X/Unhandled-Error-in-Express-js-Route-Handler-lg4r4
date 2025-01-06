const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  console.log(users[userId]); // Accessing array directly can throw errors
  res.send(users[userId]);
});

const users = [{
  id: '1',
  name: 'John Doe'
}, {
  id: '2',
  name: 'Jane Doe'
}];
app.listen(3000, () => console.log('Server listening on port 3000'));