import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MedicalShieldLogo from './MedicalShieldLogo';
import styles from './Header.module.css';

const Header = ({ cartCount, favCount, onCartToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <MedicalShieldLogo size={44} />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Medical Shield</span>
            <span className={styles.logoSub}>متجر الأدوات الطبية</span>
          </div>
        </Link>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink to="/"          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} end>الرئيسية</NavLink>
          <NavLink to="/products"  className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>المنتجات</NavLink>
          <NavLink to="/about"     className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>عن المتجر</NavLink>
          <NavLink to="/contact"   className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>تواصل معنا</NavLink>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>

          {/* Favorites */}
          <Link to="/favorites" className={styles.iconBtn} title="المفضلة">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {favCount > 0 && (
              <span className={`${styles.badge} ${styles.favBadge}`}>{favCount}</span>
            )}
          </Link>

          {/* Cart */}
          <button className={`${styles.iconBtn} ${styles.cartBtn}`} onClick={onCartToggle} title="السلة">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className={`${styles.badge} ${styles.cartBadge}`}>{cartCount}</span>
            )}
          </button>

          {/* Hamburger */}
          <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="القائمة">
            <span className={menuOpen ? styles.burgerX : ''} />
            <span className={menuOpen ? styles.burgerX2 : ''} />
            <span className={menuOpen ? styles.burgerX3 : ''} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
