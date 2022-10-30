import { Router } from "express";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

routes.post("/client", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/delivery/authenticate", authenticateDeliverymanController.handle);

export { routes };