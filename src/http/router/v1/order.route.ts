import { Router } from "express";
import { isUserAuthenticated } from "../../middlewares/auth.middleware";
import { orderController } from "../../controllers/controllers.module";

// 04191038902
const route = Router();

route.
    route('/')
    .get(isUserAuthenticated, (req, res, next)=>{
        orderController.getAllOrders(req, res, next);
    }).post(isUserAuthenticated, (req, res, next)=>{
        orderController.createOrder(req, res, next);
    });

route.
    route('/<id>')
    .get(isUserAuthenticated, (req, res, next)=>{
        orderController.getOrderById(req, res, next)
    })


export default route;