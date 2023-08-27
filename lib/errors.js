export class TypeMissmatch extends Error {
    constructor (type, expected) {
        super(`Expected type ${expected} got ${type}`)
    }
}

export class SafeInteger extends Error {
    constructor (number) {
        super(`Number can't be greater than ${Number.MAX_SAFE_INTEGER} got ${number}`)
    }
}
