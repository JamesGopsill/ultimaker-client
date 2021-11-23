"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceUser = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSourceUser = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/print_job/source_user");
};
exports.getSourceUser = getSourceUser;
