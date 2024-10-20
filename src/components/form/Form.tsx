import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import styles from './form.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import { linkReg } from '../../utils/constans';
import { fetchAllAndFillReposData } from '../../utils/api';
import { TUserData, TUserRepo } from '../../utils/types';

// TEST DATA
import userData from '../../mocks/userData.json';
import reposData from '../../mocks/userRepos.json';

interface FormProps {
  setUserData: React.Dispatch<React.SetStateAction<Partial<TUserData> | null>>
  setReposData: React.Dispatch<React.SetStateAction<Partial<TUserRepo>[] | null>>
  setDataIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({setUserData, setReposData, setDataIsLoading}: FormProps): JSX.Element => {
  const [inputText, setinputText] = useState('');
  const [error, setError] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setinputText(e.target.value);

    if(linkReg.test(e.target.value)) {
      setError('')
      setInputIsValid(true)
    } else {
      setError('Enter a link in the format https://github.com/username or github.com/username')
      setInputIsValid(false)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setDataIsLoading(true);
    try {
      let res;
      // setUserData(userData); // TO USE MOCK DATA
      // setReposData(reposData); // TO USE MOCK DATA
      const userName = inputText.slice(inputText.lastIndexOf('/') + 1);
      
      res = await fetchAllAndFillReposData(userName);
      
      if(res?.filledRepos) {
        const { userData, filledRepos } = res;
        
        setUserData(userData);
        setReposData(filledRepos);
      }  
    } catch(err) {
      console.log(err);
      setError(`Что-то пошло не так. Попробуйте ещё раз через несколько минут`);
    } finally {
      setDataIsLoading(false);
    }
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input placeholder="Your GitHub profile link" value={inputText} onChange={handleInput}/>
      <Button buttonText="➔" disabled={!inputIsValid} type="submit"/>
      {error && <span className={styles.error}>{error}</span>}
    </form>
  )

}

export default Form;