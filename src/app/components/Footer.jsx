/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-[1943px] h-[387px] absolute top-[3192px] bg-[#17414F]'>
        <div className='w-[1548px] h-[302px] absolute top-[20px] left-[151px]'>
            {/* telephone */}
            <div className='absolute w-[435.98px] h-[100px] top-[10px] left-[60px] px-[50px] pr-[131.98px] py-[16px] gap-[50px] bg-[#215D72] rounded-[15px] flex'>
                <div className='w-[70px] h-[61px]'><img src='/images/Phone.png'/></div>
                <div className='w-[194px] h-[68px] p-[5px 0 6px 45px] gap-[3px] flex flex-col'>
                    <div className='w-[150px] h-[26px] gap-0 text-[20px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'>Phone Number</div>
                    <div className='w-[150px] h-[26px] gap-0 text-[20px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'>+974 3118 1843</div>
                </div>
            </div>
            {/* email */}
            <div className='absolute w-[424.98px] h-[100px] top-[10px] left-[549.98px] px-[50px] pr-[63.98px] py-[16px] gap-[50px] bg-[#215D72] rounded-[15px] flex'>
            <div className='w-[70px] h-[61px]'><img src='/images/email.png'/></div>
                <div className='w-[194px] h-[68px] p-[5px 0 6px 45px] gap-[3px] flex flex-col'>
                    <div className='w-[150px] h-[26px] gap-0 text-[20px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'>Email Address</div>
                    <div className='w-[150px] h-[26px] gap-0 text-[20px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'>Elbrithcqhr@gmail.com</div>
                </div>
            </div>
            {/* location */}
            <div className='absolute w-[469.98px] h-[100px] top-[10px] left-[1039.97px] px-[50px] pr-[49.98px] py-[16px] gap-[50px] bg-[#215D72] rounded-[15px] flex'>
            <div className='w-[70px] h-[61px]'><img src='/images/location.png'/></div>
                <div className='w-[310px] h-[68px] p-[5px 0 6px 45px] gap-[3px] flex flex-col'>
                    <div className='w-[130px] h-[26px] gap-0 text-[16px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'>Office Location</div>
                    <div className='w-[265px] h-[28px] gap-0 text-[14px] leading-[26px] font-[400] tracking-[0.08px] text-left font-jost decoration-skip-ink-none underline-offset-auto'> Ambassador Street, Zone 61,</div>
                </div>
            </div>
            <div className='flex'>
            <div className='w-[313.26px] mt-[180.31px] ml-[80px] gap-0 border-[15px] bg-white'>
                <img src='/images/image.png' />
            </div>
            <p className='w-[416px] h-[78px] mt-[163px] ml-[155px] font-jost text-[16px] font-normal leading-[26px] tracking-[0.08em] text-left'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
            </div>
            <div className='w-[705px] h-[24px] mt-[30px] ml-[66px] flex gap-3'>
                <img src='/images/footer.png' className='text-white'/>
                <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
            </div>
        </div>
    </div>
  )
}

export default Footer