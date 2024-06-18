import Image from "next/image";
import Container from "../Container";

const Footer = () => {
  return (
    <div className="py-16 z-50 bg-[#1a0c23]">
      <Container className="grid grid-cols-3">
        <div className="col-span-1">
          <Image
            src={"/svg/white-logo.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-[100px] pb-8 mb-8 border-b"
          />

          <h1 className="text-white uppercase">School as A service</h1>
        </div>

        <div className="flex flex-col space-y-4 justify-center">
          <h1>Contact</h1>

          <span className="flex space-x-2 items-center">
            <TbMailFilled />
          </span>
          <span></span>
          <span></span>
        </div>
        <div className=""></div>
      </Container>
    </div>
  );
};

export default Footer;
