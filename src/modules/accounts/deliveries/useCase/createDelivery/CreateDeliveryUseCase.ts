import { prisma } from "../../../../../database/prismaClient";

interface ICreateDelivery {
    item_name: string;
    id_client: string;
}

export class CreateDeliveryUseCase {
    async execute({ item_name, id_client }: ICreateDelivery) {
        if (!item_name) {
            throw new Error(`Missing item_name`);
        }

        if (!id_client) {
            throw new Error(`Missing id_client`);
        }

        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client,
            },
        });

        return delivery;
    }
}