import React from 'react';
import styles from './ButtonForm.module.scss'


interface ButtonProps  {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonForm: React.FC<ButtonProps> = ({
    type = "button",
    children,
    onClick
}) => {
    return (
        <>
          <button className={styles.button}
            type={type}
            onClick={onClick}
          >
            {children}
          </button>
       </>
      );
    }
