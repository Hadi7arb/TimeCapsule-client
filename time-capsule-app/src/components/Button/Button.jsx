import React from "react"; 
import './Button-module.css';

const Button = ({ children, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${isActive ? 'active' : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;