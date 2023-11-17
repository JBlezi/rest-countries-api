import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for dark mode preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false; // Convert string to boolean
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="h-24 p-8 bg-white dark:bg-gray-800 flex justify-between items-center shadow dark:bg-dark-blue dark:text-white">
      <h1 className='font-bold text-gray-900 dark:text-gray-100'>Where in the world?</h1>
      <div className='flex items-center space-x-2 cursor-pointer' onClick={toggleDarkMode}>
        {darkMode ? (
          <>
            <FaRegSun className="text-gray-900 dark:text-gray-100" />
            <p className="text-gray-900 dark:text-gray-100">Light Mode</p>
          </>
        ) : (
          <>
            <FaRegMoon className="text-gray-900 dark:text-gray-100" />
            <p className="text-gray-900 dark:text-gray-100">Dark Mode</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
