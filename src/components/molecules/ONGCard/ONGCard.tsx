import type { ONG } from '../../../types';
import { Button } from '../../atoms/Button/Button';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import './ONGCard.css';

interface ONGCardProps {
  ong: ONG;
  onDonate: (ong: ONG) => void;
}

export const ONGCard: React.FC<ONGCardProps> = ({ ong, onDonate }) => {
  const isGoalReached = ong.valorArrecadado >= ong.valorMeta;

  return (
    <div className={`ong-card ${isGoalReached ? 'ong-card--complete' : ''}`}>
      <div className="ong-card__image">
        <img src={ong.imagemUrl} alt={ong.nome} />
      </div>
      <div className="ong-card__content">
        <h3 className="ong-card__title">{ong.nome}</h3>
        <p className="ong-card__description">{ong.descricao}</p>
        <div className="ong-card__progress">
          <ProgressBar current={ong.valorArrecadado} target={ong.valorMeta} />
        </div>
        <div className="ong-card__actions">
          <Button onClick={() => onDonate(ong)}>
            {isGoalReached ? 'Meta Atingida!' : 'Doar'}
          </Button>
        </div>
      </div>
    </div>
  );
};