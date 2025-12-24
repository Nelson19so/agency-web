export default function Features() {
  return (
    <div className="w-full --global-padding flex justify-evenly pt-[92px] pb-[92px] gap-[50px] relative">
      <svg
        width={443}
        height={505}
        viewBox="0 0 443 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0"
      >
        <ellipse
          cx={248.5}
          cy={252.5}
          rx={248.5}
          ry={252.5}
          fill="url(#paint0_radial_2_1181)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2_1181"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(248.5 252.5) rotate(77.9425) scale(375.791 369.837)"
          >
            <stop stopColor="#FFD9EB" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative pl-12 pr-12 pt-10 pb-10 bg-[#F4F4F4] flex justify-between flex-col gap-[38px] items-center rounded-2xl text-center ">
        <div>
          <p className="text-[25px] font-semibold">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

        <div>
          <span className="text-[#545454]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </span>
        </div>

        <div>
          <button className="bg-[#1090CB] text-white pl-[35px] pr-[35px] pt-[11px] pb-[11px] rounded-md">
            View More
          </button>
        </div>
      </div>

      <div className="relative pl-12 pr-12 pt-10 pb-10 bg-[#1090CB] text-center flex justify-between flex-col gap-[38px] items-center rounded-2xl">
        <div>
          <p className="text-[25px] text-white font-semibold">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

        <div>
          <span className="text-white">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </span>
        </div>

        <div>
          <button className="bg-white text-[#1090CB] pl-[35px] pr-[35px] pt-[11px] pb-[11px] rounded-md">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
