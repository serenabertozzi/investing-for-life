import { createContext, useState } from 'react';
import bee from '../assets/avatars/bee.png';


// Create the context
export const CharacterAvatarContext = createContext();

// Create a provider component
export const CharacterAvatarProvider = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(bee);

  return (
    <CharacterAvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
      {children}
    </CharacterAvatarContext.Provider>
  );
};
