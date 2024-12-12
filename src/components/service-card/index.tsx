import './styles.css';

interface titles {
  title: string;
  subtitle: string;
  iconName: string;
}

function ServiceCard({ title, subtitle, iconName }: titles) {
  return (
    <div className="service-card-container">
      <div className="card" style={{ width: '18rem' }}>
        <div className="service-card-image">
          <img src={`/img/svg/service-cards/${iconName}.svg`} alt=""></img>
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <a href="localhost:3000" className="btn">
            Detay
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
