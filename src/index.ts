import {Application} from "./application";

const PORT = 3000;

const application = new Application();


application.run(PORT)
    .then(() => console.log(`Run at port ${PORT}`));