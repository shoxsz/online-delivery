import { config } from "dotenv";

const result = config();

if(result.error) {
    throw Error("Failed to load .env file!");
} else {
    console.log("LOADED .env");
}