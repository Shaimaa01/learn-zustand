import {create} from "zustand";
import createUserSlice from "./slices/CreateUserSlics";
import createPostslice from "./slices/CreatePostSlice"

const useStore = create((set,get) =>({
...createUserSlice(set,get),
...createPostslice(set,get),
}))

export default useStore  