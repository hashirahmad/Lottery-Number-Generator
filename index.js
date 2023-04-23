const { getLotteryNumber, showVisually } = require("./generateLotteryNumber");

async function main() {
    const lotteryNumbers = await getLotteryNumber()
    showVisually({ lotteryNumbers })
}

main()