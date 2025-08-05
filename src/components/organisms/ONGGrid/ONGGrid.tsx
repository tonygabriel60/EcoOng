import type { ONG } from '../../../types';
import { ONGCard } from '../../molecules/ONGCard/ONGCard';
import './ONGGrid.css';

interface ONGGridProps {
  ongs: ONG[];
  onDonate: (ong: ONG) => void;
}

export const ONGGrid: React.FC<ONGGridProps> = ({ ongs, onDonate }) => {
  return (
    <div className="ong-grid">
      {ongs.map((ong) => (
        <ONGCard key={ong.id} ong={ong} onDonate={onDonate} />
      ))}
    </div>
  );
};