const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessLetter,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2">
      {KEYS.map((letter) => {
        const isActive = activeLetters.includes(letter.toLowerCase());
        const isInactive = inactiveLetters.includes(letter.toLowerCase());

        return (
          <button
            key={letter}
            onClick={() => !isInactive && addGuessLetter(letter.toLowerCase())}
            className={`
              relative inline-flex items-center justify-center p-2 overflow-hidden 
              text-sm font-medium rounded-lg 
              focus:outline-none transition-all ease-in duration-75
              ${
                isActive
                  ? "bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-900"
              }
              ${isInactive ? "opacity-50 cursor-not-allowed" : ""}
              border border-gray-300
            `}
            disabled={isInactive || isActive || disabled}
          >
            <span className="block w-full h-full transition-all ease-in duration-75">
              {letter}
            </span>
          </button>
        );
      })}
    </div>
  );
}
