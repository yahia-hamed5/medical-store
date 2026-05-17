import styles from './PageBanner.module.css';

const PageBanner = ({ title, subtitle, emoji, breadcrumb }) => (
  <div className={styles.banner}>
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.circle1} />
      <div className={styles.circle2} />
      <div className={styles.grid} />
    </div>
    <div className={styles.inner}>
      {breadcrumb && (
        <nav className={styles.breadcrumb}>
          {breadcrumb.map((item, i) => (
            <span key={i} className={styles.crumbItem}>
              {i > 0 && <span className={styles.crumbSep}>›</span>}
              <span className={i === breadcrumb.length - 1 ? styles.crumbActive : styles.crumb}>
                {item}
              </span>
            </span>
          ))}
        </nav>
      )}
      {emoji && <div className={styles.emoji}>{emoji}</div>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  </div>
);

export default PageBanner;
