type Options = {
    lowercase?: boolean;
    uppercase?: boolean;
    numbers?: boolean;
    symbols?: boolean;
    length?: number;
}

export default class Password {
    lowercase: string;
    uppercase: string;
    numbers: string;
    symbols: string;
    length: number;

    constructor(options: Options = {}) {
        this.lowercase = options.lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
        this.uppercase = options.uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
        this.numbers = options.numbers ? "0123456789" : "";
        this.symbols = options.symbols ? "#$%&'()*+,-./:;<=>?@[^_`{|}~" : "";
        this.length = options.length || 12;
    }

    getOptionLength(): number {

        let counter = 0;

        this.lowercase && counter++
        this.uppercase && counter++
        this.numbers && counter++
        this.symbols && counter++

        return counter;
    }

    generate(): string {
        let password = "";
        const characters = this.lowercase + this.uppercase + this.numbers + this.symbols;

        if (!characters) {
            throw new Error("No characters selected for password generation");
        }

        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }
}