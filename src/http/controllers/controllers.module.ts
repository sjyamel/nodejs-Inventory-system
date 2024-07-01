/**
 * Use this module file to create instances of all controllers and simplify imports in to your routers
 */

import OrderService from '../../services/order.service';
import OrderController from './order.controller';
import UserController from './users.controller';

export const userController = new UserController();
export const orderController = new OrderController(
    new OrderService()
);