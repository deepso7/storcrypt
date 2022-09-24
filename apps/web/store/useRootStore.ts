import create from 'zustand'
import createAddressSlice, { addressSlice } from './createUserSlice'

const useRootStore = create<addressSlice>()((...a) => ({
    ...createAddressSlice(...a),
}))

export default useRootStore;