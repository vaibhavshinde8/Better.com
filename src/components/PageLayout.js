
import Header from './Header';
import styles from '../styles/PageLayout.module.css';

const PageLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />  
      <main>{children}</main> 
    </div>
  );
};

export default PageLayout;
