import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

export default function AuthForm({ fields, buttonText, colunas = 1, navigateURL }) {
  const navigate = useNavigate();

  return (
    <form
      className="auth-form"
      onSubmit={(e) => { e.preventDefault(); navigate(navigateURL); }}
    >
      <div
        className="auth-form-fields"
        style={{ gridTemplateColumns: `repeat(${colunas}, 1fr)` }}
      >
        {fields.map((field) => (
          <div key={field.name} className="auth-form-field">
            <label htmlFor={field.name}>{field.label}</label>

            {field.type === 'select' ? (
              <select name={field.name} id={field.name} required>
                <option value="" disabled selected>{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
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

      <button type="submit">{buttonText}</button>
    </form>
  );
}
