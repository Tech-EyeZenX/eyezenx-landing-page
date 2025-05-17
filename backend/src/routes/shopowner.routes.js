import express from 'express';
import { googleLogin, googleLoginWithPhone, login, LogOut, register } from '../controllers/auth/shop/auth.controller.js';

const ShopOwnerRouter = express.Router();

ShopOwnerRouter.post('/register',register);
ShopOwnerRouter.post('/login',login);  
ShopOwnerRouter.post('/google-login',googleLogin);
ShopOwnerRouter.post('/google-login-with-phone',googleLoginWithPhone);
ShopOwnerRouter.post('/logout',LogOut); 

export default ShopOwnerRouter;