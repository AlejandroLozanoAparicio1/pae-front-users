import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonType {
  text: string;
  link?: string;
  disabled?: boolean;
  secondary?: boolean;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonType> = ({ type, text, link, disabled, secondary, onClick }) => {
  let buttonStyles = `${styles.allButton}`;
  buttonStyles += secondary ? ` ${styles.secondary}` : ` ${styles.primary}`;
  buttonStyles += disabled ? ` ${styles.disabled}` : ``;

  return (
    <>
      {!link ? (
        <button
          disabled={disabled}
          className={buttonStyles}
          type={type}
          onClick={onClick ? onClick : () => {}}
        >
          <span className={styles.text}>{text}</span>
        </button>
      ) : (
        <Link type={type} className={` ${styles.link} ${buttonStyles}`} to={disabled ? '#' : link}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
