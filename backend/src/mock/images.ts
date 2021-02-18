import * as fs from "fs";
import * as path from "path";
import { ImageData } from "../core/types/ImageData";

export const IMAGES: { [key: string]: ImageData } = {};

const loadImage = (fileName: string): ImageData => {

    const imagePath = path.join(__dirname, "..", "..", "test-images", fileName);

    const name = path.basename(imagePath);
    const format = `image/${path.extname(imagePath)}`;

    const data = fs.readFileSync(imagePath);
    const size = data.byteLength;

    return {
        name,
        data,
        format,
        size
    };

}

export const mockImages = () => {

    const pizzaLogo = loadImage("store-logo.jpg");
    const pizzaIcon = loadImage("pizza-icon.png");
    const pizza = loadImage("pizza.png");

    IMAGES.LOGO = pizzaLogo;
    IMAGES.ICON = pizzaIcon;
    IMAGES.PIZZA = pizza;

}