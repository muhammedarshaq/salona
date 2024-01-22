import React from 'react'
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.png'
import Button from '../Button'

const Signin = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-center w-full flex flex-col justify-center items-center p-10" style={{
        backgroundImage: `url(${bg})`,
      }}>
        <div className="flex flex-col justify-center items-center">
          <form className="w-full">
            <div className="mb-5 gap-3">
              <label className="text-sm text-black font-semibold">Login with Mobile number</label>
              <input type="number" id="number" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  placeholder:text-black" placeholder="Mobile Number" required />
            </div>
            <div className="mb-10">
              <input type="number" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2.5  placeholder:text-black" placeholder='OTP' required />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="text-white bg-[#ac56ec] font-bold rounded-3xl text-sm w-[150px] sm:w-auto px-10 py-2.5 text-center ">Verify</button>
            </div>
          </form>
        </div>

        <div className='absolute flex flex-col justify-center gap-2 bottom-10'>
          <div>
            <p className='text-black font-bold text-[24px] text-center'>Powered By</p>
            <img src={logo} alt="logo" className='w-[200px]' />
          </div>
          <br />  
          <div className='flex gap-2 justify-center'>
            <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
            <div className='h-3 w-3 bg-[#ac56ec] rounded-full'></div>
            <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
            <div className='h-3 w-3 bg-[#cba0f4] rounded-full '></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin