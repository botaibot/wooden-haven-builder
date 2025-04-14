
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUserIdentification = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Check if user ID exists in localStorage
    const storedUserId = localStorage.getItem('userUUID');
    
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Generate new UUID if not exists
      const newUserId = uuidv4();
      localStorage.setItem('userUUID', newUserId);
      setUserId(newUserId);
    }
  }, []);

  return userId;
};

// Функция для сохранения выбора калькулятора в localStorage
export const saveCalculatorChoice = (calculatorData: any) => {
  localStorage.setItem('calculatorChoice', JSON.stringify(calculatorData));
};

// Функция для получения выбора калькулятора из localStorage
export const getCalculatorChoice = () => {
  const choice = localStorage.getItem('calculatorChoice');
  return choice ? JSON.parse(choice) : null;
};
