import express, {Express} from "express";

export class Application {
    private readonly server: Express;

    constructor() {
        this.server = express();
    }

    async run(port: number): Promise<void> {
        return new Promise((resolve: () => void) => {
            this.server.listen(port, function () {
                resolve();
            });
        }) as Promise<void>;
    }
}
