function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-2 sticky-top">
      <div className="container justify-content-center gap-2 gap-md-4 flex-wrap">
        <a className="btn btn-outline-light" href="#about">
          About
        </a>
        <a className="btn btn-outline-light" href="#projects">
          Projects
        </a>
        <a className="btn btn-outline-light" href="#experience">
          Experience
        </a>
        <a className="btn btn-outline-light" href="#awards">
          Awards
        </a>
        <a className="btn btn-outline-light" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Header;