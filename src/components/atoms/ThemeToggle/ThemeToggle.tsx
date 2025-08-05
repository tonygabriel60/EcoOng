import { useTheme } from '../../../contexts/ThemeContext';
import './ThemeToggle.css';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};