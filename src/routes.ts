import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryMan } from "./middlewares/ensureAuthenticateDeliveryMan";

import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryController } from "./modules/deliveries/useCase/createDelivery/CreateDeliveryController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCase/createDeliveryMan/CreateDeliveryManController";
import { FindAllAvailableController } from "./modules/deliveries/useCase/findAllWithoutEndDate/FindAllWithoutEndDateController";
import { UpdateDeliveryManController } from "./modules/deliveries/useCase/upadteDeliveryMan/updateDeliveryManController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesContrller";
import { FindAllDeliveriesDeliveryManController } from "./modules//deliveryman/useCase/findAllDeliveries/FindAllDeliveriesDeliveryManController"
import { UpdateEndDateController } from "./modules/deliveries/useCase/updateEndAt/updateEndAtController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const deliveryController = new CreateDeliveryController();
const findAllDeliveriesClient = new FindAllDeliveriesController();


const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryManController = new UpdateDeliveryManController();
const updateEndDateController = new UpdateEndDateController();
const findAllDeliveriesDeliveryManController = new FindAllDeliveriesDeliveryManController();


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

routes.get("/client/deliveries", 
    ensureAuthenticateClient,  
    findAllDeliveriesClient.handle
);

routes.get("/deliveryman/deliveries", 
    ensureAuthenticateDeliveryMan, 
    findAllDeliveriesDeliveryManController.handle
);

routes.put("/delivery/updateEndDate/:id", 
    ensureAuthenticateDeliveryMan,
    updateEndDateController.handle
)

export { routes };