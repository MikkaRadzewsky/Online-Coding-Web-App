"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app_config_1 = __importDefault(require("../src/2-utils/app-config"));
var catch_all_1 = __importDefault(require("../src/3-middleware/catch-all"));
var controller_1 = __importDefault(require("../src/6-controllers/controller"));
// import cookieParser from "cookie-parser";
var path_1 = __importDefault(require("path"));
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use("/api", controller_1.default);
// server.use("*", routeNotFound);
server.use(catch_all_1.default);
var REACT_BUILD_FOLDER = "../../Frontend/build";
server.use(express_1.default.static(path_1.default.resolve(__dirname, REACT_BUILD_FOLDER)));
// server.use(cookieParser());
// add user roles through cookies
server.listen(app_config_1.default.port, function () {
    return console.log("Listening on http://localhost:".concat(app_config_1.default.port));
});
server.get("*", function (req, res) {
    // Any non react endpoint will reach here
    res.sendFile(path_1.default.resolve(__dirname, REACT_BUILD_FOLDER, "index.html"));
});
