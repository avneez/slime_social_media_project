
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.CONNECTION_URL);
} catch (error) {
  console.log('connnection error', error)
}
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
