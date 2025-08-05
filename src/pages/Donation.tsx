import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DonationTemplate } from '../components/templates/DonationTemplate/DonationTemplate';
import type { ONG } from '../types';
import { loadONGs, saveONGs } from '../data/ongs';

export const Donation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [ong, setOng] = useState<ONG | null>(null);

  useEffect(() => {
    const ongs = loadONGs();
    const foundOng = ongs.find(o => o.id === id);
    if (foundOng) {
      setOng(foundOng);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleDonate = (amount: number) => {
    if (!ong) return;

    const ongs = loadONGs();
    const updatedOngs = ongs.map(o => 
      o.id === ong.id 
        ? { ...o, valorArrecadado: o.valorArrecadado + amount }
        : o
    );
    
    saveONGs(updatedOngs);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!ong) {
    return <div>Carregando...</div>;
  }

  return (
    <DonationTemplate 
      ong={ong} 
      onDonate={handleDonate} 
      onCancel={handleCancel} 
    />
  );
};