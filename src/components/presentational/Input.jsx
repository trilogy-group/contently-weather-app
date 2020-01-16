import React from 'react';

// Reusable input component that takes in label and placeholder,
//as well as event handler func.
const Input = ({ label, placeholder, handleChange, onSubmit }) => {
  return (
    <>
      <label className="label">{label}</label>
      <input
        className="input is-rounded"
        type="text"
        placeholder={placeholder}
        onChange={e => handleChange(e)}
        onKeyDown={e => e.key === 'Enter' && onSubmit()}
      />
      <br />
    </>
  );
};

export default Input;
