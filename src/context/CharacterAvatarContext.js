import { createContext, useState } from 'react';
import bee from '../assets/avatars/bee.png';

export const CharacterAvatarContext = createContext();

export const CharacterAvatarProvider = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(bee);

  return (
    <CharacterAvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
      {children}
    </CharacterAvatarContext.Provider>
  );
};
