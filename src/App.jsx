import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="__next">
      <header className="header">
        <div className="container d-inline d-md-block">
          <div className="floating-nav mt-lg-5">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style="padding: 0px;"
            >
              <a href="/" className="navbar-brand">
                <img
                  alt
                  loading="lazy"
                  width="64"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  className="mb-0 mt-1"
                  srcSet="https://images.sounddrout.workers.dev?width=64&quality=75;image=https://eyums-lounge.replit.app/img/eyum-head.png 1x, https://images.sounddrout.workers.dev?width=128&quality=75;image=https://eyums-lounge.replit.app/img/eyum-head.png 2x"
                  src="https://images.sounddrout.workers.dev?width=128&quality=75;image=https://eyums-lounge.replit.app/img/eyum-head.png"
                  style="color: transparent;"
                />
              </a>
              <button
                aria-controls="responsive-navbar-nav"
                type="button"
                aria-label="Toggle navigation"
                className="navbar-collapse collapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                <div className="mr-auto navbar-nav"></div>
                <div className="navbar-nav">
                  <a href="/" data-rr-ui-event-key="/" className="nav-link">
                    Home
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      Server Info
                    </a>
                  </div>
                  <div className="nav-item dropdown"></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
