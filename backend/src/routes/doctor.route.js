import express from 'express';
import { googleLogin, googleLoginWithPhone, login, LogOut, register } from '../controllers/auth/Doctor/auth.controller.js';

const DoctorRouter = express.Router();

DoctorRouter.post('/register',register);
DoctorRouter.post('/login',login);  
DoctorRouter.post('/google-login',googleLogin);
DoctorRouter.post('/google-login-with-phone',googleLoginWithPhone);
DoctorRouter.post('/logout',LogOut); 

export default DoctorRouter;