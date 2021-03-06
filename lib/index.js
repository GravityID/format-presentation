"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const platform_express_1 = require("@tsed/platform-express");
const server_1 = require("./server");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        try {
            common_1.$log.debug("Start server...");
            const platform = yield platform_express_1.PlatformExpress.bootstrap(server_1.Server, {
            // extra settings
            });
            yield platform.listen();
            common_1.$log.debug("Server initialized");
        }
        catch (er) {
            common_1.$log.error(er);
        }
    });
}
bootstrap();
//# sourceMappingURL=index.js.map