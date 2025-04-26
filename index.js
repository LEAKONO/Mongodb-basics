const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// POST route to create a new user
app.post('/users', async (req, res) => {
    try {
      const { name, email } = req.body;
      const newUser = new User({ name, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
