import "isomorphic-fetch";
import { Wallet, providers } from "ethers";
import { connect, Connection, resultsToObjects } from "@tableland/sdk";
import { nanoid } from "nanoid";

class Tableland {
  tableland: Connection;
  private provider: providers.AlchemyProvider;
  private signer: Wallet;
  private wallet: Wallet;

  constructor() {
    const privateKey = process.env.ETH_PRIVATE_KEY;
    this.wallet = new Wallet(privateKey);
    this.provider = new providers.AlchemyProvider(
      "maticmum",
      process.env.ALCHEMY_KEY
    );
    this.signer = this.wallet.connect(this.provider);

    this.tableland = connect({
      signer: this.signer,
      network: "testnet",
      chain: "polygon-mumbai",
    });
  }

  async createTable(prefix: string) {
    const data = await this.tableland.create(
      `
      id integer primary key, 
      address text,
      cid text,
      encryptedKey text,
      filename text,
      size integer
    `,
      {
        prefix,
      }
    );

    return data;
  }

  async insert(data: InsertData) {
    const id = nanoid();
    try {
      const res = await this.tableland.write(
        `
          INSERT INTO ${process.env.TABLE_NAME} (id, address, cid, encryptedKey, filename, size) 
          VALUES (${id}, ${data.address}, ${data.cid}, ${data.encryptedKey}, ${data.filename}, ${data.size});
        `
      );

      return res;
    } catch (err) {
      console.error(err);
      return;
    }
  }

  async read(address: string) {
    try {
      const results = await this.tableland.read(
        `SELECT * FROM ${process.env.TABLE_NAME} WHERE address = ${address};`
      );
      const entries = resultsToObjects(results);

      return entries;
    } catch (err) {
      console.error(err);
      return;
    }
  }
}

export default new Tableland();

type InsertData = {
  address: string;
  cid: string;
  encryptedKey: string;
  filename: string;
  size: number;
};
