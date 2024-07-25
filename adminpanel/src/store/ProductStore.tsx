import {create} from "zustand"
import pdata from "../MOCK_DATA (1).json"


// const data= useMemo(()=>pdata,[])
export const useProductStore= create((set)=>({
   
    posts:pdata,
   
    addPost:(newPost)=>{
        set((state)=>{
            return {posts:[...state.posts,newPost]}
        })
    }
}))