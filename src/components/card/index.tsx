import './styles.css';

interface CardProps {
  title: string;
  subtitle: string;
  iconName: string;
}

function Card({ title, subtitle, iconName }: CardProps) {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src={`/img/svg/cards/${iconName}.svg`} alt="" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
