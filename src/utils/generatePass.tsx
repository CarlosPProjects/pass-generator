const symbols = "#$%&'()*+,-./:;<=>?@[^_`{|}~";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

export const arrChars = [symbols, uppercase, lowercase, numbers] as Options[];

interface Options {
    symbols?: string;
    uppercase?: string;
    lowercase?: string;
    numbers?: string;
}

interface Props {
    characters: Options[];
    length: number;
}

export const generatePassword = ({ characters, length }: Props): string => {
    let password = "";

    console.log(characters)

    characters.map((str) => {
        if (str && str.uppercase) {
            for (let i = 0; i < length; i++) {
                password += str.uppercase.charAt(Math.floor(Math.random() * str.uppercase.length));

                console.log(password)
            }
        }
        console.log(str)
    })

    return password;
}

// const removeUppercase = (arr : string[]) => {

// }