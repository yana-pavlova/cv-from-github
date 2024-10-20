import { TUserRepoLanguages } from '../../../utils/types'
import styles from './block.module.scss'

interface BlockProps {
  name: string
  description: string
  link: string
  stack: TUserRepoLanguages | null
  createdAt: string
}

const Block = ({name, description, link, stack, createdAt}: BlockProps): JSX.Element => {
  const year = new Date(createdAt).getFullYear();
  
  
  return (
    <li className={`${styles.block} no-page-break`}>
      <h3 className={styles.title}>{name} — {year}</h3>
      {description && <p>{description}</p>}
      {link && <p><a href={link} className={styles.link} target="_blank">{link}</a></p>}
      <div className={styles.tags}>
        {
          stack && Object.keys(stack).map((key, i) => {
            return <span key={i} className={styles.tag}>{key} </span>
          })
        }
      </div>
    </li>
  )
}

export default Block;