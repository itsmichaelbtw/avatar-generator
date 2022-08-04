export interface AvatarProperties {
    backgroundColor: string;
    color: string;
    fontSize: number;
    length: number;
    name: string;
    initials?: string;
    bold: string;
    uppercase: string;
    height: number;
    width: number;
}

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

export function buildSVG(properties: AvatarProperties): string {
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
                    style="font-family: 'Open Sans', sans-serif;font-size:${
                        properties.fontSize
                    }px;line-height:1;text-transform: ${properties.uppercase}">
                        ${properties.name.substring(0, properties.length)}
                </text>
        </svg>`;
}

export function randomBackgroundColor(): string {
    return BACKGROUND_COLORS[
        Math.floor(Math.random() * BACKGROUND_COLORS.length)
    ];
}

export function normalizeQuery(query: any): AvatarProperties {
    const getBackgroundColor = (): string => {
        if (query.backgroundColor) {
            return `#${query.backgroundColor}`;
        }

        return randomBackgroundColor();
    };

    const getColor = (): string => {
        if (query.color) {
            return query.color;
        }

        return DEFAULT_COLOR;
    };

    const getFontSize = (): number => {
        if (query.fontSize) {
            const fontSize = Number(query.fontSize);
            return fontSize < 16 ? 16 : fontSize;
        }

        return DEFAULT_FONTSIZE;
    };

    const getLength = (): number => {
        if (query.length) {
            const length = Math.round(Math.abs(Number(query.length)));
            return length > 0 ? length : DEFAULT_LENGTH;
        }

        return DEFAULT_LENGTH;
    };

    const getName = (): string => {
        if (query.initials) {
            return query.initials;
        }

        if (query.name) {
            return query.name;
        }

        return DEFAULT_NAME;
    };

    const getBoldness = (): string => {
        if (query.bold) {
            const isBold = query.bold === "true";
            if (isBold) {
                return "bold";
            }
        }

        return "normal";
    };

    const getUppercase = (): string => {
        if (query.uppercase) {
            const isUppercase = query.uppercase === "true";
            if (isUppercase) {
                return "uppercase";
            }
        }

        return "capitalize";
    };

    const getHeight = (): number => {
        if (query.height) {
            return Math.round(Math.abs(Number(query.height)));
        }

        return DEFAULT_HEIGHT;
    };

    const getWidth = (): number => {
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

export const port: number = 3000;
