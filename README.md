# Passtix

[![Passtix NPM](https://nodei.co/npm/passtix.png?downloads=true&downloadRank=true)](http://npmjs.org/package/passtix)

> Passtix is a simple password generator.

## Install

```bash
$ npm install passtix --save
```

## Usage

#### `generate([options])`

Generate a password. It will returns a string.

```javascript
const passtix = require('passtix');

var password = passtix.generate({
	length: 15
})

// "wE(20h>oGmwhN,m"
console.log(password);
```

#### `getEntropy(password)`

Calculates the amount of entropy of a password based on the following formula:
`E = L × log(R) / log(2)`
`L` - Password length
`R` - Size of the pool of unique characters

```javascript
const passtix = require('passtix');

var entropyLevel = passtix.getEntropy("wE(20h>oGmwhN,m")

// 99
console.log(entropyLevel)
```
It will returns a integer number.

### Available options
Any of these can be passed into the options object for each function.

| Name                     | Description                                                           | Default Value |
|--------------------------|-----------------------------------------------------------------------|---------------|
| length                   | Integer, length of password.                                          | 15            |

