"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putMaterial = void 0;
//import { fetch } from "cross-fetch"
const helpers_1 = require("../helpers");
const putMaterial = (baseURL, materialGUID) => {
    const url = `${baseURL}/api/v1/materials/${materialGUID}`;
    return (0, helpers_1.put)(url, 204);
};
exports.putMaterial = putMaterial;
