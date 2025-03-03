import useCharacter from "../hooks/useCharacter";

export const MainCharacter = () => {
  const { selectedAvatar } = useCharacter();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Main Character</h1>
      {selectedAvatar ? (
        <img className="w-24" src={selectedAvatar} alt="Selected Avatar" />
      ) : (
        <p>No avatar selected</p>
      )}
    </div>
  );
};
