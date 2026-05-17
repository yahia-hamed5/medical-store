import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import styles from './ProductsPage.module.css';

const SORT_OPTIONS = [
  { value: 'default',    label: 'الافتراضي' },
  { value: 'price-asc',  label: 'السعر: الأقل أولاً' },
  { value: 'price-desc', label: 'السعر: الأعلى أولاً' },
  { value: 'rating',     label: 'الأعلى تقييماً' },
  { value: 'reviews',    label: 'الأكثر تقييماً' },
];

const ProductsPage = ({ cartItems, addToCart, isFav, onToggleFav }) => {
  const [params] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(params.get('cat') || 'all');
  const [search, setSearch]       = useState('');
  const [sort,   setSort]         = useState('default');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      const catOk   = activeCategory === 'all' || p.category === activeCategory;
      const q       = search.toLowerCase();
      const searchOk = !q || p.name.includes(q) || p.description.includes(q);
      const stockOk  = !inStockOnly || p.inStock;
      return catOk && searchOk && stockOk;
    });
    if (sort === 'price-asc')  list = [...list].sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a,b) => b.price - a.price);
    if (sort === 'rating')     list = [...list].sort((a,b) => b.rating - a.rating);
    if (sort === 'reviews')    list = [...list].sort((a,b) => b.reviews - a.reviews);
    return list;
  }, [activeCategory, search, sort, inStockOnly]);

  return (
    <div className={styles.page}>
      <PageBanner
        emoji="🏥"
        title="جميع المنتجات الطبية"
        subtitle="تصفّح أكثر من 5,000 منتج طبي معتمد بأفضل الأسعار وأعلى معايير الجودة"
        breadcrumb={['الرئيسية','المنتجات']}
      />

      <div className={styles.content}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterCard}>
            <h3 className={styles.filterTitle}>التصنيفات</h3>
            <ul className={styles.catList}>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`${styles.catItem} ${activeCategory === cat.id ? styles.catActive : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className={styles.catCount}>
                      {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.filterCard}>
            <h3 className={styles.filterTitle}>خيارات</h3>
            <label className={styles.checkLabel}>
              <input type="checkbox" className={styles.check}
                checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} />
              <span>المتوفر فقط</span>
            </label>
          </div>

          <div className={styles.filterCard}>
            <h3 className={styles.filterTitle}>نطاق السعر</h3>
            <div className={styles.priceRange}>
              <span className={styles.priceLabel}>0 ج.م</span>
              <input type="range" min="0" max="2000" defaultValue="2000" className={styles.slider} />
              <span className={styles.priceLabel}>2000 ج.م</span>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.searchWrap}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="ابحث في المنتجات..." className={styles.searchInput}
                value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className={styles.sortWrap}>
              <label className={styles.sortLabel}>ترتيب حسب:</label>
              <select className={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <span className={styles.resultCount}>{filtered.length} منتج</span>
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((product, i) => (
                <div key={product.id} style={{ animationDelay: `${i * 0.06}s` }}>
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
            <div className={styles.empty}>
              <span>🔍</span>
              <p>لا توجد منتجات مطابقة</p>
              <span>جرّب تصنيفاً آخر أو كلمة بحث مختلفة</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
