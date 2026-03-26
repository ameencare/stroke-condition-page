import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star, Clock, Zap, TrendingUp, CalendarCheck, Brain, Activity, Sparkles } from "lucide-react";
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
    icon: Brain,
    title: "النافذة الذهبية",
    timeLabel: "24 – 48 ساعة",
    highlight: true,
    label: "الوقت الذهبي",
    color: "primary" as const,
    points: ["بدء التأهيل", "تقييم شامل", "حركة بسيطة"],
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: "التأهيل المبكر",
    timeLabel: "أيام – أسابيع",
    highlight: false,
    label: "الاستمرارية",
    color: "secondary" as const,
    points: ["علاج يومي", "تقوية وحركة", "زيادة تدريجية"],
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "التعافي الأقصى",
    timeLabel: "أول 3 أشهر",
    highlight: true,
    label: "أقصى تحسّن",
    color: "primary" as const,
    points: ["تحسن ملحوظ", "علاج مكثف", "استقلالية أكبر"],
  },
  {
    step: 4,
    icon: Activity,
    title: "التعافي المستمر",
    timeLabel: "3 – 6+ أشهر",
    highlight: false,
    label: "الصبر مفتاح",
    color: "muted-foreground" as const,
    points: ["تحسن أبطأ", "تعديل نمط الحياة", "التزام مستمر"],
  },
];

const PhysiotherapyRoleSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
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

        {/* Benefits Grid */}
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

        {/* Golden Time Header */}
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
            رحلة التعافي بعد الجلطة
          </h3>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            كل مرحلة مهمة — ابدأ مبكرًا واستمر بثبات
          </p>
        </motion.div>

        {/* Horizontal Journey Map */}
        <div className="mx-auto max-w-5xl">
          {/* Desktop: horizontal flow */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-[3.25rem] right-[10%] left-[10%] h-0.5 bg-gradient-to-l from-primary/40 via-secondary/30 to-primary/40 z-0" />
              
              <div className="grid grid-cols-5 gap-3 relative z-10">
                {journeyStages.map((stage, i) => {
                  const isHighlight = stage.highlight;
                  return (
                    <motion.div
                      key={stage.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease }}
                      className="flex flex-col items-center group">
                      
                      {/* Step number */}
                      <div className={`mb-2 text-xs font-bold rounded-full px-2 py-0.5 ${
                        isHighlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {stage.step}
                      </div>

                      {/* Icon node */}
                      <div className={`relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] transition-all duration-300 mb-4 ${
                        isHighlight
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_32px_hsl(var(--primary)/0.45)] group-hover:scale-110"
                          : "border-border bg-card text-primary group-hover:border-primary/40 group-hover:scale-105"
                      }`}>
                        <stage.icon className="h-6 w-6" />
                        {isHighlight && (
                          <motion.div
                            className="absolute -inset-1 rounded-full border-2 border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Card */}
                      <div className={`w-full rounded-2xl p-4 text-center transition-all duration-300 group-hover:-translate-y-1 ${
                        isHighlight
                          ? "bg-primary/[0.06] border border-primary/20 shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.15)] group-hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.25)]"
                          : "bg-card group-hover:shadow-lg"
                      }`}
                      style={!isHighlight ? { boxShadow: 'var(--shadow-card)' } : undefined}>
                        
                        {/* Time badge */}
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold mb-2 ${
                          isHighlight ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                        }`}>
                          <Clock className="h-2.5 w-2.5" />
                          {stage.timeLabel}
                        </span>

                        <h4 className={`text-sm font-bold mb-1 ${isHighlight ? "text-primary" : "text-foreground"}`}>
                          {stage.title}
                        </h4>

                        {isHighlight && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-secondary mb-2">
                            <Sparkles className="h-2.5 w-2.5" />
                            {stage.label}
                          </span>
                        )}

                        <div className="space-y-1 mt-2">
                          {stage.points.map((p, pi) => (
                            <p key={pi} className="text-[11px] leading-snug text-muted-foreground">{p}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll cards */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {journeyStages.map((stage, i) => {
                const isHighlight = stage.highlight;
                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease }}
                    className="snap-center shrink-0 w-[72vw] max-w-[280px]">
                    
                    <div className={`rounded-2xl p-5 h-full transition-all duration-300 ${
                      isHighlight
                        ? "bg-primary/[0.06] border border-primary/20 shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.15)]"
                        : "bg-card"
                    }`}
                    style={!isHighlight ? { boxShadow: 'var(--shadow-card)' } : undefined}>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 shrink-0 ${
                          isHighlight
                            ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.3)]"
                            : "border-border bg-card text-primary"
                        }`}>
                          <stage.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            isHighlight ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                          }`}>
                            <Clock className="h-2.5 w-2.5" />
                            {stage.timeLabel}
                          </span>
                          <h4 className={`text-sm font-bold mt-0.5 ${isHighlight ? "text-primary" : "text-foreground"}`}>
                            {stage.title}
                          </h4>
                        </div>
                      </div>

                      {isHighlight && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-secondary mb-2">
                          <Sparkles className="h-3 w-3" />
                          {stage.label}
                        </span>
                      )}

                      <div className="space-y-1.5">
                        {stage.points.map((p, pi) => (
                          <div key={pi} className="flex items-center gap-2">
                            <span className={`h-1 w-1 rounded-full shrink-0 ${isHighlight ? "bg-primary" : "bg-secondary"}`} />
                            <span className="text-xs text-muted-foreground">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Scroll hint */}
            <p className="text-center text-xs text-muted-foreground/50 mt-2">← اسحب لرؤية المزيد →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
