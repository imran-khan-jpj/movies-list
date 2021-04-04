import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="text-center">
        <Navbar.Brand href="#home" className="w-100">
          Hooked
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
