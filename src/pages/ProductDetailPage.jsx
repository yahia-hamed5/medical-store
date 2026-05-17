import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import styles from './ProductDetailPage.module.css';

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" width="16" height="16"
    fill={filled ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" width="20" height="20"
    fill={filled ? '#ef4444' : 'none'}
    stroke={filled ? '#ef4444' : 'currentColor'} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ProductDetailPage = ({ cartItems, addToCart, isFav, onToggleFav }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty]           = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  if (!product) return (
    <div className={styles.notFound}>
      <span>😕</span>
      <p>المنتج غير موجود</p>
      <Link to="/products" className={styles.backBtn}>تصفّح المنتجات</Link>
    </div>
  );

  const isInCart = cartItems.some(i => i.id === product.id);
  const fav      = isFav(product.id);
  const related  = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbInner}>
          <Link to="/">الرئيسية</Link>
          <span>›</span>
          <Link to="/products">المنتجات</Link>
          <span>›</span>
          <span className={styles.current}>{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <div className={styles.main}>
        {/* Visual */}
        <div className={styles.visual} style={{ background: product.color }}>
          <span className={styles.productEmoji}>{product.emoji}</span>
          {product.badge && (
            <span className={styles.badge} style={{ background: product.badgeColor }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < Math.floor(product.rating)} />)}
            </div>
            <span className={styles.ratingNum}>{product.rating}</span>
            <span className={styles.ratingCount}>({product.reviews} تقييم)</span>
          </div>

          <div className={styles.nameRow}>
            <h1 className={styles.name}>{product.name}</h1>
            <button
              className={`${styles.favBtn} ${fav ? styles.favActive : ''}`}
              onClick={() => onToggleFav(product)}
              title={fav ? 'إزالة من المفضلة' : 'أضف للمفضلة'}
            >
              <HeartIcon filled={fav} />
              <span>{fav ? 'في المفضلة' : 'أضف للمفضلة'}</span>
            </button>
          </div>

          <p className={styles.desc}>{product.description}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{product.price.toLocaleString('ar-EG')} ج.م</span>
            {product.oldPrice && (
              <>
                <span className={styles.oldPrice}>{product.oldPrice.toLocaleString('ar-EG')} ج.م</span>
                <span className={styles.saveBadge}>
                  وفّر {(product.oldPrice - product.price).toLocaleString('ar-EG')} ج.م
                </span>
              </>
            )}
          </div>

          <span className={product.inStock ? styles.inStock : styles.outStock}>
            {product.inStock ? '✅ متوفر في المخزن' : '❌ غير متوفر حالياً'}
          </span>

          {product.inStock && (
            <div className={styles.actions}>
              <div className={styles.qtyControl}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <button
                className={`${styles.addBtn} ${isInCart ? styles.addedBtn : ''}`}
                onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }}
              >
                {isInCart ? '✅ في السلة' : '🛒 أضف إلى السلة'}
              </button>
            </div>
          )}

          <div className={styles.features}>
            {[
              { icon: '🚚', text: 'شحن مجاني للطلبات فوق 500 ج.م' },
              { icon: '↩️', text: 'إرجاع مجاني خلال 14 يوم' },
              { icon: '🛡️', text: 'ضمان سنة كاملة' },
              { icon: '🔒', text: 'دفع آمن ومشفّر' },
            ].map((f, i) => (
              <div key={i} className={styles.feature}>
                <span>{f.icon}</span><span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsSection}>
        <div className={styles.tabsInner}>
          <div className={styles.tabsNav}>
            {[
              { id: 'desc',    label: 'الوصف التفصيلي' },
              { id: 'specs',   label: 'المواصفات' },
              { id: 'reviews', label: `التقييمات (${product.reviews})` },
            ].map(tab => (
              <button key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'desc' && (
              <div className={styles.descTab}>
                <p>{product.description}</p>
                <p>يُعدّ هذا المنتج من أعلى الأجهزة جودةً في فئته، ويُستخدم على نطاق واسع في المستشفيات والعيادات الخاصة حول العالم.</p>
                <ul className={styles.descList}>
                  <li>دقة قياس عالية تصل إلى 99.5%</li>
                  <li>واجهة استخدام بسيطة ومريحة لجميع الفئات العمرية</li>
                  <li>مواد خام عالية الجودة مقاومة للتعقيم المتكرر</li>
                  <li>ضمان الشركة الأصلية لمدة 12 شهراً</li>
                </ul>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className={styles.specsTab}>
                {[
                  ['الوزن','320 جرام'],['الأبعاد','15 × 8 × 4 سم'],
                  ['المادة','بلاستيك طبي ABS + فولاذ مقاوم للصدأ'],
                  ['مصدر الطاقة','بطاريتان AA أو شحن USB-C'],
                  ['الضمان','12 شهراً'],['بلد المنشأ','ألمانيا'],
                  ['الاعتمادات','CE، FDA، ISO 13485'],
                ].map(([k,v], i) => (
                  <div key={i} className={styles.specRow}>
                    <span className={styles.specKey}>{k}</span>
                    <span className={styles.specVal}>{v}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className={styles.reviewsTab}>
                <div className={styles.reviewSummary}>
                  <div className={styles.reviewBig}>
                    <span className={styles.bigNum}>{product.rating}</span>
                    <div className={styles.stars}>{Array.from({length:5},(_,i)=><StarIcon key={i} filled />)}</div>
                    <span className={styles.reviewTotal}>من {product.reviews} تقييم</span>
                  </div>
                  <div className={styles.ratingBars}>
                    {[5,4,3,2,1].map(star => (
                      <div key={star} className={styles.rBar}>
                        <span>{star} ★</span>
                        <div className={styles.rBarTrack}>
                          <div className={styles.rBarFill}
                            style={{ width:`${star===5?70:star===4?20:star===3?7:2}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {[
                  { name:'د. محمد أحمد', rating:5, date:'منذ أسبوع',   text:'جهاز ممتاز جداً، دقيق في القياس. أنصح به بشدة.' },
                  { name:'سارة خالد',    rating:4, date:'منذ شهر',    text:'جودة عالية وسعر مناسب. التوصيل كان سريعاً.' },
                  { name:'أحمد رمضان',   rating:5, date:'منذ شهرين', text:'من أفضل ما اشتريته في متجر MediShield.' },
                ].map((r, i) => (
                  <div key={i} className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      <span className={styles.reviewerAvatar}>{r.name.charAt(0)}</span>
                      <div>
                        <strong>{r.name}</strong>
                        <div className={styles.stars}>{Array.from({length:5},(_,j)=><StarIcon key={j} filled={j<r.rating} />)}</div>
                      </div>
                      <span className={styles.reviewDate}>{r.date}</span>
                    </div>
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            <h3 className={styles.relatedTitle}>منتجات مشابهة</h3>
            <div className={styles.relatedGrid}>
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`}
                  className={styles.relatedCard}
                  style={{ '--accent': p.accentColor, '--bg': p.color }}>
                  <div className={styles.relCardImg}><span>{p.emoji}</span></div>
                  <div className={styles.relCardInfo}>
                    <h4>{p.name}</h4>
                    <span>{p.price.toLocaleString('ar-EG')} ج.م</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
