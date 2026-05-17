import styles from './Cart.module.css';

const Cart = ({ items, onClose, onRemove, onQty }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={styles.cart}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>سلة المشتريات</h2>
          <button className={styles.close} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛒</span>
              <p>السلة فارغة</p>
              <span>ابدأ بإضافة منتجات طبية</span>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemEmoji}>{item.emoji}</div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>{(item.price * item.qty).toLocaleString('ar-EG')} ج.م</p>
                  <div className={styles.qtyRow}>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, item.qty - 1)}>−</button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, item.qty + 1)}>+</button>
                  </div>
                </div>
                <button className={styles.remove} onClick={() => onRemove(item.id)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                    <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>الإجمالي</span>
              <span className={styles.totalAmount}>{total.toLocaleString('ar-EG')} ج.م</span>
            </div>
            <button className={styles.checkoutBtn}>
              إتمام الشراء
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <p className={styles.note}>🔒 دفع آمن ومشفّر • شحن سريع لكل مصر</p>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
