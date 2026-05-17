import MedicalShieldLogo from './MedicalShieldLogo';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    {/* Background pattern */}
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />
      <div className={styles.bgGrid} />
    </div>

    <div className={styles.content}>
      <div className={styles.text}>
        <div className={styles.tagline}>
          <span className={styles.taglineDot} />
          موثوق من 15,000+ طبيب ومستشفى
        </div>
        <h1 className={styles.title}>
          أدوات طبية
          <br />
          <span className={styles.titleAccent}>بجودة استثنائية</span>
        </h1>
        <p className={styles.desc}>
          نوفّر لك أحدث الأجهزة والمعدات الطبية المعتمدة،
          <br />
          لأن صحتك تستحق الأفضل دائماً.
        </p>
        <div className={styles.actions}>
          <a href="#products" className={styles.btnPrimary}>
            تصفّح المنتجات
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </a>
          <a href="#" className={styles.btnSecondary}>
            تواصل مع طبيب
          </a>
        </div>
        <div className={styles.stats}>
          {[
            { value: '+5000', label: 'منتج طبي' },
            { value: '98%', label: 'رضا العملاء' },
            { value: '24/7', label: 'دعم فني' },
          ].map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.logoWrap}>
          <div className={styles.logoPulse} />
          <div className={styles.logoPulse2} />
          <MedicalShieldLogo size={160} animated />
        </div>
        <div className={styles.floatingCards}>
          {[
            { icon: '❤️', label: 'ضغط الدم', value: '120/80', color: '#fff0f0' },
            { icon: '🌡️', label: 'الحرارة', value: '36.8°', color: '#fff8e7' },
            { icon: '💧', label: 'أكسجين الدم', value: '98%', color: '#e0f7ff' },
          ].map((card, i) => (
            <div key={i} className={styles.floatCard} style={{ '--delay': `${i * 0.15}s`, background: card.color }}>
              <span className={styles.floatIcon}>{card.icon}</span>
              <div>
                <div className={styles.floatLabel}>{card.label}</div>
                <div className={styles.floatValue}>{card.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
