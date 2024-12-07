/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Ingredient = () => {
  return (
    <div className='w-[1560px] h-[593.28px] absolute top-[1642px] left-[170px] gap-[50px] flex flex-wrap'>
        <div className='w-[612px] h-[266.64px] top-[1660px] left-[210px] gap-0'>
            <div className='w-[106.84px] h-[23px] left-[15px] font-[Jost] text-[16px] font-semibold leading-[24px] tracking-[0.08px] text-left text-[#003569]'>INGREDIENTS</div>
            <div className='w-[391.5px] h-[69px] top-[27px] left-[15px] font-[Jost] text-[48px] font-semibold leading-[52px] tracking-[0.08px] text-left text-[#17414F]'>Better Ingredients</div>
            <div className='w-[541px] h-[48px] font-[Jost] text-[16px] font-normal leading-[24px] tracking-[0.08px] text-left text-[#727272]'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </div>
        </div>
        {/* vitaminc */}
        <div className='w-[411px] h-[266.64px] left-[648px] gap-0'>
            <img src="/images/vitaminC.png" alt="vitaminC" loading='lazy'/>
        </div>
        {/* vitaminB3 */}
        <div className='w-[411px] h-[266.64px] left-[1089px]'>
            <img src="/images/vitaminB3.png" alt="vitaminB3" loading='lazy'/>
        </div>
        {/* Magnisium */}
        <div className='w-[411px] h-[266.64px] left-[60px] top-[296px]'>
            <img src="/images/magnisium.png" alt="vitaminB3" loading='lazy'/>
        </div>
        {/* hyloricAcid */}
        <div className='w-[411px] h-[266.64px] left-[60px] top-[296px]'>
            <img src="/images/hyloricAcid.png" alt="vitaminB3" loading='lazy'/>
        </div>
        {/* Lacto */}
        <div className='w-[411px] h-[266.64px] left-[60px] top-[296px]'>
            <img src="/images/lacto.png" alt="vitaminB3" loading='lazy'/>
        </div>
        {/* endDesing */}
        <div className='w-[117px] h-[250.56px] top-[296.64px] left-[1383px]'>
            <img src="/images/endDesing.png" alt="vitaminB3" loading='lazy'/>
        </div>
    </div>
  )
}

export default Ingredient