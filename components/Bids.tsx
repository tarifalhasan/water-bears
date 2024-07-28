import Image from "next/image";

const Bids = () => {
  const BIDS = [
    {
      name: "bboyhiro. eth",
      total: "1.73",
      icon: "/images/Ellipse2364.svg",
    },
    {
      name: "0x5A...1771",
      total: "1.69",
      icon: "/images/Ellipse2365.svg",
    },
    {
      name: "bboyhiro. eth",
      total: "1.73",
      icon: "/images/Ellipse2366.svg",
    },
  ];
  return (
    <div
      style={{
        borderRadius: "80px",
        border: "1px solid rgba(194, 203, 173, 0.10)",
        background:
          "linear-gradient(100deg, rgba(69, 90, 7, 0.04) 2.47%, rgba(115, 115, 115, 0.02) 92.02%)",
        backdropFilter: "blur(12.5px)",
      }}
      className=" px-8 py-14"
    >
      <ul className=" space-y-10">
        {BIDS.map((item, index) => (
          <li key={index} className=" gap-2  grid grid-cols-12">
            <div className=" col-span-7 inline-flex items-center gap-4">
              <div className="">
                <Image
                  src={item.icon}
                  className=" w-[30px] h-[30px]"
                  alt="sddsdsds"
                  width={30}
                  height={30}
                />
              </div>
              <p className=" text-2xl font-semibold">{item.name}</p>
            </div>
            <div className=" col-span-5 inline-flex items-center gap-7">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={22}
                  viewBox="0 0 18 22"
                  fill="none"
                >
                  <rect width={18} height={2} rx={1} fill="#D9D9D9" />
                  <rect
                    x={3}
                    y={10}
                    width={12}
                    height={2}
                    rx={1}
                    fill="#D9D9D9"
                  />
                  <rect y={20} width={18} height={2} rx={1} fill="#D9D9D9" />
                </svg>
              </button>
              <p className=" text-2xl font-semibold">{item.total}</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M17.4437 6.47938L23.6659 12.0103C24.8292 13.0443 25.4108 13.5613 25.6251 14.1717C25.8133 14.7078 25.8133 15.2921 25.6251 15.8282C25.4108 16.4386 24.8292 16.9556 23.6659 17.9896L17.4437 23.5205C16.9158 23.9897 16.6518 24.2243 16.4277 24.2327C16.2329 24.24 16.0459 24.156 15.922 24.0056C15.7793 23.8325 15.7793 23.4794 15.7793 22.7731V19.2857C12.7442 19.2857 9.53848 20.2605 7.19771 21.9909C5.97909 22.8918 5.36976 23.3423 5.13768 23.3245C4.91146 23.3072 4.7679 23.2188 4.65052 23.0247C4.53011 22.8255 4.63646 22.2031 4.84917 20.9583C6.23039 12.8756 11.7929 10.7142 15.7793 10.7142V7.22679C15.7793 6.52052 15.7793 6.16739 15.922 5.99426C16.0459 5.84385 16.2329 5.75987 16.4277 5.76716C16.6518 5.77555 16.9158 6.01016 17.4437 6.47938Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
        <li>
          <button className=" bg-primary rounded-full text-black h-12 px-9 w-full justify-center inline-flex items-center text-2xl font-semibold">
            View All Bids
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Bids;
