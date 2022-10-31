import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryMan } from "./middlewares/ensureAuthenticateDeliveryMan";

import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryController } from "./modules/deliveries/useCase/createDelivery/CreateDeliveryController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCase/createDeliveryMan/CreateDeliveryManController";
import { FindAllAvailableController } from "./modules/deliveries/useCase/findAllWithoutEndDate/FindAllWithoutEndDateController";
import { UpdateDeliveryManController } from "./modules/deliveries/useCase/upadteDelivery/updateDeliveryManController";

const routes = Router();
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryManController = new UpdateDeliveryManController();

routes.post("/client", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/delivery", 
    ensureAuthenticateClient, 
    deliveryController.handle
);


routes.post("/deliveryman", createDeliveryManController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.get("/delivery/avaliable", 
    ensureAuthenticateDeliveryMan, 
    findAllAvailableController.handle
);

routes.put("/delivery/updateDeliveryman/:id", 
    ensureAuthenticateDeliveryMan,
    updateDeliveryManController.handle
)
export { routes };