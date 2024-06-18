"use client";

import Container from "../Container";
import Communication from "./Communication";
import Staff from "./Staff";

const ManagementSystem = () => {
  return (
    <section className="bg-white py-24 bg-gradient-to-r from-white via-gray-200 to-gray-400">
      <Container className="flex flex-col gap-16">
        <Communication />
        <Staff />
      </Container>
    </section>
  );
};

export default ManagementSystem;
