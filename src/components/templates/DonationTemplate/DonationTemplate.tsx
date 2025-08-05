import type { ONG } from '../../../types';
import { DonationForm } from '../../molecules/DonationForm/DonationForm';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { Button } from '../../atoms/Button/Button';
import './DonationTemplate.css';

interface DonationTemplateProps {
  ong: ONG;
  onDonate: (amount: number) => void;
  onCancel: () => void;
}

export const DonationTemplate: React.FC<DonationTemplateProps> = ({ ong, onDonate, onCancel }) => {
  return (
    <div className="donation-template">
      <div className="donation-template__container">
        <div className="donation-template__header">
          <Button variant="secondary" onClick={onCancel}>
            ← Voltar
          </Button>
        </div>
        
        <div className="donation-template__content">
          <div className="donation-template__ong-info">
            <div className="ong-info__image">
              <img src={ong.imagemUrl} alt={ong.nome} />
            </div>
            <div className="ong-info__details">
              <h1 className="ong-info__name">{ong.nome}</h1>
              <p className="ong-info__description">{ong.descricao}</p>
              <div className="ong-info__progress">
                <ProgressBar current={ong.valorArrecadado} target={ong.valorMeta} />
              </div>
            </div>
          </div>
          
          <div className="donation-template__form">
            <h2>Fazer Doação</h2>
            <DonationForm onSubmit={onDonate} onCancel={onCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};