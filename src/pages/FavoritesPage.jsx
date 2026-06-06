import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import styles from "./FavoritesPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill={filled ? "#ef4444" : "none"}
    stroke={filled ? "#ef4444" : "currentColor"}
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const FavoritesPage = ({ favorites, onToggleFav, addToCart, cartItems }) => {
  return (
    <div className={styles.page}>
      <PageBanner
        emoji="❤️"
        title="قائمة المفضلة"
        subtitle="كل المنتجات التي أعجبتك في مكان واحد"
        breadcrumb={["الرئيسية", "المفضلة"]}
      />

      <div className={styles.content}>
        {favorites.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyHeart}>
              <svg
                viewBox="0 0 24 24"
                width="64"
                height="64"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h2>قائمة المفضلة فارغة</h2>
            <p>
              لم تُضف أي منتجات بعد. تصفّح منتجاتنا واضغط على ❤️ لحفظها هنا.
            </p>
            <Link to="/products" className={styles.browseBtn}>
              تصفّح المنتجات
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.topBar}>
              <span className={styles.count}>
                {favorites.length} منتج في المفضلة
              </span>
              <button
                className={styles.addAllBtn}
                onClick={() => favorites.forEach((p) => addToCart(p))}
              >
                🛒 إضافة الكل إلى السلة
              </button>
            </div>

            <div className={styles.grid}>
              {favorites.map((product, i) => {
                const isInCart = cartItems.some((ci) => ci.id === product.id);
                return (
                  <div
                    key={product.id}
                    className={`group ${styles.card}`}
                    style={{
                      "--accent": product.accentColor,
                      "--bg": product.color,
                      animationDelay: `${i * 0.07}s`,
                    }}
                  >
                    {/* Remove from fav */}
                    <button
                      className={styles.heartBtn}
                      onClick={() => onToggleFav(product)}
                      title="إزالة من المفضلة"
                    >
                      <HeartIcon filled />
                    </button>

                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={styles.badge}
                        style={{ background: product.badgeColor }}
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Image */}
                    <Link
                      to={`/product/${product.id}`}
                      className={styles.imgArea}
                    >
                      {product.images?.length === 1 && (
                        <div className="overflow-hidden w-full h-full">
                          <img
                            src={product.images[0].src}
                            alt={product.name}
                            className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-contain"
                          />
                        </div>
                      )}
                      {product.images?.length === 2 && (
                        <div className="relative overflow-hidden w-full h-full">
                          <img
                            src={product.images[0].src}
                            alt={product.name}
                            className="
      w-full h-full object-contain
      transition-all duration-700 ease-out
      opacity-100 scale-100
      group-hover:opacity-0 group-hover:scale-95
    "
                          />

                          <img
                            src={product.images[1].src}
                            alt={product.name}
                            className="
      absolute inset-0
      w-full h-full object-contain
      transition-all duration-700 ease-out
      opacity-0 scale-110
      group-hover:opacity-100 group-hover:scale-100
    "
                          />
                        </div>
                      )}

                      {product.images.length > 2 && (
                        <Swiper
                          className={`w-full h-full `}
                          modules={[Navigation, Pagination]}
                          spaceBetween={0}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          onSwiper={(swiper) => console.log(swiper)}
                          onSlideChange={() => console.log("slide change")}
                        >
                          {product.images.map((img, index) => (
                            <SwiperSlide className="w-full h-full" key={index}>
                              <img
                                src={img.src}
                                className="w-full h-full object-contain"
                                alt={product.name}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                    </Link>

                    {/* Info */}
                    <div className={styles.info}>
                      <div className={styles.ratingRow}>
                        <span style={{ color: "#f59e0b", fontSize: "0.85rem" }}>
                          {"★".repeat(Math.round(product.rating))}
                        </span>
                        <span className={styles.ratingNum}>
                          {product.rating}
                        </span>
                        <span className={styles.ratingCount}>
                          ({product.reviews})
                        </span>
                      </div>

                      <Link to={`/product/${product.id}`}>
                        <h3 className={styles.name}>{product.name}</h3>
                      </Link>
                      <p className={styles.desc}>{product.description}</p>

                      <div className={styles.footer}>
                        <div>
                          <span className={styles.price}>
                            {product.price.toLocaleString("ar-EG")} ج.م
                          </span>
                          {product.oldPrice && (
                            <span className={styles.oldPrice}>
                              {product.oldPrice.toLocaleString("ar-EG")}
                            </span>
                          )}
                        </div>
                        <button
                          className={`${styles.addBtn} ${isInCart ? styles.addedBtn : ""}`}
                          onClick={() => product.inStock && addToCart(product)}
                          disabled={!product.inStock}
                        >
                          {!product.inStock
                            ? "نفد"
                            : isInCart
                              ? "✓ في السلة"
                              : "+ السلة"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
