import "isomorphic-fetch";
import { Wallet, providers } from "ethers";
import { connect } from "@tableland/sdk";

const privateKey = process.env.ETH_PRIVATE_KEY;

const wallet = new Wallet(privateKey);

const provider = new providers.AlchemyProvider(
  "maticmum",
  process.env.ALCHEMY_KEY
);

const signer = wallet.connect(provider);

const tableland = connect({
  signer,
  network: "testnet",
  chain: "polygon-mumbai",
});

export default tableland;

// (async () => {
// const { name } = await tableland.create(
//   `id integer primary key, name text`, // Table schema definition
//   {
//     prefix: `test_table`, // Optional `prefix` used to define a human-readable string
//   }
// );
// const writeRes = await tableland.write(
//   `INSERT INTO test_table_80001_2971 (id, name) VALUES (8, 'Bobby Tables');`
// );
// console.log({ writeRes });
// The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
// })();
