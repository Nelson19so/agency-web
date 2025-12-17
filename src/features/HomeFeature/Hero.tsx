import heroImg from "../../assets/images/Hero.png";

export default function Hero() {
  return (
    <div className="w-screen bg-[#E8F4FA] relative">
      {/* Float svg */}
      <svg
        width={48}
        height={532}
        viewBox="0 0 48 532"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-[25%]"
      >
        <path
          d="M17.2283 186.852C41.1069 228.771 20.2551 282.729 46.1957 347.868C53.5404 366.311 57.0381 377.126 67.3342 394.096C117.33 476.503 190.095 522.437 286.156 529.647C352.77 534.648 431.691 534.043 460.744 467.748C490.103 400.756 474.472 315.713 424.339 241.699C369.144 160.212 320.981 102.915 231.744 45.8164C183.987 15.2587 88.5571 -27.25 33.6692 25.4446C-8.11798 65.562 -6.65036 144.933 17.2283 186.852Z"
          fill="#1090CB"
          stroke="black"
        />
      </svg>

      <svg
        width={55}
        height={609}
        viewBox="0 0 55 609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 -bottom-40"
      >
        <path
          d="M-391.591 0.0580718C-445.452 -1.66818 -477.316 35.2762 -501.572 83.3967C-545.833 171.201 -560.967 276.157 -546.418 365.515C-531.868 454.873 -479.047 516.999 -426.364 554.226C-346.508 610.655 -325.59 612.264 -247.5 606.682C-190.503 602.607 -159.808 595.228 -93.8058 561.507C-27.8039 527.786 76.4386 464.776 50.4221 374.21C29.8276 302.518 -112.879 281.976 -112.879 281.976C-112.879 281.976 -179.389 274.376 -219.359 243.412C-260.729 211.364 -286.937 127.7 -286.937 127.7C-286.937 127.7 -327.164 2.12298 -391.591 0.0580718Z"
          fill="#08D3BB"
        />
      </svg>
      {/* Float svg ends */}

      <div className="flex justify-between flex-row --global-padding">
        <div className="flex-[1.1] pt-[230px] pb-40">
          <h4 className="text-[40px] font-medium">
            Experienced <span className="text-[#1090CB]">mobile and web </span>
            applications and website builders measuring.
          </h4>

          <div className="mt-4">
            <span className="text-[#5C5C5C]">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{" "}
            </span>
          </div>

          <div className="flex gap-7 mt-[65px]">
            <button className="--bg-secondary-color text-white pt-[9px] pb-[9px] pl-[52px] pr-[52px] rounded-md">
              Contact us
            </button>
            <button
              className="text-[#1090CB] bg-white pt-[9px] pb-[9px] pl-[52px] pr-[52px] rounded-md"
              style={{ border: "1px solid #1090CB" }}
            >
              View more
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
}
