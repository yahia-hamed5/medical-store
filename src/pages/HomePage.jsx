import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import styles from './HomePage.module.css';

const HomePage = ({ cartItems, addToCart, favorites, isFav, onToggleFav }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => products.filter(p => {
    const catOk = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const searchOk = !q || p.name.includes(q) || p.description.includes(q);
    return catOk && searchOk;
  }), [activeCategory, searchQuery]);

  return (
    <div className={styles.page}>
      <Hero />

      {/* ─── Products ─── */}
      <section id="products" className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>منتجاتنا</div>
          <h2 className={styles.sectionTitle}>أدوات طبية مختارة بعناية</h2>
          <p className={styles.sectionDesc}>
            كل منتج يمر بفحص دقيق للجودة قبل عرضه — لأن الثقة أساس الصحة
          </p>
        </div>

        {/* Search bar */}
        <div className={styles.searchRow}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="ابحث عن منتج طبي..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${activeCategory === cat.id ? styles.catActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((product, i) => (
              <div key={product.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <ProductCard
                  product={product}
                  onAdd={addToCart}
                  isInCart={cartItems.some(ci => ci.id === product.id)}
                  isFav={isFav(product.id)}
                  onToggleFav={onToggleFav}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <span>🔍</span>
            <p>لا توجد نتائج تطابق بحثك</p>
            <span>جرّب كلمة مختلفة أو اختر تصنيفاً آخر</span>
          </div>
        )}

        <div className={styles.viewAll}>
          <Link to="/products" className={styles.viewAllBtn}>
            عرض جميع المنتجات
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── Trust Banner ─── */}
      <section className={styles.trustBanner}>
        <div className={styles.trustInner}>
          {[
            { icon: '🏥', title: 'معتمد طبياً',   desc: 'جميع المنتجات حاصلة على اعتماد الهيئة المصرية للدواء' },
            { icon: '🚚', title: 'شحن سريع',       desc: 'توصيل خلال 24-48 ساعة لجميع أنحاء الجمهورية' },
            { icon: '↩️', title: 'إرجاع مجاني',   desc: 'ضمان استرداد كامل خلال 14 يوماً بدون شروط' },
            { icon: '🔒', title: 'دفع آمن',        desc: 'تشفير SSL لجميع عمليات الدفع الإلكتروني' },
          ].map((item, i) => (
            <div key={i} className={styles.trustCard}>
              <span className={styles.trustIcon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
