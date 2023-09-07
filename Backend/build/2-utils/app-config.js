"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        // Database:
        this.host = "localhost"; // Computer name/address of our database
        this.user = "root"; // Database user
        this.password = ""; // Database password
        this.database = "codeblocksProject"; // Database name
        // Server port:
        this.port = 3001;
    }
    return AppConfig;
}());
var appConfig = new AppConfig();
exports.default = appConfig;
