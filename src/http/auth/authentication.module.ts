import AuthService from '../../services/Auth.service';
import EmailService from '../../services/Email.service';
import EncryptionService from '../../services/Encryption.service';
import TokenService from '../../services/Token.service';
import UserService from '../../services/user.service';
import UserAuth from './user.auth';

export const authController = new UserAuth(
  new AuthService(
    new EncryptionService(),
    new TokenService(),
    new UserService(),
    new EmailService()
  ),
  new UserService(),
  new EncryptionService()
);
