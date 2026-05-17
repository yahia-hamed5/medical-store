import PageBanner from '../components/PageBanner';
import styles from './AboutPage.module.css';

const timeline = [
  { year: '2015', title: 'التأسيس', desc: 'بدأت رحلة MediShield بمتجر صغير في القاهرة بهدف توفير أدوات طبية موثوقة.' },
  { year: '2017', title: 'التوسّع الوطني', desc: 'وصلنا إلى 15 محافظة مصرية مع شبكة توزيع تضم 200 نقطة بيع.' },
  { year: '2019', title: 'المتجر الإلكتروني', desc: 'أطلقنا منصتنا الرقمية لتوفير خدمة التوصيل لكل أنحاء الجمهورية.' },
  { year: '2021', title: 'شراكات دولية', desc: 'عقدنا شراكات مع كبرى الشركات الأوروبية والأمريكية المتخصصة في الأجهزة الطبية.' },
  { year: '2024', title: 'الريادة', desc: 'أصبحنا الوجهة الأولى للأدوات الطبية في مصر بثقة أكثر من 15,000 طبيب ومستشفى.' },
];

const team = [
  { name: 'د. أحمد السيد', role: 'المؤسس والرئيس التنفيذي', emoji: '👨‍⚕️', desc: 'طبيب جراح بخبرة 20 عاماً وخبير في تقنيات الأجهزة الطبية.' },
  { name: 'م. سارة حسن', role: 'مديرة العمليات', emoji: '👩‍💼', desc: 'متخصصة في سلاسل التوريد الطبية وضمان الجودة الدولية.' },
  { name: 'د. محمد علي', role: 'مدير الجودة', emoji: '👨‍🔬', desc: 'دكتوراه في الهندسة الطبية الحيوية من جامعة القاهرة.' },
  { name: 'آية خالد', role: 'مديرة التسويق', emoji: '👩‍💻', desc: 'خبرة 8 سنوات في التسويق الرقمي للقطاع الصحي.' },
];

const values = [
  { icon: '🎯', title: 'الجودة أولاً', desc: 'كل منتج يمر باختبارات صارمة قبل وصوله إليك' },
  { icon: '🤝', title: 'الشفافية', desc: 'أسعار واضحة وسياسات مفهومة بدون خداع' },
  { icon: '💡', title: 'الابتكار', desc: 'نواكب أحدث التطورات في عالم الطب والتكنولوجيا' },
  { icon: '❤️', title: 'الإنسانية', desc: 'مهمتنا الحقيقية هي خدمة صحة المجتمع المصري' },
];

const AboutPage = () => (
  <div className={styles.page}>
    <PageBanner
      emoji="🏥"
      title="عن MediShield"
      subtitle="قصتنا، مهمتنا، وفريقنا الذي يعمل كل يوم لخدمة الصحة في مصر"
      breadcrumb={['الرئيسية', 'عن المتجر']}
    />

    {/* Mission */}
    <section className={styles.mission}>
      <div className={styles.missionInner}>
        <div className={styles.missionText}>
          <span className={styles.label}>مهمتنا</span>
          <h2 className={styles.h2}>نؤمن أن الرعاية الصحية<br /><em>حق لا رفاهية</em></h2>
          <p>منذ تأسيسنا عام 2015، ونحن نعمل يومياً لتقريب المسافة بين الطبيب والأداة الصحيحة، وبين المريض والجهاز الموثوق. نختار كل منتج بعناية، ونضمن جودته قبل أن يصل إلى يديك.</p>
          <p>فريقنا من الأطباء والمهندسين والمتخصصين يراجع كل منتج على حدة لضمان معايير السلامة الدولية.</p>
          <div className={styles.missionStats}>
            {[
              { n: '+5,000', l: 'منتج طبي' },
              { n: '+15,000', l: 'عميل موثوق' },
              { n: '27', l: 'محافظة تغطيتها' },
              { n: '9', l: 'سنوات خبرة' },
            ].map((s, i) => (
              <div key={i} className={styles.mStat}>
                <span className={styles.mStatN}>{s.n}</span>
                <span className={styles.mStatL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.missionVisual}>
          <div className={styles.bigEmoji}>🏥</div>
          <div className={styles.mCard1}>
            <span>✅</span>
            <div>
              <strong>معتمد دولياً</strong>
              <span>ISO 13485:2016</span>
            </div>
          </div>
          <div className={styles.mCard2}>
            <span>🛡️</span>
            <div>
              <strong>مرخّص رسمياً</strong>
              <span>هيئة الدواء المصرية</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className={styles.valuesSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHead}>
          <span className={styles.label}>قيمنا</span>
          <h2 className={styles.h2}>ما يميّزنا عن غيرنا</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className={styles.timelineSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHead}>
          <span className={styles.label}>رحلتنا</span>
          <h2 className={styles.h2}>من الحلم إلى الريادة</h2>
        </div>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={`${styles.tlItem} ${i % 2 === 0 ? styles.tlRight : styles.tlLeft}`}>
              <div className={styles.tlCard}>
                <span className={styles.tlYear}>{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <div className={styles.tlDot} />
            </div>
          ))}
          <div className={styles.tlLine} />
        </div>
      </div>
    </section>

    {/* Team */}
    <section className={styles.teamSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHead}>
          <span className={styles.label}>الفريق</span>
          <h2 className={styles.h2}>العقول خلف MediShield</h2>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} className={styles.teamCard}>
              <div className={styles.teamEmoji}>{member.emoji}</div>
              <h3>{member.name}</h3>
              <span className={styles.teamRole}>{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
