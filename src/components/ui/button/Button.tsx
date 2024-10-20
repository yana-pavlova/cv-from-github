import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  buttonText: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
  onclick?: () => void;
  extraClass?: string;
}

const Button = ({buttonText, disabled, type, onclick, extraClass}: ButtonProps): JSX.Element => {

  return <button className={clsx(styles.button, extraClass)} disabled={disabled} type={type} onClick={onclick}><span>{buttonText}</span></button>
}

export default Button;