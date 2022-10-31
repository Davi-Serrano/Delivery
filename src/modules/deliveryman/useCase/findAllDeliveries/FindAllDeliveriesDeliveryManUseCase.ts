import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliveryManUseCase {
    async execute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryman.findFirst({
            where: {
                id: id_deliveryman
            },
            select: {
                deliveries: true,
                id: true,
                username: true,
            },
        });

        return deliveries;
    }
}