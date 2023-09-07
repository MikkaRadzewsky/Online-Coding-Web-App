"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedErrorModel = exports.ValidationErrorModel = exports.ResourceNotFoundErrorModel = exports.RouteNotFoundErrorModel = exports.ErrorModel = void 0;
var ErrorModel = /** @class */ (function () {
    function ErrorModel(message, status) {
        this.message = message;
        this.status = status;
    }
    return ErrorModel;
}());
exports.ErrorModel = ErrorModel;
var RouteNotFoundErrorModel = /** @class */ (function (_super) {
    __extends(RouteNotFoundErrorModel, _super);
    function RouteNotFoundErrorModel(route) {
        return _super.call(this, "Route ".concat(route, " not exist"), 404) || this;
    }
    return RouteNotFoundErrorModel;
}(ErrorModel));
exports.RouteNotFoundErrorModel = RouteNotFoundErrorModel;
var ResourceNotFoundErrorModel = /** @class */ (function (_super) {
    __extends(ResourceNotFoundErrorModel, _super);
    function ResourceNotFoundErrorModel(id) {
        return _super.call(this, "id ".concat(id, " not exist"), 404) || this;
    }
    return ResourceNotFoundErrorModel;
}(ErrorModel));
exports.ResourceNotFoundErrorModel = ResourceNotFoundErrorModel;
var ValidationErrorModel = /** @class */ (function (_super) {
    __extends(ValidationErrorModel, _super);
    function ValidationErrorModel(message) {
        return _super.call(this, message, 400) || this;
    }
    return ValidationErrorModel;
}(ErrorModel));
exports.ValidationErrorModel = ValidationErrorModel;
var UnauthorizedErrorModel = /** @class */ (function (_super) {
    __extends(UnauthorizedErrorModel, _super);
    function UnauthorizedErrorModel(message) {
        return _super.call(this, message, 401) || this;
    }
    return UnauthorizedErrorModel;
}(ErrorModel));
exports.UnauthorizedErrorModel = UnauthorizedErrorModel;
