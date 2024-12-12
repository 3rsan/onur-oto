import './styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [hover, setHover] = useState(true);
  return (
    <div className="navbar-container">
      <nav className="row navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-2">
          <Link className="navbar-brand" to="/">
            OTO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="col-10 collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="localhost:3000">
                Servis Noktaları
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link services" to="/services">
                Hizmetler
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Ürünler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Kampanyalar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Fiyat Listesi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Faydalı Bilgiler
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Bize Ulaşın
              </Link>
            </li>
            <li className="nav-item appointment">
              <a className="nav-link" href="localhost:3000">
                Randevu Al
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="services-subs">
        <div className="left">
          <div className="services-sub-item">
            <a href="localhost:3000">Bakım</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Yağ ve Sıvılar</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Akü</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Klima</a>
          </div>
        </div>
        <div className="right">
          <div className="services-sub-item">
            <a href="localhost:3000">Elektrik</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Lastik/Jant</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Elektrikli Araç Şarj Hizmetleri</a>
          </div>
          <div className="services-sub-item">
            <a href="localhost:3000">Elektrikli ve Hibrit Araç Bakımı</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
