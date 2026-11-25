const Footer = () => {
  return (
    <footer className="mt-5 pt-5 pb-4 bg-light border-top">
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
         
          <div className="md:col-6">
            <div className="card h-100 bg-warning-subtle text-dark border-0 rounded-4 shadow-sm p-3">
              <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <div>
                  <h3 className="fw-bold mb-3">
                    <i className="bi bi-stars me-2" />
                    My Second Website
                  </h3>
                  <p className="text-dark-emphasis mb-4">
                    Crafting clean, modern web experiences with simplicity and
                    care. Built to look great on every screen.
                  </p>
                </div>

                <div>
                  <p className="fw-semibold small text-uppercase mb-2">
                    Connect With Us
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a
                      href="https://facebook.com"
                      className="btn-outline theme-dark rounded-circle px-3 py-2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook fs-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="btn-outline theme-dark rounded-circle px-3 py-2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram fs-5" />
                    </a>
                    <a
                      href="https://x.com"
                      className="btn-outline theme-dark rounded-circle px-3 py-2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X"
                    >
                      <i className="bi bi-twitter-x fs-5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      className="btn-outline theme-dark rounded-circle px-3 py-2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                    >
                      <i className="bi bi-youtube fs-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-6">
            <div className="card h-100 bg-warning-subtle text-dark border-0 rounded-4 shadow-sm p-3">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="row g-3 justify-content-center">
                  <div className="sm:col-6">
                    <h5 className="fw-bold mb-3">Explore</h5>
                    <ul className="list-unstyled d-flex flex-column align-items-center gap-2 mb-0">
                      <li>
                        <a href="/" className="text-dark text-decoration-none">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-dark text-decoration-none">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/products" className="text-dark text-decoration-none">
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-dark text-decoration-none">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-dark text-decoration-none">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sm:col-6">
                    <h5 className="fw-bold mb-3">Reach Out</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-geo-alt-fill me-2" />
                        Pimpri-Chinchwad, Pune
                      </li>
                      <li>
                        <i className="bi bi-telephone-fill me-2" />
                        +91 98765 43210
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill me-2" />
                        hello@mywebsite.com
                      </li>
                      <li>
                        <i className="bi bi-clock-fill me-2" />
                        Mon–Sat: 9 AM – 7 PM
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-warning-subtle text-dark border-0 rounded-4 shadow-sm mt-4 text-center">
          <div className="card-body py-3 px-4 d-flex flex-column justify-content-center align-items-center gap-2">
            <p className="mb-0 small">
              © 2026 <strong>My Second Website</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
