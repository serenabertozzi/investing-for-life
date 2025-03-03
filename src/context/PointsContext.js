import { createContext, useState } from 'react';

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [totalPoints, setTotalPoints] = useState(0);

  return (
    <PointsContext.Provider value={{ totalPoints, setTotalPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
