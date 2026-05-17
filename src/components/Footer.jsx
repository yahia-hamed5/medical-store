import { Link } from 'react-router-dom';
import MedicalShieldLogo from './MedicalShieldLogo';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Newsletter Strip */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterText}>
            <h3>اشترك في نشرتنا البريدية</h3>
            <p>احصل على أحدث العروض والمنتجات الطبية الجديدة مباشرة في بريدك</p>
          </div>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="بريدك الإلكتروني..."
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterBtn}>
              اشترك الآن
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.mainInner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <MedicalShieldLogo size={48} />
              <div>
                <span className={styles.brandName}>MediShield</span>
                <span className={styles.brandTagline}>متجر الأدوات الطبية</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              نوفّر أجود الأدوات والمعدات الطبية المعتمدة، خدمةً للكوادر الطبية والمرضى في جميع أنحاء مصر منذ 2015.
            </p>
            <div className={styles.socials}>
              {[
                { icon: <FacebookIcon />, label: 'فيسبوك' },
                { icon: <TwitterIcon />, label: 'تويتر' },
                { icon: <InstagramIcon />, label: 'إنستغرام' },
                { icon: <YoutubeIcon />, label: 'يوتيوب' },
              ].map((s, i) => (
                <a key={i} href="#" className={styles.socialLink} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className={styles.linksGrid}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>الصفحات</h4>
              <ul className={styles.colList}>
                <li><Link to="/">الرئيسية</Link></li>
                <li><Link to="/products">المنتجات</Link></li>
                <li><Link to="/about">عن المتجر</Link></li>
                <li><Link to="/contact">تواصل معنا</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>التصنيفات</h4>
              <ul className={styles.colList}>
                <li><Link to="/products?cat=diagnostic">أجهزة التشخيص</Link></li>
                <li><Link to="/products?cat=monitoring">المراقبة الطبية</Link></li>
                <li><Link to="/products?cat=surgical">الأدوات الجراحية</Link></li>
                <li><Link to="/products?cat=rehabilitation">التأهيل</Link></li>
                <li><Link to="/products?cat=protection">الوقاية والسلامة</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>خدمة العملاء</h4>
              <ul className={styles.colList}>
                <li><a href="#">سياسة الإرجاع</a></li>
                <li><a href="#">الشحن والتوصيل</a></li>
                <li><a href="#">الضمان</a></li>
                <li><a href="#">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>تواصل معنا</h4>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  <span>القاهرة، مصر — شارع التحرير، مبنى 14</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>📞</span>
                  <span>01000 123 456</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>info@medishield.eg</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>🕐</span>
                  <span>السبت – الخميس: 9ص – 9م</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {year} MediShield. جميع الحقوق محفوظة.</p>
          <div className={styles.bottomLinks}>
            <a href="#">سياسة الخصوصية</a>
            <span className={styles.sep}>·</span>
            <a href="#">شروط الاستخدام</a>
            <span className={styles.sep}>·</span>
            <a href="#">خريطة الموقع</a>
          </div>
          <div className={styles.payments}>
            {['💳', '🏦', '📱'].map((icon, i) => (
              <span key={i} className={styles.payIcon}>{icon}</span>
            ))}
            <span className={styles.payLabel}>فيزا · مدى · فوري</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

export default Footer;
