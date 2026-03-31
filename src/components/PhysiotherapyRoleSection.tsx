import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star, Clock, TrendingUp, CalendarCheck, Brain, Activity, Sparkles, AlertTriangle } from "lucide-react";
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
    icon: AlertTriangle,
    title: "البداية المبكرة",
    timeLabel: "24 – 48 ساعة",
    subtitle: "ابدأ التأهيل فورًا بعد الاستقرار",
    isCritical: true,
    colorVar: "--stage-urgent",
    colorClass: "stage-urgent",
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: "مرحلة التأهيل",
    timeLabel: "أيام – أسابيع",
    subtitle: "علاج يومي مكثف",
    isCritical: false,
    colorVar: "--stage-active",
    colorClass: "stage-active",
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "ذروة التعافي",
    timeLabel: "أول 3 أشهر",
    subtitle: "أسرع فترة تحسّن",
    isCritical: true,
    colorVar: "--stage-progress",
    colorClass: "stage-progress",
  },
  {
    step: 4,
    icon: Activity,
    title: "التعافي المستمر",
    timeLabel: "3 – 6+ أشهر",
    subtitle: "تقدّم أبطأ ومستمر",
    isCritical: false,
    colorVar: "--stage-longterm",
    colorClass: "stage-longterm",
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
          className="mx-auto max-w-4xl text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-stage-urgent/10 px-4 py-2 text-sm font-semibold text-stage-urgent">
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

        {/* Color-coded Journey Map */}
        <div className="mx-auto max-w-5xl">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-[3.5rem] right-[12%] left-[12%] h-1 rounded-full z-0"
                style={{ background: `linear-gradient(to left, hsl(var(--stage-urgent)), hsl(var(--stage-active)), hsl(var(--stage-progress)), hsl(var(--stage-longterm)))` }} />

              <div className="grid grid-cols-4 gap-4 relative z-10">
                {journeyStages.map((stage, i) => (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease }}
                    className="flex flex-col items-center group">

                    {/* Step badge */}
                    <div
                      className="mb-2 text-xs font-bold rounded-full px-2.5 py-1 text-white"
                      style={{ backgroundColor: `hsl(var(${stage.colorVar}))` }}>
                      {stage.step}
                    </div>

                    {/* Icon node */}
                    <div
                      className={`relative flex items-center justify-center rounded-full border-[3px] text-white transition-all duration-300 mb-5 ${
                        stage.isCritical
                          ? "h-[4.5rem] w-[4.5rem] group-hover:scale-110"
                          : "h-14 w-14 group-hover:scale-105"
                      }`}
                      style={{
                        borderColor: `hsl(var(${stage.colorVar}))`,
                        backgroundColor: `hsl(var(${stage.colorVar}))`,
                        boxShadow: stage.isCritical
                          ? `0 0 30px hsl(var(${stage.colorVar}) / 0.4), 0 0 60px hsl(var(${stage.colorVar}) / 0.15)`
                          : `0 0 16px hsl(var(${stage.colorVar}) / 0.2)`,
                      }}>
                      <stage.icon className={stage.isCritical ? "h-8 w-8" : "h-6 w-6"} />
                      {stage.isCritical && (
                        <motion.div
                          className="absolute -inset-1.5 rounded-full border-2"
                          style={{ borderColor: `hsl(var(${stage.colorVar}) / 0.4)` }}
                          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full rounded-2xl p-5 text-center transition-all duration-300 group-hover:-translate-y-1 ${
                        stage.isCritical ? "border-2" : "bg-card"
                      }`}
                      style={stage.isCritical
                        ? {
                          borderColor: `hsl(var(${stage.colorVar}) / 0.3)`,
                          backgroundColor: `hsl(var(${stage.colorVar}) / 0.06)`,
                          boxShadow: `0 8px 32px -8px hsl(var(${stage.colorVar}) / 0.2)`,
                        }
                        : { boxShadow: 'var(--shadow-card)' }
                      }>

                      {/* Time badge */}
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold mb-3 text-white"
                        style={{ backgroundColor: `hsl(var(${stage.colorVar}))` }}>
                        <Clock className="h-2.5 w-2.5" />
                        {stage.timeLabel}
                      </span>

                      <h4
                        className="text-base font-bold mb-1.5"
                        style={{ color: `hsl(var(${stage.colorVar}))` }}>
                        {stage.title}
                      </h4>

                      {stage.isCritical && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-stage-urgent mb-1">
                          <Sparkles className="h-3 w-3" />
                          ابدأ مبكرًا
                        </span>
                      )}

                      <p className="text-xs leading-relaxed text-muted-foreground mt-1">
                        {stage.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
              {journeyStages.map((stage, i) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className={`snap-center shrink-0 ${stage.isCritical ? "w-[78vw] max-w-[300px]" : "w-[68vw] max-w-[260px]"}`}>

                  <div
                    className={`rounded-2xl p-5 h-full transition-all duration-300 ${
                      stage.isCritical ? "border-2" : "bg-card"
                    }`}
                    style={stage.isCritical
                      ? {
                        borderColor: `hsl(var(${stage.colorVar}) / 0.3)`,
                        backgroundColor: `hsl(var(${stage.colorVar}) / 0.06)`,
                        boxShadow: `0 8px 32px -8px hsl(var(${stage.colorVar}) / 0.25)`,
                      }
                      : { boxShadow: 'var(--shadow-card)' }
                    }>

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`flex items-center justify-center rounded-full shrink-0 text-white ${
                          stage.isCritical ? "h-14 w-14" : "h-11 w-11"
                        }`}
                        style={{
                          backgroundColor: `hsl(var(${stage.colorVar}))`,
                          boxShadow: `0 0 20px hsl(var(${stage.colorVar}) / 0.3)`,
                        }}>
                        <stage.icon className={stage.isCritical ? "h-7 w-7" : "h-5 w-5"} />
                      </div>
                      <div>
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                          style={{ backgroundColor: `hsl(var(${stage.colorVar}))` }}>
                          <Clock className="h-2.5 w-2.5" />
                          {stage.timeLabel}
                        </span>
                        <h4
                          className="text-sm font-bold mt-1"
                          style={{ color: `hsl(var(${stage.colorVar}))` }}>
                          {stage.title}
                        </h4>
                      </div>
                    </div>

                    {stage.isCritical && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-stage-urgent mb-2">
                        <Sparkles className="h-3 w-3" />
                        ابدأ مبكرًا
                      </span>
                    )}

                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {stage.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground/50 mt-2">← اسحب لرؤية المزيد →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
