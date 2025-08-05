import './ProgressBar.css';

interface ProgressBarProps {
  current: number;
  target: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, target }) => {
  const percentage = Math.min((current / target) * 100, 100);
  const isComplete = current >= target;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>R$ {current.toLocaleString()}</span>
        <span>Meta: R$ {target.toLocaleString()}</span>
      </div>
      <div className={`progress-bar ${isComplete ? 'progress-bar--complete' : ''}`}>
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="progress-percentage">
        {percentage.toFixed(1)}%
      </div>
    </div>
  );
};