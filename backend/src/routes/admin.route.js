import express from 'express';
import admin from '../config/firebase.js';
import { googleLogin, googleLoginWithPhone, login, Logout, register } from '../controllers/auth/admin/auth.controller.js';

const AdminRouter = express.Router();

AdminRouter.post('/register',register);
AdminRouter.post('/login',login);  
AdminRouter.post('/google-login',googleLogin);
AdminRouter.post('/google-login-with-phone',googleLoginWithPhone);
AdminRouter.post('/logout',Logout);

export default AdminRouter;