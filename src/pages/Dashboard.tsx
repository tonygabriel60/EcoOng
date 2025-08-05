import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardTemplate } from '../components/templates/DashboardTemplate/DashboardTemplate';
import type { ONG } from '../types';
import { loadONGs } from '../data/ongs';

export const Dashboard: React.FC = () => {
  const [ongs, setOngs] = useState<ONG[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setOngs(loadONGs());
  }, []);

  const handleDonate = (ong: ONG) => {
    navigate(`/donation/${ong.id}`);
  };

  return <DashboardTemplate ongs={ongs} onDonate={handleDonate} />;
};