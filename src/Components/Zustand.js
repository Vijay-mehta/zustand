import  { create } from 'zustand'
import {devtools,persist} from 'zustand/middleware'

const courseStore =(set)=>({
    coures:[],
    addCourse:(coures)=>{
        set((State)=>({
coures:[coures, ...State.coures]
        }))
    }
})

const useCouresStore =create(
devtools(
    persist(courseStore,{
        name:"coures"
    })
)
)


export default useCouresStore;