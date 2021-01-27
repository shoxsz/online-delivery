export class ObjectHelper {

    static copyFields<T>(object: T, partial: Partial<T>, fields: (keyof T)[]) {

        fields.forEach(field => {

            if(field in partial && typeof partial[field] !== "undefined") {
                object[field] = partial[field];
            }

        });

    }

    static merge<T, O>(object: T, other: O): T | O {

        return {
            ...object,
            ...other
        };

    }

    static appendPrefix<T>(object: T, prefix: string) {

        const newObj: any = {};
        const keys = Object.keys(object);

        keys.forEach(key => {
            newObj[`${prefix}${key}`] = object[key];
        });

        return newObj;

    }

}