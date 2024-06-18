"use client";

import Container from "../Container";
import ServiceOperation from "./ServiceOperation";
import StudyTracking from "./StudyTracking";
import WebMobile from "./WebMobile";

const Service = () => {
  return (
    <div className="py-44 bg-gradient-to-r from-white via-gray-200 to-gray-400">
      <Container className="flex flex-col gap-44">
        <ServiceOperation />
        <StudyTracking />
        <WebMobile />
      </Container>
    </div>
  );
};

export default Service;
