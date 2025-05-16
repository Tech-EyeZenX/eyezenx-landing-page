import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middlewares/logger.middlewares.js';


dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    });
});

app.listen(port, ()=>{
    logger.info(`Server running on port ${port}`);
})