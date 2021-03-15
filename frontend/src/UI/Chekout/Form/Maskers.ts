import { TextFieldMasker } from "../../Form/TextFieldMasker";

export class LengthMasker implements TextFieldMasker {
    constructor(
        private readonly maxLength: number
    ){}

    applyMask(value: string): string {
        return value.substr(0, this.maxLength);
    }
}

export class PatternMasker implements TextFieldMasker {
    constructor(
        private readonly pattern: string
    ) {}

    applyMask(value: string) {
        let masked = "";

        let valueI = 0;
        let patternI = 0;

        while(patternI < this.pattern.length && valueI < value.length) {
            const p = this.pattern[patternI];
            const v = value[valueI];
            if(p === '0') {
                valueI++;
                if(!(/[\d]/.test(v))) {
                    continue;
                }
                masked += v;
            } else if(p === 'c') {
                valueI++;
                if(!(/[\w]/.test(v))) {
                    continue;
                }
                masked += v;
            } else if(p == v){
                masked += p;
                valueI++;
            } else {
                masked += p;
            }
            patternI++;
        }

        return masked;
    }
}

export class DDDMasker extends PatternMasker {
    constructor() { super("00"); }
}

export class PhoneMasker extends PatternMasker {
    constructor() { super("00000-0000"); }
}

export class CPFMasker extends PatternMasker {
    constructor() { super("000.000.000-00"); } 
}

export class CEPMasker extends PatternMasker {
    constructor() { super("00000-000"); }
}

export class CardNumberMasker extends PatternMasker {
    constructor() { super("0000 0000 0000 0000"); }
}

export class CardHolderMasker implements TextFieldMasker {
    applyMask(value: string) {
        value = value.replaceAll(/[^a-zA-Z ]/g, '');
        value = value.replaceAll(/[ ]+/g, " ")
        return value.toUpperCase();
    }
}

export class CVVMasker extends PatternMasker {
    constructor() { super("000"); }
}

export class ExpireDateMasker extends PatternMasker {
    constructor() { super("00/00"); }
}