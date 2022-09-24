import { StateCreator } from "zustand";

export interface addressSlice {
  address: string;
  loggenIn: boolean;
  did: string;
  setAddress: (arg: string) => void;
  setLogIn: () => void;
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
  setLogIn: () => set((state) => ({ loggenIn: !state.loggenIn })),
});

export default createAddressSlice;
