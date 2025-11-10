import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ fields, buttonText, colunas = 1, navigateURL}) {

  // NAVEGAR AO SUBMIT
  const navigate = useNavigate();

  return (
    // FORM TAG
    <form
      className="login-form--container"
      onSubmit={(e) => {e.preventDefault; navigate(navigateURL);}}
    >

      <div
        className="login-form--fields"
        style={{ gridTemplateColumns: `repeat(${colunas}, 1fr)` }}
      >
        {/* FORM MAPPING */}
        {fields.map((field) => (
          <div key={field.name} className="login-form--field">
            {/* FORM LABEL */}
            <label htmlFor={field.name}>{field.label}</label>

            {/* FORM INPUT/SELECT */}
            {field.type === 'select' ? (
              <select
                name={field.name}
                id={field.name}
                required
              >
                {/* SELECT OPTIONS MAPPING */}
                <option value="" disabled selected>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                required
              />
            )}
          </div>
        ))}
      </div>

      {/* SUBMIT BUTTON */}
      <button type="submit">{buttonText}</button>
    </form>
  );
}
