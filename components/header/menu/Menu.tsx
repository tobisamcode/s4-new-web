import Button from "@/components/Button";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex items-center gap-2 md:gap-6">
      <Link href="" className="text-grey-100 font-[400] text-xs md:text-sm">
        Sign In
      </Link>
      <Button label="Book A Session" />
    </div>
  );
};

export default Menu;
