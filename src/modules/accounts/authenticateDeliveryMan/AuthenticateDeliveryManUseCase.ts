import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if (!deliveryman) {
            throw new Error("Username or password invalid!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }

        const token = sign({ username }, "0374914fbc6d5854c6cdcb2c6d3e66a1", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token;
    }
}