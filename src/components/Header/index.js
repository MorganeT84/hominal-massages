import Image from 'next/legacy/image'
import { useRouter } from "next/router"
import { useState } from "react"

import styles from './header.module.scss';
import logo from '../../../public/images/logo.png'
import Link from "next/link";

export default function Header() {

  // useState to manage the appearance of the burger menu
  const [isOpen, setIsOpen] = useState(false);
  //const openMenu = () => setIsOpen(!isOpen);
  const [burgerIsOpen, setBurgerIsOpen] = useState(true);

  const burgerNavSmallScreen = () => {
    setIsOpen(!isOpen);
    setBurgerIsOpen(!burgerIsOpen);

  };

  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <Link href='/' className={styles.menu_link_logo_mobile} title='page accueil'>
          <Image
            src={logo}
            alt="logo et lien vers la page accueil"
            title="logo"
            width={170}
            height={170}
          />
        </Link>
        <nav className={
          isOpen === false
            ? styles.nav
            : styles.nav + ' ' + styles.active
        }
        >
          <ul className={styles.menu}>
            <li className={styles.menu_link}>
              <Link href='/' className={styles.menu_link_logo} title='page accueil'>
                <Image
                  src={logo}
                  alt="logo et lien vers la page accueil"
                  title="logo"
                  width={170}
                  height={170}
                />
              </Link>
            </li>
            <li>
              <Link href='/massages' className={router.pathname == "/massages" ? styles['active'] : styles['menu_link']} title='liste des massages'>Massages
              </Link>
            </li>
            <li>
              <Link href='/lieux' className={router.pathname == "/lieux" ? styles['active'] : styles['menu_link']} title='page listant les lieux de présence pour bénéficier des massages proposés par Isabelle'>Lieux
              </Link>
            </li>
            <li>
              <Link href='/qui-suis-je' className={styles.menu_link} title='Mon histoire'>Qui suis-je ?
              </Link>
            </li>
            <li>
              <Link href='/contact' className={styles.menu_link} title='page de contact et prise de rendez-vous'>Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={
            isOpen === false
              ? styles.btn
              : styles.btn + ' ' + styles.active
          }
          onClick={burgerNavSmallScreen}>
          <div className={styles.containerLines}>
            {burgerIsOpen ? (
              <>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
              </>
            ) : (
              <>
                <div className={styles.line1active}></div>
                <div className={styles.line2active}></div>
                <div className={styles.line3active}></div>
              </>
            )}
          </div>
        </button>
      </nav>
    </header>
  )

};