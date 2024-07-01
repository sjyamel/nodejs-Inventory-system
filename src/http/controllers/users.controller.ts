import { Request, Response, NextFunction } from 'express';
import AppException from '../../exceptions/AppException';
import UserService from '../../services/user.service';

export default class UserController {
  constructor(
    private readonly userService: UserService
  ){}
  async getAllUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers({});
      return res.status(200).json({ data: users });
    } catch (err: any) {
      return next(new AppException(err.message, err.status));
    }
  }
}
