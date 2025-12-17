export default function NewsLetter() {
  return (
    <div className="p-[148px] w-screen bg-[#E8F4FA]">
      <div className="flex justify-items-center flex-col place-items-center">
        <p className="text-[30px] block text-center font-semibold w-[45%]">
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </p>
      </div>

      <div className="flex justify-center mt-20 gap-3.5">
        <input
          type="email"
          className="bg-white pl-9 w-[50%] shadow pt-5 pb-5 rounded-2xl"
          placeholder="Enter your email"
        />
        <button className="bg-black pl-11 pt-5 pr-11 pb-5 text-white rounded-2xl">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
