import Image from "next/image";

const RoadMap = () => {
  return (
    <div className="relative">
      <Image
        src={"/svg/road-map.svg"}
        alt="road map"
        width={10}
        height={10}
        className="w-full absolute inset-0"
      />
    </div>
  );
};

export default RoadMap;
