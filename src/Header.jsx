import logo from "./assets/logo.svg";
import Button from "./components/Button";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <img src={logo} className="header-logo" alt="Huddle" />
          <h1 className="sr-only	">Huddle</h1>
        </nav>
        <Button text="Try it free" css="btn btn-outline w-32" id="btn_try" />
      </header>
    </>
  );
}

export default Header;
