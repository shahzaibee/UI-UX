import React from "react";
import Image from "next/image";
import Featured1 from "../../public/assets/feature-1.svg";
import Featured2 from "../../public/assets/feature-2.svg";
import Featured3 from "../../public/assets/feature-3.svg";
import blueButton from "../../public/assets/blue-button.svg";
import Check from "../../public/assets/check.svg";
import greenButton from "../../public/assets/green-button.svg";
import Pinkbutton from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      {/*  */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Featured1}
          alt="Featured1-image"
          className="hidden w-1/2 sm:block"
          priority
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Featured1}
            alt="featured-image-1"
            className="pt-[24px] sm:hidden"
            priority
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn more{" "}
            <span>
              <Image src={blueButton} alt="blue-button" priority />
            </span>
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Featured2}
          alt="Featured1-image"
          className="hidden w-1/2 sm:block"
          priority
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src={Featured2}
            alt="featured-image-1"
            className="pt-[24px] sm:hidden"
            priority
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" priority />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn more{" "}
            <span>
              <Image src={greenButton} alt="blue-button" priority />
            </span>
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Featured3}
          alt="Featured1-image"
          className="hidden w-1/2 sm:block"
          priority
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src={Featured3}
            alt="featured-image-1"
            className="pt-[24px] sm:hidden"
            priority
          />

          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36486C]">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36486C]">Conse adipiscing elit</p>
            </div>
          </div>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn more{" "}
            <span>
              <Image src={Pinkbutton} alt="blue-button" priority />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
