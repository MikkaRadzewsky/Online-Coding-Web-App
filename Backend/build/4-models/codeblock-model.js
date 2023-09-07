"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeBlockModel = /** @class */ (function () {
    function CodeBlockModel(codeblock) {
        this.codeblockId = codeblock.codeblockId;
        this.name = codeblock.name;
        this.language = codeblock.language;
        this.code = codeblock.code;
    }
    return CodeBlockModel;
}());
exports.default = CodeBlockModel;
