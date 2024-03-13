import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import e from 'express';

// import routes from './routes';


const app = express();


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});