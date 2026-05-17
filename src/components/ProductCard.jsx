import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" width="16" height="16"
    fill={filled ? '#ef4444' : 'none'}
    stroke={filled ? '#ef4444' : 'currentColor'}
    strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ProductCard = ({ product, onAdd, isInCart, isFav, onToggleFav }) => {
  return (
    <div className={styles.card} style={{ '--accent': product.accentColor, '--bg': product.color }}>

      {/* Heart button */}
      <button
        className={`${styles.heartBtn} ${isFav ? styles.heartActive : ''}`}
        onClick={(e) => { e.preventDefault(); onToggleFav && onToggleFav(product); }}
        title={isFav ? 'إزالة من المفضلة' : 'أضف للمفضلة'}
      >
        <HeartIcon filled={isFav} />
      </button>

      {/* Badge */}
      {product.badge && (
        <span className={styles.badge} style={{ background: product.badgeColor }}>
          {product.badge}
        </span>
      )}

      {/* Out of stock */}
      {!product.inStock && (
        <div className={styles.outOfStock}>
          <span>غير متوفر حالياً</span>
        </div>
      )}

      {/* Image — links to detail page */}
      <Link to={`/product/${product.id}`} className={styles.imgArea}>
        <span className={styles.emoji}>{product.emoji}</span>
      </Link>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.rating}>
          <span className={styles.ratingStars} style={{ color: '#f59e0b' }}>
            {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} />)}
          </span>
          <span className={styles.ratingNum}>{product.rating}</span>
          <span className={styles.ratingCount}>({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.footer}>
          <div className={styles.prices}>
            <span className={styles.price}>{product.price.toLocaleString('ar-EG')} ج.م</span>
            {product.oldPrice && (
              <span className={styles.oldPrice}>{product.oldPrice.toLocaleString('ar-EG')}</span>
            )}
          </div>

          <button
            className={`${styles.addBtn} ${isInCart ? styles.inCart : ''}`}
            onClick={() => product.inStock && onAdd(product)}
            disabled={!product.inStock}
          >
            {isInCart ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                تمت الإضافة
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                أضف للسلة
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
