import ClassroomManagement from "../classroom-management/ClassroomManagement";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import ManagementSystem from "../management-system/ManagementSystem";
import MultiSchools from "../multi-schools/MultiSchools";
import AboutPrepCohort from "../prepcohort/AboutPrepCohort";
import Reviews from "../review/Reviews";
import RoadMap from "../road-map/RoadMap";
import Service from "../service/service";

const HomeClient = () => {
  return (
    <div className="relative">
      <div className="mb-20">
        <Header />
      </div>
      <Hero />
      <ClassroomManagement />
      <AboutPrepCohort />
      <ManagementSystem />
      <MultiSchools />
      <Service />
      <Reviews />
      {/* <RoadMap /> */}
      <Footer />
    </div>
  );
};

export default HomeClient;
