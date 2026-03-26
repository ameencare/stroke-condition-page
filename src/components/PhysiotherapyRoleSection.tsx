import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star, Clock, Zap, Stethoscope, TrendingUp, CalendarCheck } from "lucide-react";
import benefitsImage from "@/assets/benefits-exercises.jpg";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  { icon: Bike, title: "استعادة الحركة تدريجيًا" },
  { icon: Dumbbell, title: "تقوية العضلات" },
  { icon: ArrowUp, title: "تحسين التوازن وتقليل خطر السقوط" },
  { icon: Footprints, title: "إعادة تعلم المشي والأنشطة اليومية" },
];

const timelinePhases = [
  {
    phase: "١",
    icon: Zap,
    title: "المرحلة المبكرة",
    subtitle: "خلال 24–48 ساعة بعد الاستقرار",
    color: "primary",
    points: [
      "بدء التأهيل المبكر بعد استقرار الحالة",
      "وضع خطة علاجية فردية مخصصة",
      "متابعة من فريق طبي متخصص",
    ],
  },
  {
    phase: "٢",
    icon: CalendarCheck,
    title: "مرحلة التأهيل",
    subtitle: "جلسات يومية منتظمة",
    color: "secondary",
    points: [
      "جلسات علاج طبيعي ~5 أيام/أسبوع",
      "برنامج تأهيلي شامل للحركة والتوازن",
      "تثقيف المريض حول السلامة",
    ],
  },
  {
    phase: "٣",
    icon: TrendingUp,
    title: "مرحلة التعافي",
    subtitle: "3 إلى 6 أشهر",
    color: "primary",
    points: [
      "التحسن الأكبر خلال أول 3 أشهر",
      "استمرار التحسن بمعدل أبطأ بعد ذلك",
      "فترة التعافي تختلف حسب شدة الحالة",
    ],
  },
];

const phaseColors: Record<string, { badge: string; line: string; iconBg: string; iconText: string; dotBg: string }> = {
  primary: {
    badge: "bg-primary text-primary-foreground",
    line: "bg-primary/20",
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    dotBg: "bg-primary/40",
  },
  secondary: {
    badge: "bg-secondary text-secondary-foreground",
    line: "bg-secondary/20",
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    dotBg: "bg-secondary/40",
  },
};

const PhysiotherapyRoleSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <Star className="h-4 w-4" />
            رحلتك الى العلاج
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
            كيف يساعد العلاج الطبيعي؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            العلاج الطبيعي المبكر بعد الجلطة يساعد على:
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <b.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Text content card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mx-auto max-w-4xl rounded-3xl bg-card overflow-hidden mb-12"
          style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="grid md:grid-cols-[1fr_300px]">
            <div className="p-8 md:p-10 flex items-center">
              <div className="text-right">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  برامج التأهيل تساعد المرضى على استعادة المهارات المتأثرة بالجلطة وتحسين جودة حياتهم بشكل ملحوظ.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  ويعتبر التأهيل المنزلي فعالًا، حيث يتيح للمريض التدريب في بيئته الطبيعية، مما يسهل تطبيق المهارات المكتسبة في حياته اليومية.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={benefitsImage}
                alt="جلسة علاج طبيعي منزلية - تمارين تقوية العضلات"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Golden Time Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
          className="mx-auto max-w-4xl text-center mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            الوقت الذهبي للتعافي
          </div>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            إرشادات وزارة الصحة توصي بالبدء المبكر في التأهيل لتحقيق أفضل النتائج
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl grid gap-5 md:grid-cols-3">
          {timelinePhases.map((phase, i) => {
            const colors = phaseColors[phase.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease }}
                className="relative rounded-3xl bg-card p-6 md:p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                {/* Phase number badge */}
                <div className={`absolute -top-3 right-6 flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2 text-xs font-bold ${colors.badge}`}>
                  المرحلة {phase.phase}
                </div>
                
                <div className="flex items-center gap-3 mt-2 mb-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg}`}>
                    <phase.icon className={`h-5 w-5 ${colors.iconText}`} />
                  </div>
                  <div className="text-right">
                    <h3 className="text-base font-bold text-foreground">{phase.title}</h3>
                    <p className="text-xs text-muted-foreground">{phase.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {phase.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-right">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dotBg}`} />
                      <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
