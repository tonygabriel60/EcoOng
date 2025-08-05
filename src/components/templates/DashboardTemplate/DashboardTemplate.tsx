import { Header } from '../../organisms/Header/Header';
import { ONGGrid } from '../../organisms/ONGGrid/ONGGrid';
import type { ONG } from '../../../types';
import './DashboardTemplate.css';

interface DashboardTemplateProps {
  ongs: ONG[];
  onDonate: (ong: ONG) => void;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ ongs, onDonate }) => {
  return (
    <div className="dashboard-template">
      <Header />
      <main className="dashboard-template__main">
        <ONGGrid ongs={ongs} onDonate={onDonate} />
      </main>
    </div>
  );
};