//import Header from "../Header/index";<Header />
import Footer from "../Footer/index";
import Header from "../Header";

import styles from './layout.module.scss';


const Layout = ({ children }) => (
  <div className={styles.app}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);
export default Layout
