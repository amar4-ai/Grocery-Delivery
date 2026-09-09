import express from 'express'
import { cancelDelivery, completeDelivery, getDeliveryDetail, getMyDeliveries, loginPartner, udpateLocation, updateDeliveryStatus } from '../controllers/deliveryPartnerController.js';
import deliveryAuth from '../middleware/deliveryAuth.js';


const deliveryPartnerRouter = express.Router();


deliveryPartnerRouter.post('/login', loginPartner)
deliveryPartnerRouter.get('/my-deliveries', deliveryAuth, getMyDeliveries)
deliveryPartnerRouter.get('/my-deliveries/:id', deliveryAuth, getDeliveryDetail)
deliveryPartnerRouter.get('/my-deliveries/:id/complete', deliveryAuth, completeDelivery)
deliveryPartnerRouter.get('/my-deliveries/:id/cancel', deliveryAuth, cancelDelivery)
deliveryPartnerRouter.get('/my-deliveries/:id/status', deliveryAuth, updateDeliveryStatus)
deliveryPartnerRouter.get('/my-deliveries/:id/location', deliveryAuth, udpateLocation)

export default deliveryPartnerRouter;