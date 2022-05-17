"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSON = exports.lerJson = void 0;
const fs_1 = __importDefault(require("fs"));
const lerJson = (pathFile) => {
    // @ts-ignore
    return JSON.parse(fs_1.default.readFileSync(pathFile));
};
exports.lerJson = lerJson;
const writeJSON = (pathFile, data) => {
    fs_1.default.writeFileSync(pathFile, JSON.stringify(data));
};
exports.writeJSON = writeJSON;
