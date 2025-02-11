import React from 'react';

const Button = ({ text, type, link }) => {
  const buttonClass = type === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <a href={link} className={`btn ${buttonClass}`}>
      {text}
    </a>
  );
};

export default Button;
