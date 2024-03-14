import express from 'express';
import connectDb  from "./connection.js";
// import routes from 
import urlRouter from './routes/url.js';


const app = express();

// body parser middleware
app.use(express.urlencoded({ extended: true }));

//mongo connection
connectDb ("mongodb://127.0.0.1:27017/url-shortener");

// use routes 
app.use('/url', urlRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on : http://localhost:${PORT}`);
});