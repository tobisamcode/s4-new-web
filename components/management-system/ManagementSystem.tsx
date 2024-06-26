"use client";

import Container from "../Container";
import Communication from "./Communication";
import Staff from "./Staff";

const ManagementSystem = () => {
  return (
    <section className="bg-white py-24 bg-gradient-to-r from-white via-purple-100 to-purple-200">
      <Container className="flex flex-col space-y-32 md:gap-16">
        <Communication />
        <Staff />
      </Container>
    </section>
  );
};

export default ManagementSystem;
