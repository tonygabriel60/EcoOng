import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div>
            <h1 className="header__title">ECOONG</h1>
            <p className="header__subtitle">Conectando você às causas ambientais</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};