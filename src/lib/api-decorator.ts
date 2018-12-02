import {Request, Response} from "express";
import {Application} from "../application";
import {Entry} from "../entries/abstract/entry";
import {Middleware} from "../middleware/abstract";
import {container} from "../inversify/middleware-container";

export enum HttpMethod {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete",
}

export function api(method: HttpMethod, url: string, middleware: Array<symbol> = []) {
    return function (target: Entry, propertyKey: string, descriptor: any) {
        const origin = descriptor.value;

        descriptor.value = async function (req: Request, res: Response) {
            let result;

            try {
                result = await origin.apply(target.instance(), [req, res]);
            } catch (err) {
                console.error(err);
            }

            return res.status(200).json(result);
        };

        bindToRoute(method, url, middleware, descriptor.value);

        return descriptor;
    };
}

function bindToRoute(method: HttpMethod, url: string, middleware: Array<symbol>, handler: () => void) {
    const temp = [];

    for (const type of middleware) {
        const instance = container.get<Middleware>(type);

        temp.push(instance.middleware.bind(instance));
    }

    (Application.server as any)[method](url, [...temp, handler]);
}
