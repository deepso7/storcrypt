import crypto from "crypto";

type Config = {
  algorithm?: string;
};

class Encryptor {
  algorithm: string;

  constructor(config: Config = {}) {
    this.algorithm = config.algorithm || "aes-256-ctr";
  }

  encrypt(buffer: Buffer, secret: string) {
    const key = crypto
      .createHash("sha256")
      .update(secret)
      .digest("base64")
      .substring(0, 32);
    // Create an initialization vector
    const iv = crypto.randomBytes(16);

    // Create a new cipher using the algorithm, key, and iv
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    // Create the new (encrypted) buffer
    const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);

    return result;
  }

  decrypt(encrypted: Buffer, key: string) {
    // Get the iv: the first 16 bytes
    const iv = encrypted.slice(0, 16);

    // Get the rest
    encrypted = encrypted.slice(16);

    // Create a decipher
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    // Actually decrypt it
    const result = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);

    return result;
  }
}

export default Encryptor;
