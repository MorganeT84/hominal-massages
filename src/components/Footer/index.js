import Link from 'next/link';
import styles from './footer.module.scss';


export default function Footer() {

  return (
    <footer className={styles.navbottom}>
  <div className={styles.info_andco}>
      <div className={styles.link_website}>
        <Link href="/plan-du-site" title='plan du site'>Plan du site</Link>
        <Link href="/politique-de-confidentialite" title='page politique de confidentialité'>Politique de confidentialité</Link>
        <Link href="/mentions-legales" title='page mentions légales'>Mentions légales</Link>
      </div>
      
      <div className={styles.reseaux}>
        <a href="#" title="lien de redirection vers facebook" className={styles.social_media}><i className={`fab fa-facebook ${styles['fa_facebook']}`}></i></a>
        <a href="#" title="lien de redirection vers linkedin" className={styles.social_media}><i className={`fab fa-linkedin-in ${styles['fa_linkedin_in']}`}></i></a>
      </div>
    </div>
    </footer>
  )

};

