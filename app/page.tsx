import Bids from "@/components/Bids";
import Image from "next/image";

const Home = () => {
  return (
    <main className="  gap-8 overflow-hidden relative container mx-auto  xl:flex-row flex-col flex">
      <div className=" min-h-[80vh] pt-8 xl:pt-0  flex space-y-8 xl:space-y-0 flex-col justify-between">
        <div className=" space-y-5">
          <Image src={"/logo.svg"} alt="logo" width={92} height={70} />
          <button className=" bg-primary rounded-full h-10 px-9 inline-flex items-center text-sm sm:text-2xl font-semibold">
            Treasury
          </button>
        </div>
        <div className="xl:top-[61px] xl:left-[19%]  xl:absolute space-y-3">
          <span className=" inline-flex bg-[#D9D9D90D]/5 rounded-full border border-white/10 px-6 py-2 text-sm font-semibold text-primary">
            July 10-2024
          </span>
          <h4 className=" text-6xl xl:text-8xl font-extrabold text-primary">
            Waterbear <br />
            1175
          </h4>
        </div>
        <Bids />
      </div>
      <div className=" min-h-[80vh] space-y-5 xl:space-y-0 flex-1">
        <div className="flex xl:pt-20 pb-3 items-center justify-end gap-3">
          <button
            disabled
            className=" w-12  disabled:opacity-50 h-12 bg-primary rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 12H4M4 12L10 6M4 12L10 18"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className=" w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className=" mx-auto block">
          <Image
            src={"/images/image_1546-removebg 1.svg"}
            width={416}
            height={384}
            className=" block mx-auto"
            alt="image_1546-removebg 1"
          />
        </div>
        <div className="  pt-3 inline-flex  justify-center  w-full">
          <div
            style={{
              borderRadius: "32px",
              border: "1px solid rgba(194, 203, 173, 0.10)",
              background:
                "linear-gradient(104deg, rgba(0, 0, 0, 0.04) 2.92%, rgba(0, 0, 0, 0.04) 28.75%, rgba(115, 115, 115, 0.02) 90.09%)",
              backdropFilter: "blur(12.5px)",
            }}
            className="  p-5  w-full xl:w-auto space-y-5"
          >
            <div className=" grid sm:grid-cols-2 gap-4">
              <div
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(163, 214, 13, 0.10)",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
                className=" px-5 pt-3 pb-3"
              >
                <h4 className=" text-xl sm:text-3xl font-semobold text-white/85]">
                  WaterBear 1169
                </h4>
                <div className=" inline-flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx={20} cy={20} r="16.6667" fill="#070807" />
                    <path
                      d="M14.1667 20.8334L17.5 24.1667L25.8333 15.8334"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className=" text-2xl sm:text-4xl font-bold text-white">
                    1.73
                  </span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(163, 214, 13, 0.10)",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
                className=" px-5 pt-3 pb-3"
              >
                <h4 className=" text-xl sm:text-3xl font-semobold text-white/85]">
                  Auction Ends In
                </h4>
                <div className=" flex justify-between  items-center gap-3">
                  <p className=" text-4xl font-bold text-white">5h</p>
                  <p className=" text-4xl font-bold text-white">35m</p>
                  <p className=" text-4xl font-bold text-white">85</p>
                </div>
              </div>
            </div>
            <div className=" space-y-2">
              <button className=" bg-[#4B4949] border border-[#4B4949] rounded-full text-white h-12 px-9 w-full justify-center inline-flex items-center text-sm sm:text-2xl font-semibold">
                0 or more
              </button>
              <button className=" bg-primary rounded-full text-black h-12 px-9 w-full justify-center inline-flex items-center text-sm sm:text-2xl font-semibold">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
