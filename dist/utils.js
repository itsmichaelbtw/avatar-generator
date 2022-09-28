"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.normalizeQuery = exports.randomBackgroundColor = exports.buildSVG = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: ".env" });
const BACKGROUND_COLORS = [
    "#6200B3",
    "#FE5D26",
    "#37505C",
    "#FF6666",
    "#CCFF66",
    "#679436",
    "#011627",
    "#585481",
    "#6290C3",
    "#B497D6",
    "#846C5B",
    "#94C9A9",
    "#F7FF58",
    "#A5E6BA",
    "#7D7C84"
];
const DEFAULT_NAME = "Avatar";
const DEFAULT_HEIGHT = 260;
const DEFAULT_WIDTH = 260;
const DEFAULT_FONTSIZE = 90;
const DEFAULT_LENGTH = 3;
const DEFAULT_COLOR = "#FFF";
function buildSVG(properties) {
    return `
        <svg 
            style="font-weight: ${properties.bold};" 
            width="${properties.width}px" 
            height="${properties.height}px" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <style type="text/css">
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
                    </style>
                </defs>
                <rect 
                    x="0" 
                    y="0" 
                    width="${properties.width}px" 
                    height="${properties.height}px" 
                    style="fill: ${properties.backgroundColor};">
                </rect>
                <text 
                    x="50%" 
                    y="50%" 
                    dy=".1em" 
                    fill="${properties.color}" 
                    text-anchor="middle" 
                    dominant-baseline="middle" 
                    style="font-family: 'Open Sans', sans-serif;font-size:${properties.fontSize}px;line-height:1;text-transform: ${properties.uppercase}">
                        ${properties.name.substring(0, properties.length)}
                </text>
        </svg>`;
}
exports.buildSVG = buildSVG;
function randomBackgroundColor() {
    return BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
}
exports.randomBackgroundColor = randomBackgroundColor;
function normalizeQuery(query) {
    const getBackgroundColor = () => {
        if (query.backgroundColor) {
            return `#${query.backgroundColor}`;
        }
        return randomBackgroundColor();
    };
    const getColor = () => {
        if (query.color) {
            return query.color;
        }
        return DEFAULT_COLOR;
    };
    const getFontSize = () => {
        if (query.fontSize) {
            const fontSize = Number(query.fontSize);
            return fontSize < 16 ? 16 : fontSize;
        }
        return DEFAULT_FONTSIZE;
    };
    const getLength = () => {
        if (query.length) {
            const length = Math.round(Math.abs(Number(query.length)));
            return length > 0 ? length : DEFAULT_LENGTH;
        }
        return DEFAULT_LENGTH;
    };
    const getName = () => {
        if (query.initials) {
            return query.initials;
        }
        if (query.name) {
            return query.name;
        }
        return DEFAULT_NAME;
    };
    const getBoldness = () => {
        if (query.bold) {
            const isBold = query.bold === "true";
            if (isBold) {
                return "bold";
            }
        }
        return "normal";
    };
    const getUppercase = () => {
        if (query.uppercase) {
            const isUppercase = query.uppercase === "true";
            if (isUppercase) {
                return "uppercase";
            }
        }
        return "capitalize";
    };
    const getHeight = () => {
        if (query.height) {
            return Math.round(Math.abs(Number(query.height)));
        }
        return DEFAULT_HEIGHT;
    };
    const getWidth = () => {
        if (query.width) {
            return Math.round(Math.abs(Number(query.width)));
        }
        return DEFAULT_WIDTH;
    };
    return {
        backgroundColor: getBackgroundColor(),
        color: getColor(),
        fontSize: getFontSize(),
        length: getLength(),
        name: getName(),
        bold: getBoldness(),
        uppercase: getUppercase(),
        height: getHeight(),
        width: getWidth()
    };
}
exports.normalizeQuery = normalizeQuery;
exports.port = process.env.PORT || 3000;
