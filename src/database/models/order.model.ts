/* eslint-disable no-param-reassign */
import { Schema, model } from 'mongoose';
import paginate, { Pagination } from '../plugins/paginate.plugin';
import toJSON from '../plugins/toJson.plugin';
import { ORDER_STATUS } from '../../../config/constants';
import auditableFields from '../plugins/auditableFields.plugin';
import { Order } from '../../utils/index';

const orderSchema = new Schema<Order>(
  {
    user: {
      type: String,
      required: true,
      trim: false,
    },
    status: {
      type: String,
      enum: Object.values(ORDER_STATUS)
    },
    products: {
      type: Array,
      required: true
    },
    supplier: {
      type: String,
      required: true,
    },
    ...auditableFields,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

/**
 * @typedef User
 */
const Order: Pagination<Order> = model<Order, Pagination<Order>>(
  'Order',
  orderSchema
);

export default Order;
