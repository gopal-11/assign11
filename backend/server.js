// backend/server.js
// modules imported
import express from 'express';
import bodyParserPackage from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// route file imported
import router from './routes/UserRouter.js';

dotenv.config();

const { json } = bodyParserPackage;
// port is configured from env file
const port = process.env.PORT;

const app = express();

// Middleware for json parser and cors
app.use(json());
app.use(cors());

// Route for get api to filter and search users
app.use('/getProductByName', router);

// Server is listening at port configured
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
