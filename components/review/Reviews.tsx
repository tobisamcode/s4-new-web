import Image from "next/image";
import SectionHeader from "../Header";
import "./review.css";

const testimonials = [
  {
    id: 1,
    text: "This is the best service I have ever used!",
    author: "John Doe",
  },
  { id: 2, text: "Highly recommended for everyone.", author: "Jane Smith" },
  {
    id: 3,
    text:
      "Study4as has transformed my online learning experience. The interactive tools and easy navigation make studying enjoyable. A game-changer for remote education!",
    author: "Bob Johnson",
  },
  // Add more testimonials as needed
];

const Reviews = () => {
  return (
    <div className="px-8 py-16 overflow-hidden w-full relative bg-review bg-cover  bg-no-repeat">
      <div className="py-16 ">
        <div className="text-center mb-16">
          <h1 className="text-primary-100 text-[48px]  font-[500]">
            Some Reviews
          </h1>
          <p className="text-black-100 font-[400] text-[18px] w-[50%] mx-auto">
            Highlighted below are few of our reviews our happy users are saying
            about using our platform
          </p>
        </div>

        <div className="testimonialWrapper">
          <div className="max-w-[450px] p-10 bg-white rounded-[5px] flex flex-col py gap-4">
            {/* header */}
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/user-1.svg"}
                alt="user 1"
                width={100}
                height={100}
                className="w-[70px] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-[5000]">Clement James</h1>
                <Image
                  src={"/svg/rating.svg"}
                  alt="ratings"
                  width={100}
                  height={100}
                  className="w-[80px]"
                />
              </div>
            </div>

            <div className="w-full">
              <p>
                Study4as has transformed my online learning experience. The
                interactive tools and easy navigation make studying enjoyable. A
                game-changer for remote education!
              </p>
            </div>
          </div>

          <div className="max-w-[450px] p-10 bg-white rounded-[5px] flex flex-col py gap-4">
            {/* header */}
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/user-1.svg"}
                alt="user 1"
                width={100}
                height={100}
                className="w-[70px] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-[5000]">Clement James</h1>
                <Image
                  src={"/svg/rating.svg"}
                  alt="ratings"
                  width={100}
                  height={100}
                  className="w-[80px]"
                />
              </div>
            </div>

            <div className="w-full">
              <p>
                Study4as has transformed my online learning experience. The
                interactive tools and easy navigation make studying enjoyable. A
                game-changer for remote education!
              </p>
            </div>
          </div>

          <div className="max-w-[450px] p-6 bg-white rounded-[5px] flex flex-col gap-4">
            {/* header */}
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/user-1.svg"}
                alt="user 1"
                width={100}
                height={100}
                className="w-[70px] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-[5000]">Clement James</h1>
                <Image
                  src={"/svg/rating.svg"}
                  alt="ratings"
                  width={100}
                  height={100}
                  className="w-[80px]"
                />
              </div>
            </div>

            <div className="w-full">
              <p>
                As an educator, Study4As has been a lifesaver. The collaborative
                features enable engaging virtual classrooms, and the study
                tracking allows me to personalize my teaching approach. Overall,
                a fantastic platform for both students and teachers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
