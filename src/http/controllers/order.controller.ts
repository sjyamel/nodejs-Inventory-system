import {Response, NextFunction} from 'express';
import OrderService from '../../services/order.service';
import AppException from '../../exceptions/AppException';
import httpStatus from 'http-status';
// import { userController } from './controllers.module';
// import UserService from '../../services/user.service';
import { RequestType } from '../middlewares/auth.middleware';
// import AppException from '../../exceptions/AppException';
// import OrderService from '../../services/order.service';

export default class OrderController{
    constructor(
        private readonly orderService: OrderService,
        // private readonly userService: UserService
    ){}
    async getAllOrders(req: RequestType, res: Response, next: NextFunction){
        try{
        const filter = req.query;
        const orders = this.orderService.getAllOrders(filter);
        return res.status(200).json({
            data: orders
        })
        }catch(err:any){
            return next(
                new AppException(err.message, httpStatus.BAD_REQUEST)
            )
        }
    }
    async getOrderById(req: RequestType, res: Response, next: NextFunction){
        try{
            const id = req.params.id;
            const order = await this.orderService.getOrderById(id);
            return res.status(200).json({
                data: order
            });
        }catch(err: any){
            return next(
                new AppException(err.message, httpStatus.BAD_GATEWAY)
            );
        }
    }

    async createOrder(req: RequestType, res: Response, next: NextFunction){
        try{
            const body = req.body;
            const order = await this.orderService.createOrder(body);
            return res.status(201).json({
                data: order
            })
        }catch(err: any){
            return next(
                new AppException(err.message, httpStatus.BAD_REQUEST)
            )
        }

        
    }
    async getMyOrders(req: RequestType, res: Response, next: NextFunction){
        try{
            const order = this.orderService.getOrderByUser(req.user.id);
            return res.json({data: order});
            
        }catch(err: any){
            return next(
                new AppException(err.message, httpStatus.BAD_REQUEST)
            )
        }
    }
}
