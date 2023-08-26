const crypto = require("crypto")
const chars = require("./chars.js")

module.exports = {
    getPoolSize(subject) {
        let poolSize = 0;

        if (/[a-z]/g.test(subject)) poolSize += 26;
        if (/[A-Z]/g.test(subject)) poolSize += 26;
        if (/[0-9]/g.test(subject)) poolSize += 10;
        if (/[^a-zA-Z]/g.test(subject)) poolSize += 33;

        return poolSize;
    },

    getRandomNumber() {
        const randomNumber = crypto.getRandomValues(new Uint32Array(1)) / 0x100000000;
        return ~~(randomNumber * chars.allChars.length);
  }
}