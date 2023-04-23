const crypto = require('crypto');
const { isNumberAlreadyIssued, updateIssuedNumbers } = require('./issuedNumbers');
const minimumRandomNumber = 1
const maximumRandomNumber = 49
const maximumLotteryNumbers = 6

/**
 * This will get a secure random number within given range
 */
function getRandomNumber({ min, max }) {
    const number = crypto.randomInt(min, max)
    return number
}

/**
 * This will get min/max range of number to pass to `getRandomNumber`. The
 * idea is to get a random number within such boundaries so that natural order
 * of random number can be maintained and 0 chances of duplicates.
 */
function getNumberRangeAccordingToIteration({ iteration }) {
    const minRange = (maximumRandomNumber / maximumLotteryNumbers) * (iteration - 1) || minimumRandomNumber
    const maxRange = (maximumRandomNumber / maximumLotteryNumbers) * iteration
    return { min: parseInt(minRange), max: parseInt(maxRange) }
}

/**
 * It will generate a lottery number as an array of numbers.
 */
function generateLotteryNumber() {
    const lotteryNumbers = []
    for (let i = 0; i < maximumLotteryNumbers; i += 1) {
        const numberRange = getNumberRangeAccordingToIteration({ iteration: i + 1 })
        const randomNumber = getRandomNumber({
            min: numberRange.min,
            max: numberRange.max
        })
        lotteryNumbers.push(randomNumber)
    }
    return lotteryNumbers
}

/**
 * This will generate a lottery number and enure that all numbers are
 * unique and not previously issued.
 */
async function getLotteryNumber() {
    const lotteryNumber = generateLotteryNumber()
    const uniqueLotteryNumbers = [...new Set(lotteryNumber)]
    const alreadyIssued = await isNumberAlreadyIssued({ number: lotteryNumber })
    if (uniqueLotteryNumbers.length === maximumLotteryNumbers && !alreadyIssued) {
        await updateIssuedNumbers({ number: parseInt(lotteryNumber.join('')) })
        return lotteryNumber
    }
    await getLotteryNumber()
}

/**
 * Attempts to show lottery numbers in visually appealing way. Or
 * it can be enhanced later on.
 */
function showVisually({ lotteryNumbers = []}) {
    console.log('='.repeat(50))
    console.log('='.repeat(40))
    console.log('='.repeat(30))
    console.log('\n')
    console.log('Your lottery number is:  ', lotteryNumbers.join('   '))
    console.log('\n')
    console.log('='.repeat(30))
    console.log('='.repeat(40))
    console.log('='.repeat(50))
}

module.exports = { getLotteryNumber, showVisually }

