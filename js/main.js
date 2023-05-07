const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let randText = ''

    for (let i = 0; i < length; i++) {
        randText += characters[Math.floor(Math.random() * characters.length)]
    }
    return randText
}

const key = generateKey(16, characters);
console.log(key);