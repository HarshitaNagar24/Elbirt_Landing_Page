/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurBlogs = () => {
  return (
    <>
      <div className="w-[1470px] h-[88px]  absolute top-[2260px] left-[325px]">
        <div className="w-[82.86px] h-[23px] absolute left-[693.67px] text-[13px] font-semibold leading-[24px] tracking-[0.08em] text-center text-[#003569]">
          OUR BLOG
        </div>
        <div className="w-[260.76px] h-[69px] absolute top-[27px] left-[604.72px] text-[36px] font-semibold leading-[52px] tracking-[0.08em] text-center text-[#17414F]">
          Latest News
        </div>
      </div>
      <div className="w-[1138px] h-[722px]">
      <div className="w-[390px] h-[502px] gap-0 rounded-[15px] absolute top-[2414px] left-[100px]">
        <img src="/images/poster1.png" alt="" />
        <img src="/images/fontTitle.png" className="w-[114.77px] h-[36px] absolute top-[20px] left-[-10px]" alt="fonttitle" />
      </div>
      <div className="w-[414px] h-[226px] gap-0 rounded-[15px] absolute top-[2930px] left-[100px]">
        <img src="/images/poster2.png" alt="" />
      </div>
      </div>
      <div className="w-[1218px] h-[722px] gap-0 rounded-[15px] absolute top-[2414px] left-[558px]">
        <img src="/images/poster3.png" alt="" />
      </div>
      <div className="w-[389.66px] h-[502.22px] absolute left-[1400px] top-[2660px] gap-0 rounded-tl-[15px]">
      <img src="/images/poster4.png" alt="" />
      </div>
    </>
  );
};

export default OurBlogs;
