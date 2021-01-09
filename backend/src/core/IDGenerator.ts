import { v4 } from "uuid"

export type IDGeneratorOptions = {

    prefix?: string;
    suffix?: string;
    allowSpecialCharacters?: boolean;

}

export class IDGenerator {

    static generate(options: IDGeneratorOptions = { }) {

        let id = v4();

        if(!options.allowSpecialCharacters) {
            id = id.replace(/[^a-zA-Z0-9]/g, "");
        }

        if(options.prefix) {
            id = `${options.prefix}${id}`;  
        }
  
        if(options.suffix) {
            id = `${id}${options.suffix}`;
        }

        return id;

    }

}