import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import e from 'express';
const app = express();

dotenv.config();
const PORT=process.env.PORT || 3001;

const URI=process.env.MONGODB_URI;

try {
  mongoose.connect(URI)
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(error);
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});