import { ethers } from "hardhat";

async function interaction(){
  // const name = "Segun Olawale";
  const [contractOwner, signer1] = await ethers.getSigners();

  const Web3CXIContractAddress = "0xa36aF98D45206815055A306B9e1DE20D9B83AbCE";

  const Web3CXI = await ethers.getContractAt("IWeb3CXI", Web3CXIContractAddress);

  // Web3CXI.waitForDeployment();
  console.log(
    "The bal in Contract is: ",
    await ethers.provider.getBalance(Web3CXIContractAddress)
  );

  console.log("Wallet is drained: ", await Web3CXI.drained());

  // await Web3CXI.deposit(contractOwner, 1659, {
  //     value: ethers.parseEther("0.0000000000000001"),
  //  });


  console.log("bal : ", await Web3CXI.viewDeposit(contractOwner.address));



  await Web3CXI.connect(contractOwner).rescueFunds();

  console.log(
    "contract bal: ",
    await ethers.provider.getBalance(Web3CXI)
  );

  console.log("is drained: ", await Web3CXI.drained());
  // const amount = ethers.parseEther("0.001");

  // const Web3CXI = await ethers.getContractAt("IWeb3CXI", Web3CXIContractAddress);

  // Web3CXI.waitForDeployment();

  // console.log(Web3CXI);

  


  // Web3CXI.transferOwnership(0xd46F1cE35b1bDF23F0DE3f4AC66928752578a707)
  
  // const trasferTo = "0xd46F1cE35b1bDF23F0DE3f4AC66928752578a707";
  // const addressTo = "0x9f67FDb03373f41ff3e25f5EbAC4C2Df8d3d5007";
  // Web3CXI.transferOwnership(addressTo);
  // Web3CXI.deposit(addressTo, amount);
  // Web3CXI.rescueFunds();




}

interaction()