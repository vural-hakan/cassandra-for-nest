"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const cassandra_test_module_1 = require("./cassandra.test.module");
async function bootstrap() {
    const port = 30000;
    const app = await core_1.NestFactory.create(cassandra_test_module_1.default);
    await app.listen(port, () => console.log(`server listening on port :${port}`));
}
bootstrap();
//# sourceMappingURL=test.server.js.map