import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonType {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  link?: string;
}

const Button: React.FC<ButtonType> = ({ type, text, link }) => {
  return (
    <>
      {!link ? (
        <button className={styles.button} type={type}>
          {text}
        </button>
      ) : (
        <Link className={`${styles.button} ${styles.link}`} to={link}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
