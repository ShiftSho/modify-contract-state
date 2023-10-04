const ethers = require('ethers');
require('dotenv').config();

async function main() {
  const url = process.env.GOERLI_URL;
  const artifacts = await hre.artifacts.readArtifact("ModifyVariable");
  const provider = new ethers.providers.JsonRpcProvider(url);
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // Assuming you've deployed the contract and have its address
  const contractAddress = "0xBAfF2B8AB624a2c3B36017cb27161b3aaA873B4f";
  const contract = new ethers.Contract(contractAddress, artifacts.abi, wallet);

  // Check the initial state of x
  console.log("Initial state of x:", await contract.x());

  const tx = await contract.modifyToLeet();
  const receipt = await tx.wait();
  console.log("Transaction status:", receipt.status); // 1 for success, 0 for failure

  console.log("State of x after calling modifyToLeet:", await contract.x());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });