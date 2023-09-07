"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_models_1 = require("../4-models/error-models");
function routeNotFound(request, response, next) {
    var err = new error_models_1.RouteNotFoundErrorModel(request.originalUrl);
    next(err);
}
exports.default = routeNotFound;
