import create from "zustand";
import createAddressSlice, { addressSlice } from "./createUserSlice";

const useStore = create<addressSlice>()((...a) => ({
  ...createAddressSlice(...a),
}));

const { getState } = useStore;

export { getState };
export default useStore;
