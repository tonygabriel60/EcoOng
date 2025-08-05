import { useState } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import './DonationForm.css';

interface DonationFormProps {
  onSubmit: (amount: number) => void;
  onCancel: () => void;
}

export const DonationForm: React.FC<DonationFormProps> = ({ onSubmit, onCancel }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (numAmount > 0) {
      onSubmit(numAmount);
    }
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <Input
        label="Valor a ser Doado (R$)"
        type="number"
        value={amount}
        onChange={setAmount}
        placeholder="0,00"
      />
      <div className="donation-form__actions">
        <Button type="submit" disabled={!amount || parseFloat(amount) <= 0}>
          Confirmar Doação
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};