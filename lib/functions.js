import { promisify } from 'util'
import { randomBytes } from 'crypto'

const randomBytesAsync = promisify(randomBytes)

function getBytesFrom (tmp) {
    let bits = 0
    let bytes = 0
    let mask = 1

    while (tmp > 0) {
        if (bits % 8 === 0) bytes++
        bits++
        mask = mask << 1 | 1

        tmp >>>= 1
    }

    return {
        bytes,
        mask
    }
}

export async function getRandomPos (length) {
    const {
        bytes,
        mask
    } = getBytesFrom(length)
    const rndBytes = await randomBytesAsync(bytes)

    let rndValue = 0

    for (let index = 0; index < bytes; index++) {
        rndValue |= rndBytes[index] << 8 * index
    }

    rndValue &= mask

    if (rndValue <= length) {
        return rndValue
    } else {
        return getRandomPos(length)
    }
}
