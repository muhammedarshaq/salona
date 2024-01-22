import React from 'react'
import logo from '../../../assets/logo.png'
import Button from '../../Button'

const Welcome = () => {
    return (
        <>
            <div class="h-screen bg-[#e0d2fc] w-full flex flex-col justify-center items-center p-10">
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="logo" className='w-[225px]' />
                    <br />
                    <p className='text-black font-semibold text-[22px] text-center'>The Complete Saloon Management System</p>
                    <br />
                    <Button text="Next" />
                </div>
                <div className='absolute flex justify-center gap-2 bottom-10'>
                    <div className='h-3 w-3 bg-[#ac56ec] rounded-full'></div>
                    <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
                    <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
                    <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
                </div>
            </div>
        </>
    )
}

export default Welcome