import { useState } from "react";
import styles from "./Cart.module.css";
import { toast } from "react-toastify";

const Cart = ({ items, onClose, onRemove, onQty, onClear }) => {
  const [showForm, setShowForm] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
const handleCheckout = () => {
  if (
    !customer.name ||
    !customer.phone ||
    !customer.address ||
    !customer.city
  ) {
    toast.error("يرجى إدخال جميع البيانات");
    navigator.vibrate?.(200);
    return;
  }

  const orderText = items
    .map(
      (item, index) =>
        `📦 *${index + 1}. ${item.name}*
🔢 الكمية: ${item.qty}
💰 السعر: ${(item.price * item.qty).toLocaleString("ar-EG")} ج.م`
    )
    .join("\n\n");

  const message = `
🛍️ *طلب جديد*

👤 *الاسم:* ${customer.name}
📞 *الهاتف:* ${customer.phone}
🏠 *العنوان:* ${customer.address}
📍 *المحافظة:* ${customer.city}

━━━━━━━━━━━━━━

${orderText}

━━━━━━━━━━━━━━

💵 *الإجمالي:* ${total.toLocaleString("ar-EG")} ج.م
`;

  const phoneNumber = "201555582617";

  const audio = new Audio("/sounds/success.mp3");

  const toastId = toast.loading("جاري تجهيز الطلب...", {
    position: "top-center",
  });

  setTimeout(() => {
    audio.play().catch(() => {});
    navigator.vibrate?.(100);

    toast.update(toastId, {
      render: "تم تجهيز الطلب 👌",
      type: "success",
      isLoading: false,
      autoClose: 800,
    });

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    onClear?.();

    setCustomer({
      name: "",
      phone: "",
      address: "",
      city: "",
    });

    setShowForm(false);
    onClose();
  }, 900);
};
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      {showForm && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <button
                onClick={() => setShowForm(false)}
                className="absolute left-4 top-4 text-white/80 hover:text-white"
              >
                ✕
              </button>

              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">
                  🛒
                </div>

                <h3 className="text-2xl font-bold">إتمام الطلب</h3>

                <p className="mt-1 text-sm text-white/90">
                  أدخل بياناتك لإرسال الطلب عبر واتساب
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم بالكامل"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                />

                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                />

                <input
                  type="text"
                  placeholder="المحافظة"
                  value={customer.city}
                  onChange={(e) =>
                    setCustomer({ ...customer, city: e.target.value })
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                />

                <textarea
                  rows={4}
                  placeholder="العنوان بالتفصيل"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                />
              </div>

              {/* Total */}
              <div className="mt-5 rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">إجمالي الطلب</span>
                  <span className="font-bold text-green-600">
                    {total.toLocaleString("ar-EG")} ج.م
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-2xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  إلغاء
                </button>

                <button
                  onClick={handleCheckout}
                  className="flex-1 rounded-2xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  إرسال عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <aside className={styles.cart}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>سلة المشتريات</h2>
          <button className={styles.close} onClick={onClose}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="20"
              height="20"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
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
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemEmoji}>
                  {
                    <div className="overflow-hidden w-full h-full">
                      <img
                        src={item.images[0].src}
                        alt={item.name}
                        className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-contain"
                      />
                    </div>
                  }
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    {(item.price * item.qty).toLocaleString("ar-EG")} ج.م
                  </p>
                  <div className={styles.qtyRow}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => onQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => onQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className={styles.remove}
                  onClick={() => onRemove(item.id)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="16"
                    height="16"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4h6v2" />
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
              <span className={styles.totalAmount}>
                {total.toLocaleString("ar-EG")} ج.م
              </span>
            </div>
            <button
              onClick={() => {
                console.log("Checkout data:", { customer, items, total });
                setShowForm(true);
              }}
              className={styles.checkoutBtn}
            >
              إتمام الشراء
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="18"
                height="18"
              >
                <path d="m15 18-6-6 6-6" />
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
