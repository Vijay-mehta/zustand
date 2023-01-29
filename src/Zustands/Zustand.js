import React,{useState} from 'react'
import useCouresStore from '../Components/Zustand'

const Zustand = () => {
    const addCourse =useCouresStore((state)=>state.addCourse)
    const [couresTitel,setCouresTitel] =useState('')

    const handleSubmit=()=>{

        addCourse({
            id:Math.ceil(Math.random() *1000000),
            titel:couresTitel
        })
        setCouresTitel('')

    }
  return (
    <div>
      <input value={couresTitel} onChange={(e)=>setCouresTitel(e.target.value)}/>
      <button type='submit' onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Zustand
