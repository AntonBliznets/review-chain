import {Application} from "./application";
import {container} from "./inversify/container";
import {Types} from "./inversify/types";

const PORT = 3000;

container.get(Types.AuthorizationHttpEntry);

Application.server.listen(PORT, function () {
  console.log(`Run at port ${PORT}`);
});
