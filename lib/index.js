import { getRandomPos } from './functions.js'
import { CHARS } from './constants.js'

import {
    TypeMissmatch,
    SafeInteger,
} from './errors.js'

export default {
    async generate(options = { length: 15 }) {
        if (typeof options != 'object') throw new TypeMissmatch(typeof options, 'object')
        if (typeof options.length != 'number') throw new TypeMissmatch(typeof options.length, 'number')
        if (Number.isNaN(options.length)) throw new TypeMissmatch('NaN', 'number')
        if (options.length > Number.MAX_SAFE_INTEGER || options.length <= 0) throw new SafeInteger(options.length)
        if (!Number.isInteger(options.length)) throw new TypeMissmatch('float', 'number')

        let pwd = ''

        while (pwd.length < options.length) {
            const rndIndex = await getRandomPos(CHARS.length)

            pwd += CHARS[rndIndex]
        }

        return pwd
    },

    getEntropy(pwd) {
        let poolSize = 0

        if (/[a-z]/g.test(pwd)) poolSize += 26
        if (/[A-Z]/g.test(pwd)) poolSize += 26
        if (/[0-9]/g.test(pwd)) poolSize += 10
        if (/[^a-zA-Z]/g.test(pwd)) poolSize += 33

        return pwd.length * Math.log(poolSize) / Math.log(2)
    }
}