import React from 'react';

const StyledButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Click Me
    </button>
  );
};

export default StyledButton;