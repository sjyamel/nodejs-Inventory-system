import mongoose from "mongoose";
import Order from "../database/models/order.model";
// import mongoose from "mongoose";


export default class OrderService {
    async createOrder(orderBody: Partial<Order>){
        const order = await Order.create(orderBody);
        return order;
    }

    async getAllOrders(
        filter: Partial<Order>,
        options: {
            orderBy?: string;
            page?: string;
            limit?: string;
            populate?: string;
        } = {},
        ignorePagination = false

    ){
        const order = ignorePagination ? await Order.find(filter) : await Order.paginate(filter, options);
        return order;
    }

    async getOrderById(id:string): Promise<mongoose.Document & Order>{
        const order = await Order.findById(id);
        if (!order) new Error(`Order with id: ${id} not found`);
        return order;
    }
    async updateOrderById(id: string, updateBody: Partial<Order>): Promise<mongoose.Document & Order>{
        const order = await Order.findById(id);
        if(!order) throw new Error(`Order with id: ${id} not found`);
        Object.assign(order, updateBody);
        await order.save();
        return order;
    }

    async deleteOrderById(id:string):Promise<Order>{
        const order = await Order.findByIdAndDelete(id);
        return order;
    }
    async getOrderByUser(user:string): Promise<Order>{
        const order = await Order.findOne({user});
        return order;
    }
}