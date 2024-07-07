import React from 'react'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:p-10 p-4'>
                <div className='w-full h-auto flex gap-2'>
                    <input type='text' className='w-[50%] p-2 h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='FIRST NAME' />
                    <input type='text' className='w-[50%] h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='LAST NAME' />
                </div>
                <input type='text' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='COUNTRY' />
                <input type='text' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='HOUSE ADDRESS' />
                <input type='text' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='TOWN / CITY' />
                <input type='text' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='ZIPCODE / POSTCODE' />
                <input type='text' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='PHONE' />
                <input type='email' className='w-full h-[60px] bg-[#00000016] placeholder:text-[black] placeholder:tracking-[4px] pl-[15px]' placeholder='EMAIL' />

                <p className='mt-[50px] mb-[50px] text-center tracking-[4px] relative after:content-[" "] after:w-[43%] after:absolute after:h-[2px] after:bg-[#00000061] after:bottom-0 after:right-[29%]'>SHIP TO DIFFERENT ADDRESS?</p>

                
                <div className='flex flex-col gap-2 justify-start items-start font-lato mb-[30px] border-t-2 border-b-2 pt-10 pb-10 w-[90%] mx-auto'>
                    <div className='flex gap-4 justify-center items-center'>
                        <input type='radio' value='' />
                        <h3 className='tracking-[3px]'>DIRECT BANK TRANSFER</h3>
                    </div>
                    <p className='text-sm w-[90%] mx-auto'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    <div className='flex gap-4 justify-center items-center mt-[20px]'>
                        <input type='radio' value='' />
                        <h3 className='tracking-[3px]'>CASH ON DELIVERY</h3>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-black text-white text-[14px] h-[60px] w-[30%] tracking-[3px] mx-auto mt-[20px] mb-[60px] active:text-[#ff0000ad]'>PLACE ORDER</button>
                </div>
            </form >


        </>
    )
}

export default Form