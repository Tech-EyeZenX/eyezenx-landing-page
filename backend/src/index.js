import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middlewares/logger.middlewares.js';
import { dbConnection } from './config/dbConnection.js';
import DoctorRouter from './routes/doctor.route.js';
import ShopOwnerRouter from './routes/shopowner.routes.js';
import AdminRouter from './routes/admin.route.js';


dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dbConnection();



// Routes

app.use('/api/v1/doctor', DoctorRouter);
app.use('/api/v1/shopowner', ShopOwnerRouter);
app.use('/api/v1/admin', AdminRouter);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    });
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
})