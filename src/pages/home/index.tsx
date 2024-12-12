import './styles.css';
import Card from '../../components/card';
import BannerSlider from '../../components/banner-slider';
import ServiceCard from '../../components/service-card';

function Home() {
  return (
    <div className="home">
      <div className="banner-wrapper">
        <BannerSlider />
      </div>
      <div className="card-wrapper">
        <Card
          title="En yakın bayiyi seçin"
          subtitle="Randevu sürecine başlamak için size en yakın bayiyi seçin"
          iconName="dealer"
        ></Card>
        <Card
          title="Araç bilgilerinizi girin"
          subtitle="En doğru fiyat tahmini almak için araç bilgilerinizi girin"
          iconName="car-info"
        ></Card>
        <Card
          title="Hizmet seçin, fiyat görün"
          subtitle="Almak istediğiniz hizmet veya hizmetleri seçin, ortalama fiyatınızı görün"
          iconName="service"
        ></Card>
        <Card
          title="Randevu oluşturun"
          subtitle="Uygun olduğunuz gün ve saat için randevunuzu kolayca oluşturun"
          iconName="calendar"
        ></Card>
      </div>
      <div className="service-card-wrapper">
        <div className="title-container">
          <h2 className="service-card-title">Oto Hizmetleri</h2>
          <div className="service-card-subtitle">
            Oto, bakım, onarım, lastik gibi birçok farklı hizmeti tek çatı
            altında sunarak binek ve hafif ticari araç sahiplerinin hayatlarını
            kolaylaştırır.
          </div>
        </div>
        <div className="service-card-component">
          <ServiceCard
            title="Bakım"
            subtitle="Aracınızın uzun ömürlü olması için doğru bakım"
            iconName="service"
          ></ServiceCard>
          <ServiceCard
            title="Yağ ve Sıvılar"
            subtitle="Uzun motor ömrü için düzenli yağ değişimi"
            iconName="oil"
          ></ServiceCard>
          <ServiceCard
            title="Akü"
            subtitle="Yolda kalmamak için akü kontrolü ve değişimi"
            iconName="battery"
          ></ServiceCard>
          <ServiceCard
            title="Klima"
            subtitle="Sağlıklı bir yolculuk için klima kontrolü"
            iconName="ac-unit"
          ></ServiceCard>
          <ServiceCard
            title="Elektrik"
            subtitle="Aracınızın güvenli çalışması için elektrik kontrolleri"
            iconName="electricity"
          ></ServiceCard>
          <ServiceCard
            title="Lastik ve Jant"
            subtitle="Güvenli yolculuk için lastik bakımı"
            iconName="wheel"
          ></ServiceCard>
          <ServiceCard
            title="Elektrikli Araç Şarj Hizmeti"
            subtitle="Elektrikli araç şarj istasyonu ve hızlı şarj sistemleri"
            iconName="electric-station"
          ></ServiceCard>
          <ServiceCard
            title="Elektrikli ve Hibrit Araç Bakımı"
            subtitle="Elektrikli ve hibrit aracınızın periyodik bakımı"
            iconName="electric-car"
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
