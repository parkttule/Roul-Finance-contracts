import { ethers } from "hardhat";

function getRandomNumber(): number[] {

    let randomNumbers: number[] = [];

    for (let i = 0; i < 7; i++) {
        randomNumbers.push(Math.floor(Math.random() * 20) + 1);
    }

    return randomNumbers;
}

async function main() {
    const [owner, user] = await ethers.getSigners();
    const rouleToken = (await ethers.deployContract("RouleFiToken")).connect(owner);
    const rouleTokenAddress = await rouleToken.getAddress();

    console.log("RouleFiToken Address: ", rouleTokenAddress);

    const Roulefinance = (await ethers.deployContract("Roulefinance", [rouleTokenAddress])).connect(owner);
    const RoulefinanceAddress = await Roulefinance.getAddress();

    console.log("RouleFinance Address: ", RoulefinanceAddress);

    await rouleToken.connect(owner).initialize(RoulefinanceAddress);

    await rouleToken.connect(user).faucet();
    await Roulefinance.connect(owner).mint();

    console.log("user balance: ", await rouleToken.connect(user).balanceOf(user.address));
    console.log("TVL  balance: ", await rouleToken.connect(owner).balanceOf(RoulefinanceAddress));

    for (let i=0; i < 1000; i++) {
        await Roulefinance.connect(user).buy(100, getRandomNumber());
        await Roulefinance.connect(user).claim();
        console.log(await rouleToken.connect(user).balanceOf(user.address));
    }    

    console.log("user balance: ", await rouleToken.connect(user).balanceOf(user.address));
    console.log("TVL  balance: ", await rouleToken.connect(owner).balanceOf(RoulefinanceAddress));

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})