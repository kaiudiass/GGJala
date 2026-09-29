import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.inner}>
          
          <div className={styles.leftGroup}>
            <Link className={styles.logo} to="/">
              <span>gg<span className={styles.logoPrimary}>Jala</span></span>
            </Link>
          </div>

          <div className={styles.searchGroup}>
            <div className={styles.searchWrapper}>
              <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
              <input
                className={styles.searchInput}
                placeholder="Buscar jogos, contas, gift cards ou vendedores..."
                type="text"
              />
            </div>
          </div>

          <div className={styles.rightGroup}>
            <a className={styles.anunciarBtn} href="#">
              <span className={`material-symbols-outlined ${styles.anunciarIcon}`}>add_circle</span>
              <span className={styles.anunciarText}>Anunciar</span>
            </a>
            
            <button aria-label="Notificações" className={styles.iconBtn}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
              <span className={styles.notificationDot}></span>
            </button>
            
            <a aria-label="Carrinho de Compras" className={styles.iconBtn} href="#">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_bag</span>
              <span className={styles.cartBadge}>2</span>
            </a>
            
            <div className={styles.profileWrapper}>
              <a className={styles.profileLink} href="#">
                <img
                  alt="Profile"
                  className={styles.profileImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1zH4lM7To0cj6KM1IzApkqJa25RcI01tsqUBwMmOJGXTNRiAKs6pYQJFChfneqTr5C2qU5uJkf3GSnYfUmMq8D77XyLRiXrWJtJq8No2dpXym97qZvPWiInz9xlazSN-YDfgAH7d1_ROQAYvimKs5w0oEvJXYdhIqgBNEqGSwh_-IWAVGgidcbXqDrIpQ0GDzG86a3VmQnSYVnHd2P05a_iaT8uJw0BdcaE1RJ3rOjVPRUEQQVHMYuQ"
                />
                <span className={styles.profileOnlineDot}></span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
