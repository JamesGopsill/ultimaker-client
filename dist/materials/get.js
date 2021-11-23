"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterials = exports.getMaterial = void 0;
const helpers_1 = require("../helpers");
const getMaterial = (baseURL, materialGUID) => {
    const url = baseURL + "/api/v1/materials/" + materialGUID;
    return (0, helpers_1.get)(url);
};
exports.getMaterial = getMaterial;
const getMaterials = (baseURL) => {
    const url = baseURL + "/api/v1/materials";
    return (0, helpers_1.get)(url);
};
exports.getMaterials = getMaterials;
