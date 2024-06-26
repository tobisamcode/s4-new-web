import Container from "@/components/Container";
import Logo from "./Logo";
import Button from "../Button";
import Menu from "./menu/Menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center z-50 ">
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md"></div>
      <Container className="relative py-6 flex justify-between items-center px-2">
        <Logo />
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
