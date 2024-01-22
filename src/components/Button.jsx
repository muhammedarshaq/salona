const Button = ({ text, disabled }) => {
    return (
        <div className="w-full">
            {/* TODO - write a disabled button styles */}
            <button disabled={disabled} className='bg-[#ac56ec] w-full h-[60px]  py-[12px] rounded-[30px] tracking-wide font-semibold text-white text-[18px]'>
                {text}
            </button>
        </div>
    )
}

export default Button