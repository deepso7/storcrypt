/* eslint-disable turbo/no-undeclared-env-vars */
import { MessageStreamOnMessage, StreamrClient } from "streamr-client";
import tableland from "./Tableland";

class Streamr {
  private client: StreamrClient;

  constructor() {
    this.client = new StreamrClient({
      auth: {
        privateKey: process.env.ETH_PRIVATE_KEY,
      },
    });
  }

  async publish(streamId: string, data: any) {
    await this.client.publish(streamId, data);
  }

  async subscribe(streamId: string) {
    await this.client.subscribe(streamId, this.onMessage);
  }

  onMessage: MessageStreamOnMessage<any> = async (msg) => {
    console.log(msg);
    if (msg.type === "file-uploaded") {
      await tableland.insert(msg);
    }
  };
}

export default Streamr;
