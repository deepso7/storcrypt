import "isomorphic-fetch";
import { Wallet, providers } from "ethers";
import { connect, Connection, resultsToObjects } from "@tableland/sdk";
import { z } from "zod";

const insertValidator = z.object({
  address: z.string(),
  cid: z.string(),
  encryptedKey: z.string(),
  filename: z.string(),
  size: z.number(),
});

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

  async insert(data: any) {
    try {
      const d = insertValidator.parse(data);

      const res = await this.tableland.write(
        `
          INSERT INTO ${process.env.TABLE_NAME} (address, cid, encryptedKey, filename, size) 
          VALUES ('${d.address}', '${d.cid}', '${d.encryptedKey}', '${d.filename}', '${d.size}');
        `
      );

      console.log({ res });

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
