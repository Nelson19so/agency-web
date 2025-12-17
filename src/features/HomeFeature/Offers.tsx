import OfferItems from "./components/OfferItems";
import img1 from "../../assets/images/Recent Activities 1.png";
import img2 from "../../assets/images/website-mockup-png-10 1.png";
import img3 from "../../assets/images/focus-parallax-hero_1920x1000_ar-vr_0917_layer1-guy 1.png";

export default function Offer() {
  const OfferItemsList = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text",
      subtitle: "Lorem Ipsum is simply dummy text",
      heading: "Lorem Ipsum is simply dummy text of the printing. ",
      description:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      svgColor: "08D3BB",
      image: img1,
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text",
      subtitle: "Lorem Ipsum is simply dummy text",
      heading: "Lorem Ipsum is simply dummy text of the printing. ",
      description:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      svgColor: "08D3BB",
      image: img2,
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text",
      subtitle: "Lorem Ipsum is simply dummy text",
      heading: "Lorem Ipsum is simply dummy text of the printing. ",
      description:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      svgColor: "08D3BB",
      image: img3,
    },
  ];
  return (
    <div className="w-screen bg-white">
      <div className="--global-padding pt-[115px] pb-[115px]">
        <header className="w-full text-center flex flex-col items-center gap-8">
          <div className="w-full">
            <p className="text-[33px] text-black font-semibold">
              Lorem Ipsum is simply dummy text of the printing.{" "}
            </p>
          </div>

          <div className="w-[60%]">
            <span className="text-[#868686] text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </span>
          </div>
        </header>

        {/* Container for offer components */}
        <div className="w-full mt-[110px] relative">
          {/* Vector Svg */}
          <svg
            width={793}
            height={1270}
            viewBox="0 0 793 1310"
            fill="none"
            className="absolute -left-10 top-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.1447 0.293457C50.7643 29.7935 6.54589 111.093 2.65856 152.293C-2.20061 203.793 -0.95689 271.92 28.8981 338.793C107.807 515.545 343.772 461.293 491.977 483.793C595.914 499.573 665.096 522.156 726.674 599.293C793.731 683.293 806.299 779.96 775.752 882.793C736.393 1015.29 635.322 1073.79 516.758 1149.29C391.457 1229.08 71.6587 1308.79 71.6587 1308.79"
              stroke="#999999"
              strokeDasharray="7 7"
            />
          </svg>

          <div className="w-full flex gap-28 flex-col">
            {OfferItemsList.map((OfferItemList) => (
              <OfferItems
                key={OfferItemList.id}
                title={OfferItemList.title}
                subtitle={OfferItemList.subtitle}
                heading={OfferItemList.heading}
                description={OfferItemList.description}
                image={OfferItemList.image}
                svgColor={OfferItemList.svgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
