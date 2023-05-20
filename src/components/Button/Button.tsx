import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonType {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  link?: string;
  disabled?: boolean;
  secondary?: boolean;
}

const Button: React.FC<ButtonType> = ({ type, text, link, disabled, secondary }) => {
  let buttonStyles = `${styles.allButton}`;
  buttonStyles += secondary ? ` ${styles.secondary}` : ` ${styles.primary}`;
  buttonStyles += disabled ? ` ${styles.disabled}` : ``;

  return (
    <>
      {!link ? (
        <button disabled className={buttonStyles} type={type}>
          {text}
        </button>
      ) : (
        <Link className={` ${styles.link} ${buttonStyles}`} to={disabled ? '#' : link}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
