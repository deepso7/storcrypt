/* eslint-disable turbo/no-undeclared-env-vars */
import { MessageStreamOnMessage, StreamrClient } from "streamr-client";

class Streamr {
  private client: StreamrClient;
  private streamId: string;

  constructor() {
    this.client = new StreamrClient({
      auth: {
        privateKey: process.env.ETH_PRIVATE_KEY,
      },
    });

    this.streamId = "0xd319649206db744a01b90a6bac53cdeefb787fd4/storcrypt";
    this.client.subscribe(this.streamId, this.onMessage);

    this.publish({ hi: "hey" });
  }

  async publish(data: any) {
    await this.client.publish(this.streamId, data);
  }

  onMessage: MessageStreamOnMessage<any> = (msg) => {
    console.log("msg recieved", { msg });
  };
}

export default Streamr;
