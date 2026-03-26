import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star, Clock, Zap, Stethoscope, TrendingUp, CalendarCheck, Brain, BedDouble, Activity, Sparkles, ChevronLeft } from "lucide-react";
import benefitsImage from "@/assets/benefits-exercises.jpg";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  { icon: Bike, title: "استعادة الحركة تدريجيًا" },
  { icon: Dumbbell, title: "تقوية العضلات" },
  { icon: ArrowUp, title: "تحسين التوازن وتقليل خطر السقوط" },
  { icon: Footprints, title: "إعادة تعلم المشي والأنشطة اليومية" },
];

const journeyStages = [
  {
    step: 1,
    icon: Zap,
    title: "المرحلة الحادة",
    timeLabel: "0 – 24 ساعة",
    highlight: false,
    milestone: "ابدأ مبكرًا",
    points: [
      "رعاية طارئة واستقرار الحالة",
      "حماية الدماغ أمر بالغ الأهمية",
      "تدخل طبي فوري",
    ],
  },
  {
    step: 2,
    icon: Brain,
    title: "النافذة الذهبية المبكرة",
    timeLabel: "24 – 48 ساعة",
    highlight: true,
    milestone: "الوقت الذهبي",
    points: [
      "بدء التأهيل فور الاستقرار",
      "تقييم أولي من فريق متعدد التخصصات",
      "بدء الحركة البسيطة والوضعيات العلاجية",
    ],
  },
  {
    step: 3,
    icon: CalendarCheck,
    title: "مرحلة التأهيل المبكر",
    timeLabel: "أيام إلى أسابيع",
    highlight: false,
    milestone: "الاستمرارية مفتاح النجاح",
    points: [
      "علاج طبيعي يومي (~5 أيام/أسبوع)",
      "التركيز على الحركة والقوة والوظائف الأساسية",
      "زيادة تدريجية في النشاط",
    ],
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "فترة التعافي الأقصى",
    timeLabel: "أول 3 أشهر",
    highlight: true,
    milestone: "أقصى تحسّن",
    points: [
      "التحسن الأبرز يحدث في هذه الفترة",
      "العلاج المكثف ومشاركة المريض هما المفتاح",
      "نتائج ملموسة في الحركة والاستقلالية",
    ],
  },
  {
    step: 5,
    icon: Activity,
    title: "التعافي المستمر",
    timeLabel: "3 – 6 أشهر وأكثر",
    highlight: false,
    milestone: "التعافي يحتاج صبرًا",
    points: [
      "استمرار التحسن بمعدل أبطأ",
      "علاج طويل الأمد وتعديلات في نمط الحياة",
      "التزام المريض عامل حاسم",
    ],
  },
];

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
          className="mx-auto max-w-4xl rounded-3xl bg-card overflow-hidden mb-16"
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

        {/* Golden Time Journey Map */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
          className="mx-auto max-w-4xl text-center mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            الوقت الذهبي للتعافي
          </div>
          <h3 className="text-2xl font-bold text-foreground md:text-3xl mb-2">
            الوقت الذهبي للتعافي بعد الجلطة
          </h3>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            رحلة المريض من اللحظة الأولى إلى التعافي — كل مرحلة مهمة
          </p>
        </motion.div>

        {/* Journey Map - Horizontal Timeline */}
        <div className="mx-auto max-w-5xl overflow-x-auto pb-4">
          <div className="min-w-[800px] px-4">
            {/* Horizontal connector line */}
            <div className="relative flex items-start justify-between">
              {/* The line behind the nodes */}
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-border z-0" />

              {journeyStages.map((stage, i) => {
                const isHighlight = stage.highlight;
                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                    className="relative z-10 flex flex-col items-center"
                    style={{ width: '20%' }}>
                    
                    {/* Node */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] transition-all duration-300 ${
                        isHighlight
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                          : "border-border bg-card text-primary"
                      }`}>
                      <stage.icon className="h-5 w-5" />
                    </div>

                    {/* Content card below */}
                    <div className="mt-4 w-full">
                      <div
                        className={`rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                          isHighlight
                            ? "bg-primary/[0.06] border border-primary/20 shadow-[0_4px_24px_-8px_hsl(var(--primary)/0.15)]"
                            : "bg-card"
                        }`}
                        style={!isHighlight ? { boxShadow: 'var(--shadow-card)' } : undefined}>

                        {/* Time label + milestone */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                            isHighlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            <Clock className="h-3 w-3" />
                            {stage.timeLabel}
                          </span>
                          {isHighlight && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/15 px-2 py-0.5 text-[11px] font-bold text-secondary">
                              <Sparkles className="h-3 w-3" />
                              {stage.milestone}
                            </span>
                          )}
                        </div>

                        <h4 className={`text-sm font-bold mb-2 text-center ${
                          isHighlight ? "text-primary" : "text-foreground"
                        }`}>
                          {stage.title}
                        </h4>

                        {!isHighlight && (
                          <p className="text-[11px] text-muted-foreground/70 font-medium text-center mb-2">
                            {stage.milestone}
                          </p>
                        )}

                        <ul className="space-y-1.5">
                          {stage.points.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-1.5 text-right">
                              <ChevronLeft className={`mt-0.5 h-3 w-3 shrink-0 ${
                                isHighlight ? "text-primary/60" : "text-secondary/50"
                              }`} />
                              <span className="text-xs leading-relaxed text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
