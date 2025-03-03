import { createContext, useState } from 'react';

// Create the context
export const CharacterAvatarContext = createContext();

// Create a provider component
export const CharacterAvatarProvider = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <CharacterAvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
      {children}
    </CharacterAvatarContext.Provider>
  );
};
