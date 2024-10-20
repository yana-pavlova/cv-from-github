import styles from './footer.module.css';

const Footer = () => {
  return <footer className={styles.footer}>
           {/* <span className="logo">Your perfect CV</span> */}
           <span className={styles.copyright}> © 2024</span>
         </footer>
}

export default Footer;