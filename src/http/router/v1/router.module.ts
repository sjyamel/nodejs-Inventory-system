import { Router } from 'express';
import authRoute from './auth.route';
import orderRoute from './order.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/order', route: orderRoute}
];

defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
