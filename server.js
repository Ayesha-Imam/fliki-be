import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()
const app = express();

const whiteList = ["http://localhost:5173"];
const corsOptions = {
  credentials: true,
  origin: whiteList,
};

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
