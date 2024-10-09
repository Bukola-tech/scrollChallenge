import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";


const BuksModule = buildModule("Buks", (m) => {

  const initialSupply = ethers.parseEther('1000000');

  const Buks = m.contract("Buks",[initialSupply]);

  return { Buks };
});

export default BuksModule;





//0xC7a14237ED47a60Cc7c9004f4225A60A25Ae61F9