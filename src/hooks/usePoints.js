import { useContext } from 'react';
import { PointsContext } from '../context/PointsContext';

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider');
  }
  return context;
};
