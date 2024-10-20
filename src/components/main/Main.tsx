import Form from '../form/Form';
import styles from './main.module.scss';
import CV from '../cv/CV';
import { useState } from 'react';
import { TUserData, TUserRepo } from '../../utils/types';
import Spinner from '../ui/spinner/spinner';

const Main = (): JSX.Element => {
  const [userData, setUserData] = useState<Partial<TUserData> | null>(null);
  const [reposData, setReposData] = useState<Partial<TUserRepo>[] | null>(null);
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);

  return (
      <main className={styles.main}>
        <h1>Your perfect CV</h1>
        <p>
          Paste the link to your GitHub Account. Only public repos will get into your CV
        </p>
        <Form setUserData={setUserData} setReposData={setReposData} setDataIsLoading={setDataIsLoading} />
        {userData && reposData && !dataIsLoading && <CV userData={userData} reposData={reposData}/>}
        {dataIsLoading && <Spinner />}
      </main>
  )
}

export default Main