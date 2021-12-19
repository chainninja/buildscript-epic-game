

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Yinmuhuadao", "Liuchuanfeng", "Sanjin"],       // Names
    ["https://ipfs.io/ipfs/QmaM9kau1BxQVe2LZUEcJT2HrnABxPzvf9Cso1HELC5zZe", // Images
    "https://ipfs.io/ipfs/QmQSHZgLN42yMpy8SMg4pyatvyvrUHKiBwkUPxQyFDTE7v", 
    "https://ipfs.io/ipfs/Qmecjaxiy6BKyg6PesLphxAE8Lj1rgy5qnrx7UcQMDrsSt"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],
    "Chimigangxian", // Boss name
    "https://ipfs.io/ipfs/QmR7e5R21VHZXdTHS5YmBMmsvegAx6TNBnyEFMp5W8JKGd", // Boss image
    10000, // Boss hp
    50 // Boss attack damage                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  
  // let txn;
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // // // Get the value of the NFT's URI.
  // const returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
  
  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();
  // // // Get the value of the NFT's URI.
  // const returnedTokenUri2 = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri2);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch(error) {
    console.log(error);
    process.exit(1)
  }
}

runMain();