"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const environment_1 = require("./environment");
const PORT = environment_1.default.getPort() || process.env.PORT || 8080;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
