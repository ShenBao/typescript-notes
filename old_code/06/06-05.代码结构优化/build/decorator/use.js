"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
