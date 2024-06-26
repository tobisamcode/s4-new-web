"use client";

import Container from "../Container";
import ServiceOperation from "./ServiceOperation";
import StudyTracking from "./StudyTracking";
import WebMobile from "./WebMobile";

const Service = () => {
  return (
    <div className="py-24 md:py-44 bg-gradient-to-r from-white via-purple-100 to-purple-200">
      <Container className="flex flex-col space-y-16 md:gap-32">
        <ServiceOperation />
        <StudyTracking />
        <WebMobile />
      </Container>
    </div>
  );
};

export default Service;
