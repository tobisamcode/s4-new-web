import Image from "next/image";
import Container from "../Container";
import { TbMailFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="pt-16 z-50 bg-[#1a0c23]">
      <Container className="grid md:grid-cols-3 space-x-4 md: space-y-16 ">
        <div className="flex flex-col ">
          <Image
            src={"/svg/white-logo.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-[100px] pb-8 mb-8 border-b"
          />

          <h1 className="text-white uppercase">School as A service</h1>
        </div>

        <div className="flex flex-col space-y-3 items-center text-white text-sm  ">
          <h1 className="uppercase text-base font-[700]">Contact</h1>

          <span className="flex space-x-2 items-center">
            <TbMailFilled />
            <p>info@prepcohort.com</p>
          </span>
          <span className="flex space-x-2 items-center">
            <IoIosCall />
            <p>09033746143</p>
          </span>
          <span className="flex space-x-2 items-center">
            <FaMapMarkerAlt />
            <p>6116 Willa River Suite 610</p>
          </span>
        </div>

        <div className="flex items-center flex-col space-y-4 text-white ">
          <div className="flex gap-3 items-center">
            <FaXTwitter />
            <FaFacebookF /> <TiSocialInstagram />
          </div>
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} | All right reserved
          </p>
        </div>
      </Container>

      <div className="py-8 mt-10 border-t border-white flex gap-4 justify-center items-center">
        <p className="text-white text-sm uppercase">Powered by</p>

        <Image
          src={"/svg/white-logo.svg"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-[80px] "
        />
      </div>
    </div>
  );
};

export default Footer;
