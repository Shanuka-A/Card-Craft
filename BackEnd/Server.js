// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://shanukaudara6:udara2356@cluster0.os23to3.mongodb.net/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataSchema = new mongoose.Schema({
  text: String,
});

const Data = mongoose.model('Data', dataSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/store-data', async (req, res) => {
  try {
    const newData = new Data({ text: req.body.text });
    await newData.save();
    res.status(200).send({ message: 'Data stored successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error storing data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
