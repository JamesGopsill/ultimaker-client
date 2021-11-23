"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterial = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getMaterial = (baseURL, materialGUID) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/materials/" + materialGUID);
};
exports.getMaterial = getMaterial;
