import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check local storage for the theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply the theme to the document body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;
