import { motion } from "framer-motion";
import { Brain, AlertTriangle, Footprints, Hand, Heart, Dna, PersonStanding, Cigarette, Activity, Droplets, Clock as ClockIcon } from "lucide-react";
import brainImage from "@/assets/brain-stroke-illustration.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const effects = [
  { icon: AlertTriangle, text: "ضعف أو شلل في أحد جانبي الجسم" },
  { icon: Hand, text: "ضعف في حركة اليد أو الذراع" },
  { icon: Footprints, text: "صعوبة في المشي أو التوازن" },
];

const riskCategories = [
  {
    title: "عوامل لا يمكن تغييرها",
    icon: Dna,
    color: "primary",
    items: [
      { text: "التقدم في العمر", bold: "العمر" },
      { text: "التاريخ العائلي لأمراض القلب أو السكتة", bold: "التاريخ العائلي" },
    ],
  },
  {
    title: "عوامل صحية قابلة للتحكم",
    icon: Heart,
    color: "destructive",
    items: [
      { text: "ارتفاع ضغط الدم", bold: "ضغط الدم" },
      { text: "مرض السكري", bold: "السكري" },
      { text: "ارتفاع الكوليسترول", bold: "الكوليسترول" },
      { text: "أمراض القلب مثل الرجفان الأذيني", bold: "أمراض القلب" },
    ],
  },
  {
    title: "عوامل نمط الحياة",
    icon: PersonStanding,
    color: "secondary",
    items: [
      { text: "التدخين", bold: "التدخين" },
      { text: "السمنة وزيادة الوزن", bold: "السمنة" },
      { text: "قلة النشاط البدني", bold: "النشاط البدني" },
    ],
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; text: string; dot: string }> = {
  primary: { bg: "bg-primary/5", iconBg: "bg-primary/10", text: "text-primary", dot: "bg-primary" },
  destructive: { bg: "bg-destructive/5", iconBg: "bg-destructive/10", text: "text-destructive", dot: "bg-destructive" },
  secondary: { bg: "bg-secondary/5", iconBg: "bg-secondary/10", text: "text-secondary", dot: "bg-secondary" },
};

const StrokeDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            تعريف الحالة
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
            ما هي الجلطة الدماغية؟
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[1fr_280px] items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="rounded-3xl bg-card p-8 md:p-10"
            style={{ boxShadow: 'var(--shadow-card)' }}>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-right mb-6">
              هي حالة يحدث فيها انقطاع في تدفق الدم الى جزء من الدماغ، نتيجة انسداد أو تمزق في أحد الشرايين، وتعد الأكثر شيوعًا لدى كبار السن. وعادةً بعد الجلطة الدماغية قد يفقد المريض جزءًا من الحركة أو التوازن أو أداء الأنشطة اليومية.
            </p>

            <p className="text-base font-semibold text-foreground text-right mb-4">من أبرز آثار الجلطة:</p>
            <div className="grid gap-3 sm:grid-cols-1 mb-8">
              {effects.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease }}
                  className="flex items-center gap-3 rounded-2xl bg-destructive/5 p-4 transition-all duration-200 hover:bg-destructive/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Risk Factors - Categorized */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <p className="text-lg font-bold text-foreground">عوامل الخطر</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {riskCategories.map((cat, ci) => {
                const colors = colorMap[cat.color];
                return (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + ci * 0.1, ease }}
                    className={`relative rounded-2xl ${colors.bg} p-5 border border-transparent hover:border-current/5 transition-all duration-300 overflow-hidden`}>
                    {/* Decorative accent line */}
                    <div className={`absolute top-0 right-0 left-0 h-1 ${colors.dot} rounded-t-2xl`} />

                    <div className="flex items-center gap-3 mb-5 pt-1">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} shadow-sm`}>
                        <cat.icon className={`h-5 w-5 ${colors.text}`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground leading-tight">{cat.title}</h4>
                        <span className={`text-[11px] font-medium ${colors.text} opacity-70`}>
                          {cat.items.length} عوامل
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {cat.items.map((item, ii) => (
                        <motion.li
                          key={ii}
                          initial={{ opacity: 0, x: -6 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + ci * 0.1 + ii * 0.06, ease }}
                          className={`flex items-center gap-2.5 rounded-xl ${colors.iconBg} px-3 py-2.5 transition-all duration-200 hover:scale-[1.02]`}>
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${colors.dot}`}>
                            <span className="block h-2 w-2 rounded-full bg-white" />
                          </span>
                          <span className="text-sm text-foreground leading-snug">
                            <span className="font-bold">{item.bold}</span>
                            {item.text !== item.bold && (
                              <span className="text-muted-foreground font-normal"> — {item.text.replace(item.bold, '').trim()}</span>
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="hidden md:flex flex-col items-center justify-center sticky top-24">
            <div className="rounded-3xl bg-card p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <img
                src={brainImage}
                alt="رسم توضيحي للجلطة الدماغية - انقطاع تدفق الدم"
                className="w-full max-w-[240px] mx-auto" />
              <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
                انقطاع تدفق الدم إلى جزء من الدماغ
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrokeDefinitionSection;
