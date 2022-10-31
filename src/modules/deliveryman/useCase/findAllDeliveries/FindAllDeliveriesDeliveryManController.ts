import { Request, Response } from "express";
import { FindAllDeliveriesDeliveryManUseCase } from "./FindAllDeliveriesDeliveryManUseCase";

export class FindAllDeliveriesDeliveryManController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;

        const findAllDeliveriesDeliveryManUseCase = new FindAllDeliveriesDeliveryManUseCase();
        const deliveries = await findAllDeliveriesDeliveryManUseCase.execute(id_deliveryman);

        return response.json(deliveries);
    }
}