import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  };

  return (
    <div className={styles.page}>
      <PageBanner
        emoji="📞"
        title="تواصل معنا"
        subtitle="فريقنا جاهز للإجابة على جميع استفساراتك في أقل من 24 ساعة"
        breadcrumb={['الرئيسية', 'تواصل معنا']}
      />

      <div className={styles.content}>
        {/* Info cards */}
        <aside className={styles.info}>
          {[
            { icon: '📍', title: 'العنوان', lines: ['القاهرة، شارع التحرير، مبنى 14', 'الدور الثالث، بجانب المستشفى التعليمي'] },
            { icon: '📞', title: 'الهاتف', lines: ['01000 123 456 (خدمة العملاء)', '01111 987 654 (دعم طبي)'] },
            { icon: '✉️', title: 'البريد الإلكتروني', lines: ['info@medishield.eg', 'support@medishield.eg'] },
            { icon: '🕐', title: 'ساعات العمل', lines: ['السبت – الخميس: 9 صباحاً – 9 مساءً', 'الجمعة: 2 ظهراً – 9 مساءً'] },
          ].map((card, i) => (
            <div key={i} className={styles.infoCard}>
              <span className={styles.infoIcon}>{card.icon}</span>
              <div>
                <h4>{card.title}</h4>
                {card.lines.map((l, j) => <p key={j}>{l}</p>)}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className={styles.mapBox}>
            <div className={styles.mapPlaceholder}>
              <span>🗺️</span>
              <p>خريطة الموقع</p>
              <span>القاهرة، مصر</span>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✅</div>
              <h3>تم إرسال رسالتك بنجاح!</h3>
              <p>شكراً لتواصلك معنا. سيرد عليك فريقنا خلال 24 ساعة على أقصى تقدير.</p>
              <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}>
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>أرسل رسالتك</h2>
                <p className={styles.formDesc}>املأ النموذج وسنعود إليك في أقرب وقت ممكن</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>الاسم الكامل *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="أدخل اسمك الكامل" required />
                  </div>
                  <div className={styles.field}>
                    <label>رقم الهاتف</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="01xxxxxxxxx" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>البريد الإلكتروني *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="example@email.com" required />
                </div>
                <div className={styles.field}>
                  <label>موضوع الرسالة</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">اختر الموضوع...</option>
                    <option value="order">استفسار عن طلب</option>
                    <option value="product">استفسار عن منتج</option>
                    <option value="return">طلب إرجاع</option>
                    <option value="technical">دعم فني</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>الرسالة *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..." rows={5} required />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <><span className={styles.spinner} /> جاري الإرسال...</>
                  ) : (
                    <>إرسال الرسالة <span>→</span></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqHead}>
            <span className={styles.label}>الأسئلة الشائعة</span>
            <h2>أكثر الأسئلة تكراراً</h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'كم يستغرق التوصيل؟', a: 'نوصّل خلال 24-48 ساعة داخل القاهرة والجيزة، و2-4 أيام لباقي المحافظات.' },
              { q: 'هل يمكنني إرجاع المنتج؟', a: 'نعم، نقبل الإرجاع خلال 14 يوماً من الاستلام شريطة أن يكون المنتج في حالته الأصلية.' },
              { q: 'هل المنتجات معتمدة طبياً؟', a: 'جميع منتجاتنا حاصلة على اعتماد هيئة الدواء المصرية وشهادات ISO الدولية.' },
              { q: 'ما طرق الدفع المتاحة؟', a: 'نقبل الدفع بالبطاقات البنكية (فيزا/ماستر)، فوري، وإنستاباي، والدفع عند الاستلام.' },
            ].map((item, i) => (
              <div key={i} className={styles.faqCard}>
                <div className={styles.faqQ}>
                  <span className={styles.faqIcon}>❓</span>
                  <h4>{item.q}</h4>
                </div>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
