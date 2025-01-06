const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }

  const user = users.find(user => user.id === userId.toString());
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }
  res.send(user);
});

const users = [{
  id: '1',
  name: 'John Doe'
}, {
  id: '2',
  name: 'Jane Doe'
}];
app.listen(3000, () => console.log('Server listening on port 3000'));