export default function Footer() {
  return (
    <>
      <footer class="footer text-white text-center py-3">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3 mb-3">
              <h6 class="text-uppercase">Quick Links</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-reset">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-reset">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-reset">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-3 mb-3">
              <h6 class="text-uppercase">Contact</h6>
              <ul class="list-unstyled">
                <li>Email: alessandro.trapani03@gmail.com</li>
                <li>Phone: +32 467 114 758</li>
              </ul>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <h6 class="text-uppercase">Follow Us</h6>
              <a href="#" class="me-3 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="me-3 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="me-3 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="text-center small">© 2025 All rights not reserved.</div>
        </div>
      </footer>
    </>
  );
}
