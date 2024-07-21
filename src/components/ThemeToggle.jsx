import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
      <div className="absolute top-0 right-0 p-4">
        <button onClick={toggleTheme} className="text-3xl">
          {isDarkMode ? <HiMoon /> : <HiSun />}
        </button>
      </div>
  );
}

export default ThemeToggle;