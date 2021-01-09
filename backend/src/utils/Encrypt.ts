import * as crypto from "crypto";

export class Encrypt {

    static randomHex128() {
        return crypto.randomBytes(128).toString("hex");
    }

    static randomHex(size: number) {
        return crypto.randomBytes(16).toString("hex");
    }

    static encrypt(data: string, salt?: string) {

        salt = salt || Encrypt.randomHex128();

        return crypto
        .pbkdf2Sync(data, salt, 10000, 512, "sha512")
        .toString("hex");
    }

    static testEncription(salt: string, encripted: string, testData: string){
        return Encrypt.encrypt(testData, salt) === encripted;
    }

}