import {Router} from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'
import { forgotPasswordController, loginController, logoutController, refreshToken, registerUserController, resetPassword, updateUserDetails, uploadAvatar, verifyEmailController, verifyForgotPasswordOtp} from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verify_email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetPassword)
userRouter.post('/refresh-token',refreshToken)

export default userRouter