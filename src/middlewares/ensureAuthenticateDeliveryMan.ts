import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateDeliveryMan(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token is not provided",
        });
    }

    const [_, token] = authHeader?.split(" ");

    try {
        const { sub } = verify(token, "0374914fbc6d5854c6cdcb2c6d3e66a1");

        if (!sub) {
            return response.status(401).json({
                message: "Invalid Token",
            });
        }

        if (typeof sub !== "string") {
            return response.status(401).json({
                message: "Invalid Token",
            });
        }

        request.id_deliveryman = sub;

        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Invalid Token",
        });
    }
}