const chars = require("./chars.js")
const { getPoolSize, getRandomNumber } = require("./util.js")

module.exports = {
    generate(options = { length: 15 }) {
        if (!(typeof options == 'object')) options = { length: 15 }
        if (!options.length) options.length = 15

        let pwd = ''

        for (var i = 0; i < options.length; i++) {
            pwd += chars.allChars[getRandomNumber()]
        }
        
        return pwd
    },

    entropy(password) {
        return Math.round(password.length * Math.log(getPoolSize(password)) / Math.log(2))
    }
}