import { Router } from 'express';
import { userController } from '../../controllers/controllers.module';
import { isUserAuthenticated } from '../../middlewares/auth.middleware';
// import AuthService from '../../../services/Auth.service';\
import { authController } from '../../auth/authentication.module';


const route = Router();

route
  .route('/')
  .get(isUserAuthenticated, (req, res, next) => {
    userController.getAllUsers(req, res, next);
  })
  .post((req, res, next) => {
    authController.create(req, res, next);
  });

route.get('/verify-email/:token', (req, res, next) => {
  authController.verifyEmail(req, res, next);
});

route.post('/login', (req, res, next) => {
authController.login(req, res, next);
});

export default route;
