import Link from "next/link";

const Header = () => {
  return (
    <div className=" pt-4 container flex items-center justify-center gap-x-10">
      <Link
        className="  text-[15px] sm:text-[22px] font-semibold text-white"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="  text-[15px] sm:text-[22px] font-semibold text-white"
        href={"/"}
      >
        Burn
      </Link>
      <Link
        className="  text-[15px] sm:text-[22px] font-semibold text-white"
        href={"/"}
      >
        FAQ
      </Link>
      <Link
        className="  text-[15px] sm:text-[22px] font-semibold text-white"
        href={"/"}
      >
        Research
      </Link>
    </div>
  );
};

export default Header;
