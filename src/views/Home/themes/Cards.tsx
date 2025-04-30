// components/ThemeSwitcher.tsx
import { useThemeStore } from "@/store/themeStore";
import { themes } from "../themes/themeLoader";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  const applyTheme = (selectedTheme: string) => {
    setTheme(selectedTheme as any);
  };

  // Set initial theme on component mount
  useEffect(() => {
    const themeColors = themes[theme]?.colors;
    if (themeColors) {
      document.documentElement.style.setProperty(
        "--background-color",
        themeColors.background
      );
      document.documentElement.style.setProperty(
        "--text-color",
        themeColors.text || (theme === 'dark' ? '#ffffff' : '#000000')
      );
    }
  }, [theme]);

  const themeCards = [
    {
      name: "light",
      title: "Light Mode",
      bgColor: "bg-gray-50",
      textColor: "text-gray-800",
      borderColor: "border-gray-200",
      buttonColor: "bg-gray-200 hover:bg-gray-300",
    },
    {
      name: "dark",
      title: "Dark Mode",
      bgColor: "bg-gray-900",
      textColor: "text-gray-100",
      borderColor: "border-gray-700",
      buttonColor: "bg-gray-700 hover:bg-gray-600",
    },
    {
      name: "blue",
      title: "Blue Theme",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-200 hover:bg-blue-300",
    },
    {
      name: "purple",
      title: "Purple Theme",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-200 hover:bg-purple-300",
    },
  ];

  return (
    <div 
      className="min-h-screen p-6 mx-auto transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background-color, #ffffff)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 pt-10 md:pt-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Choose Your Theme
          </h2>
          <p className={`text-lg opacity-80 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Select a color scheme that suits your style
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md sm:max-w-none mx-auto">
          {themeCards.map((card) => (
            <div
              key={card.name}
              className={`p-6 rounded-xl border-2 ${card.bgColor} ${card.textColor} ${card.borderColor} shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col`}
            >
              <div className="flex-grow">
                <h3 className={`text-xl font-semibold mb-4 ${card.textColor}`}>{card.title}</h3>
              </div>
              <button
                onClick={() => applyTheme(card.name)}
                className={`mt-4 w-full py-3 rounded-lg font-medium ${card.buttonColor} ${
                  theme === card.name ? "ring-2 ring-offset-2 ring-current scale-[1.02]" : ""
                } transition-all`}
              >
                {theme === card.name ? "✓ Currently Applied" : "Apply Theme"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;