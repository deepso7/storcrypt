import { Web3Storage } from "web3.storage";

const web3Storage = new Web3Storage({
  token: process.env.WEB3_STORAGE_TOKEN,
});

export default web3Storage;
