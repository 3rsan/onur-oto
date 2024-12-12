import './styles.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">İletişim Formu</h2>
      <div className="contact-subtitle">
        Bir OTO Onur Ayyıldız San. ve Tic. A.Ş. markasıdır.
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-title">
            Çağrı merkezi telefon: 0850 210 12 52
          </div>
          <div className="working-time">
            <div className="title">Çalışma saatleri:</div>
            <div className="weekday">Hafta içi: 08.00-20.00</div>
            <div className="weekend">Hafta sonu: 09.00-17.30</div>
          </div>
        </div>
      </div>
      <div className="member-info row">
        <div className="row w-50">
          <div className="member-info-item name form-group col-6 col-lg-6">
            <label htmlFor="name">İsim*</label>
            <input
              type="text"
              name="name"
              placeholder="Lütfen isminizi giriniz"
              required
            />
          </div>
          <div className="member-info-item lastname form-group col-6 col-lg-6">
            <label htmlFor="lastname">Soyad*</label>
            <input
              type="text"
              name="lastname"
              placeholder="Lütfen soyadınızı giriniz"
              required
            />
          </div>
        </div>
        <div className="row w-50">
          <div className="member-info-item phone form-group col-6 col-lg-6">
            <label htmlFor="phone">Telefon*</label>
            <input
              type="number"
              name="phone"
              placeholder="Telefon numaranızı giriniz"
              inputMode="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className="member-info-item email form-group col-6 col-lg-6">
            <label htmlFor="">E-Posta</label>
            <input
              type="email"
              name="email"
              placeholder="E-Posta adresinizi giriniz"
              pattern=".+@example\.com"
              size={30}
            />
          </div>
        </div>
        <div className="member-info-item message form-group col-6 col-lg-6">
          <label htmlFor="message">Mesajınız*</label>
          <textarea
            className="form w-100"
            name="message"
            rows={5}
            cols={20}
            placeholder="Mesajınızı yazınız"
            required
          />
        </div>
        <div className="consent-form form-group col-6 col-lg-6">
          <div>
            <label htmlFor="" className="custom-input-wrapper consent">
              <span className="status-text">
                Kişisel verilerinizin işlenmesine ilişkin Aydınlatma Metni için{' '}
                <Link to=""> tıklayınız.</Link>
              </span>
            </label>
          </div>
          <div>
            <label htmlFor="" className="custom-input-wrapper consent">
              <span className="status-text">
                Ticari Elektronik İleti Gönderimleri kapsamında kişisel
                verilerinizin işlenmesine ilişkin Aydınlatma Metni için{' '}
                <Link to=""> tıklayınız.</Link>
              </span>
            </label>
          </div>
          <div>
            <label htmlFor="" className="custom-input-wrapper consent">
              <input type="checkbox" name="chk3" className="chk3" />
              <span className="checkmark"></span>
              <span className="status-text">
                OTO Onur Ayyıldız Ticaret A.Ş. ‘nin kampanya, fırsat ve
                tanıtımlarından haberdar olmayı ve bu amaçla tarafıma ticari
                elektronik ileti gönderilmesini{' '}
                <Link to="">Açık Rıza Metni</Link>
                ’nde belirtildiği şekilde onaylıyorum.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
