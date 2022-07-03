import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc'

const Modal = ({ clickedImg, setIsModal, handelRotationRight, handelRotationLeft }) => {

    const handleClickClose = () => {
        setIsModal(false)
    }

  return (
    <div>
        <div className='justify-items-center items-center fixed top-0 w-full h-screen flex scale-75 '>
            <img src={clickedImg} className='w-auto max-w-full h-auto block mx-auto my-0 bg-contain'/>
        </div>
        <IoCloseSharp className='fixed top-0 right-0 text-4xl' onClick={handleClickClose}/>

        <div onClick={handelRotationRight}>
            <VscArrowRight className='items-right fixed top-0 my-96 right-0 text-4xl'/>
        </div>

        <div onClick={handelRotationLeft}>
            <VscArrowLeft className='items-left fixed top-0 my-96 left-0 text-4xl'/>
        </div>

    </div>
  )
}

export default Modal