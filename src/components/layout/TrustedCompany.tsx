import beneoShop from "../../assets/images/trusted-company/beneoshop.png";
import caspio from "../../assets/images/trusted-company/caspio.png";
import hyperGrid from "../../assets/images/trusted-company/HyperGrid.png";
import leotrippi from "../../assets/images/trusted-company/leotrippi.png";

export default function TrustedCompany() {
  return (
    <div className="--global-padding pt-[92px] pb-[92px] w-full relative">
      <svg
        width={247}
        height={505}
        viewBox="0 0 247 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
      >
        <ellipse
          cx={-1.5}
          cy={252.5}
          rx={248.5}
          ry={252.5}
          fill="url(#paint0_radial_2_1180)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2_1180"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-1.5 252.5) rotate(77.9425) scale(375.791 369.837)"
          >
            <stop stopColor="#FAFFD9" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>

      <header className="w-full text-center">
        <p className="font-medium text-[24px]">You will be in good Company</p>
      </header>

      <div className="flex justify-between gap-[115px] w-full mt-[11px] relative">
        <div>
          <img src={beneoShop} alt="beneoShop" />
        </div>
        <div>
          <img src={caspio} alt="caspio" />
        </div>
        <div>
          <img src={hyperGrid} alt="hyperGrid" />
        </div>
        <div>
          <img src={leotrippi} alt="leotrippi" />
        </div>
      </div>
    </div>
  );
}
