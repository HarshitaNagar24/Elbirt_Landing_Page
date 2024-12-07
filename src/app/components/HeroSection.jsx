/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <div className="p-2 top-[55px] left-[10px] absolute bg-[#E2F5FB] w-[1920px] h-[1000px]">
      {/* <img src='/images/div.elementor-element (3).png' alt='' loading='lazy' width={1200} height={130} className='' /> */}
      <div className="w-[1316px] h-[187px] absolute top-[26px] left-[330px] pt-0 pr-0 pb-[1px] pl-0 gap-[2px] ">
        <h1 className="font-jost text-[130px] font-bold leading-[211px] text-left text-[#003569] no-skip-ink">
          Essential Vitamins
        </h1>
      </div>
      <div className="w-[393px] h-[391px] absolute top-[248px] left-[720px] gap-0 rounded-tl-[130px] rounded-br-[130px] bg-[#FFE9B5]">
        <img
          src="\images\2023, 15_42_43 GMT+3.png"
          alt="bottle"
          loading="lazy"
          className="absolute top-[-109px] left-[-44px]"
        />
      </div>
      {/* right div */}
      <div className="w-[300px] h-[380px] absolute top-[349.42px] left-[1204.21px] py-[35px] px-0">
        <div className="w-[300px] h-[80px] absolute top-[35px]  gap-0">
          <img
            src="images/medicin1.png"
            alt="medicine"
            loading="lazy"
            width={75}
            height={74}
          />
          <div className="w-[100.93px] h-[38px] absolute top-[-1px] left-[95px] gap-0 font-jost text-[26px] font-semibold leading-[36px] text-left text-[#17414F] no-skip-ink">
            Vitamins
          </div>
          <div className="w-[146.52px] h-[37px] absolute top-[30px] left-[90px] font-roboto text-[14px] font-normal leading-[20px] text-left text-[#727272] no-skip-ink">
            Increased Vitamins and minerals in your diet
          </div>
        </div>
        <div className="w-[300px] h-[80px] absolute top-[150px] left-[1px] gap-0">
          <div className="w-[300px] h-[80px] absolute top-[3px] gap-0">
            <img
              src="images/weight.png"
              alt="medicine"
              loading="lazy"
              width={75}
              height={74}
            />
            <div className="w-[143px] h-[38px] absolute top-[-1px] left-[95px] gap-0 font-jost text-[24px] font-semibold leading-[36px] text-left text-[#17414F] no-skip-ink">
              Weigth Loss
            </div>
            <div className="w-[229px] h-[37px] absolute top-[30px] left-[90px] font-roboto text-[14px] font-normal leading-[20px] text-left text-[#727272] no-skip-ink">
              Weight Loss Find scientifically proven solutions
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[80px] absolute top-[265px] left-[1px] gap-0">
          <div className="w-[300px] h-[80px] absolute top-[3px] gap-0">
            <img
              src="images/functional.png"
              alt="medicine"
              loading="lazy"
              width={75}
              height={74}
            />
            <div class="w-[197.84px] h-[38px] absolute top-[-1px] left-[95px] gap-0 font-jost text-[23px] font-semibold leading-[36px] text-left text-[#17414F] no-skip-ink">
              Functional Foods
            </div>
            <div class="w-[239px] h-[37px] absolute top-[30px] left-[90px] font-roboto text-[14px] font-normal leading-[20px] text-left text-[#727272] no-skip-ink">
              Functional Foods From protein powers to baby formula
            </div>
          </div>
        </div>
      </div>
      {/* left div */}
      <div className="w-[400px] h-[250px] absolute top-[414.42px] left-[293.21px]">
        <div className="w-[270.67px] h-[25px] absolute top-[20px]">
          <p className="w-[270.87px] h-[38px] font-jost text-[24px] font-normal leading-[25px] text-left text-[#727272] no-skip-ink">Online Medical Supplies</p>
        </div>
        <div className="w-[270px] h-[80px] absolute top-[73px]">
          <p className="w-[270.2px] h-[89px] absolute top-[-5px] font-jost text-[32px] font-medium leading-[40px] text-left text-[#17414F] no-skip-ink">
          Get Your Vitamins
          & Minerals
          </p>

        </div>
        <div className="w-[189.14px] h-[56px] absolute top-[176px] px-[45px] gap-0 rounded-[30px] bg-[#17414F]">
          <p className="w-[69.34px] h-[23px] absolute top-[1px] left-[45px] font-jost text-[16px] font-semibold leading-[56px] text-center  text-white no-skip-ink">EXPLORE</p>
        </div>
      </div>
      {/* Blow dotts */}
      <div className="w-[40px] h-[40px] absolute top-[740px] left-[230px] gap-0 rounded-[40px] bg-[#A6B8CB]"></div>
      <div className="w-[40px] h-[40px] absolute top-[740px] left-[280px] gap-0 rounded-[40px] bg-[#A6B8CB]"></div>
    </div>
  );
};

export default HeroSection;
