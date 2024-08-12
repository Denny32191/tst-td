import React, { ChangeEvent } from "react";
import styles from "./InputForm.module.scss";


interface InputProps {
  type: "text" | "number" ;
  label?: string ;
  value?: string ;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputForm: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
      <label htmlFor={label}>
        <p className={styles.text}>{label}</p>
       
        <input
        className={styles.inputs}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
  );
};