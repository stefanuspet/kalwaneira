export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark">
              Kalwaneira <em>Terra Prospera</em>
            </div>
            <div className="footer-tagline">
              An Indonesian export house. The archipelago, carefully delivered.
            </div>
            <div className="footer-addr">
              PT KALWANEIRA TERRA PROSPERA<br />
              JAKARTA · INDONESIA · GMT+7<br />
              NPWP / TAX REG. ON REQUEST
            </div>
          </div>

          <div className="footer-col">
            <h6>The house</h6>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#vm">Vision &amp; mission</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#why">Why us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Brands</h6>
            <ul>
              <li>
                <a href="https://www.zanetuno.com" target="_blank" rel="noopener noreferrer">
                  Zanetuno ↗
                </a>
              </li>
              <li>
                <a href="https://www.nusateraso.com" target="_blank" rel="noopener noreferrer">
                  Nusateraso ↗
                </a>
              </li>
              <li><a href="#catalog">Catalogue</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Contact</h6>
            <ul>
              <li><a href="#contact">Enquiry desk</a></li>
              <li><a href="mailto:info@nusateraso.com">info@nusateraso.com</a></li>
              <li><a href="tel:+6282258402154">+62 822 5840 2154</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bot">
          <span>© 2026 PT Kalwaneira Terra Prospera — All rights reserved.</span>
          <span>
            <a href="https://kalwaneira.com">kalwaneira.com</a>
            {' · '}
            <a href="https://www.zanetuno.com" target="_blank" rel="noopener noreferrer">zanetuno.com</a>
            {' · '}
            <a href="https://www.nusateraso.com" target="_blank" rel="noopener noreferrer">nusateraso.com</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
