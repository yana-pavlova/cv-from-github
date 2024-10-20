import { TUserData, TUserRepo } from '../../utils/types';
import Button from '../ui/button/Button';
import styles from './cv.module.css';
import Block from '../ui/cv-block/Block';
import generatePDF from '../../utils/generatePDF';

interface CVProps {
  userData: Partial<TUserData> | null;
  reposData: Partial<TUserRepo>[] | null;
}

const CV = ({userData, reposData} : CVProps): JSX.Element => {
  
  return (
    <article className={styles.article}>
      <div id='pdf' className={styles.resume}>
        <div className={styles.userHeader}>
          {/* {userData?.avatar_url && <img className={styles.userAvatar} src={userData.avatar_url} alt="user avatar from github profile" />} */}
          {/* <ul className={styles.userDescription}>
            {userData?.name && <h2 className={styles.userName}>{userData.name}</h2>}
            {userData?.bio && <p>{userData.bio}</p>}
            {userData?.followers && <p>{userData.followers} followers on GitHub</p>}
            {userData?.public_repos && <p>{userData.public_repos} repos</p>}
          </ul> */}
        </div>
        <div className={styles.projects}>
          <h2>Own projects</h2>
          <ul className={styles.projectDescription}>
            {
              reposData?.map((repo) => {
                if(!repo.fork) return <Block key={repo.id} name={repo.name || ""} description={repo.description || ""} link={repo.html_url || ""} stack={repo.stack || null} createdAt={repo.created_at || ""}/>
                return
              })
            }
          </ul>
        </div>
        <div className={styles.projects}>
          <h2>Contributing to open source projects</h2>
          <ul className={styles.projectDescription}>
            {
              reposData?.map((repo) => {
                if(repo.fork) return <Block key={repo.id} name={repo.name || ""} description={repo.description || ""} link={repo.html_url || ""} stack={repo.stack || null} createdAt={repo.created_at || ""}/>
                return
              })
          }
          </ul>
        </div>
      </div>
      <Button onclick={generatePDF} buttonText='Download pdf' disabled={false} type='button' extraClass='flexSelfCentered' />
    </article>
  )
}

export default CV;