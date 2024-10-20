import { ChangeEvent, useState } from 'react';
import styles from './input.module.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, value, onChange}: InputProps): JSX.Element => {
  return <input className={styles.input} placeholder={placeholder} value={value ? value : ''} onChange={onChange}></input>
}

export default Input;

// class="form-control width-100%" type="text" name="input-name" id="input-name"