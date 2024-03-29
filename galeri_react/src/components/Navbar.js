
import { Link } from "react-router-dom";

function Navbar(){
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
          <Link class="navbar-brand" href="/">
            Galeri Foto
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/foto">
                  Data Foto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;