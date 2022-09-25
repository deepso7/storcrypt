import { StateCreator } from "zustand";

export interface addressSlice {
  address: string;
  loggenIn: boolean;
  did: string;
  setAddress: (arg: string) => void;
  setLogIn: (arg: boolean) => void;
  setDid: (did: string) => void;
}

const createAddressSlice: StateCreator<addressSlice, [], [], addressSlice> = (
  set
) => ({
  address: "",
  loggenIn: false,
  did: "",
  setDid: (did: string) => set((state) => ({ did: did })),
  setAddress: (add: string) => set((state) => ({ address: add })),
  setLogIn: (log: boolean) => set((state) => ({ loggenIn: log })),
});

export default createAddressSlice;
