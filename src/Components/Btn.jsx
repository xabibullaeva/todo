import React, { useContext } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { Context } from '../Context/Context'

const Btn = () => {
    const {setModal} = useContext(Context)
  return (
    <button className='addbtn' onClick={()=>setModal(true)}>
         <FaPencilAlt />
    </button>
  )
}

export default Btn