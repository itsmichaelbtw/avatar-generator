"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.redirect("/avatar.svg");
});
app.get("/avatar.(svg|png)", (req, res) => {
    const svgProperties = (0, utils_1.normalizeQuery)(req.query);
    const svg = (0, utils_1.buildSVG)(svgProperties);
    res.set("Content-Type", "image/svg+xml");
    res.send(svg);
});
app.use("/", (req, res) => {
    res.redirect("/avatar.svg");
});
app.listen(utils_1.port, () => {
    console.log(`Running on port ${utils_1.port}`);
});
