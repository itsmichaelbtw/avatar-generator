"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
const utils_1 = require("./utils");
const server = http_1.default.createServer((req, res) => {
    const query = url_1.default.parse(req.url || "", true).query;
    const svgProperties = (0, utils_1.normalizeQuery)(query);
    const svg = (0, utils_1.buildSVG)(svgProperties);
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(svg);
    res.end();
});
server.listen(utils_1.port, () => {
    console.log(`Server listening on port ${utils_1.port}`);
});
