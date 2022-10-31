import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryMan {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateDeliveryManUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryMan) {
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery,
            },
            data: {
                id_deliveryman,
            },
        });

        return result;
    }
}