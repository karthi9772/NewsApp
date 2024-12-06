const NavBar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary py-4 --bs-primary-border-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a
          className="navbar-brand bg-light badge px-2 py-2 rounded-2 text-dark text-bold fw-bold fs-4"
          href="#"
        >
          News<span className=""> Paper</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                onClick={() => setCategory("general")}
                style={{ cursor: "pointer" }}
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("business")}
                style={{ cursor: "pointer" }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
                style={{ cursor: "pointer" }}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("technology")}
                style={{ cursor: "pointer" }}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("health")}
                style={{ cursor: "pointer" }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("science")}
                style={{ cursor: "pointer" }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("sports")}
                style={{ cursor: "pointer" }}
              >
                Sports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
