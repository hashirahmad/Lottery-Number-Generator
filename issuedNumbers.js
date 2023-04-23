const path = require('path')
const jsonfile = require('jsonfile')
const issuedNumbersFileName = path.join(__dirname, './issuedNumbers.json')

/**
 * This will read the current list of issued lottery numbers
 * from the file.
 */
async function getIssuedNumbers() {
    const issuedNumbers = Array.from(await jsonfile.readFile(issuedNumbersFileName))
    return issuedNumbers
}

/**
 * This will check if the new number that is generated already
 * issued previously.
 */
async function isNumberAlreadyIssued({ number }) {
    const issuedNumbers = await getIssuedNumbers()
    const alreadyIssued = issuedNumbers.includes(number)
    return alreadyIssued
}

/**
 * This will update the issued lottery numbers list so that we
 * do not ever issue 2 or more same lottery numbers.
 */
async function updateIssuedNumbers({ number }) {
    const issuedNumbers = await getIssuedNumbers()
    issuedNumbers.push(number)
    await jsonfile.writeFile(issuedNumbersFileName, issuedNumbers, { spaces: 4 })
}

module.exports = { isNumberAlreadyIssued, updateIssuedNumbers }