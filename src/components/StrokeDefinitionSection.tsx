import { motion } from "framer-motion";
import { Brain, AlertTriangle, Footprints, Hand, Dna, Heart, PersonStanding } from "lucide-react";
import brainImage from "@/assets/brain-stroke-illustration.png";
import riskGeneticsImg from "@/assets/risk-genetics.jpg";
import riskMedicalImg from "@/assets/risk-medical.jpg";
import riskLifestyleImg from "@/assets/risk-lifestyle.jpg";

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
    image: riskGeneticsImg,
    color: "primary" as const,
    items: ["العمر", "التاريخ العائلي"],
  },
  {
    title: "عوامل صحية",
    icon: Heart,
    image: riskMedicalImg,
    color: "destructive" as const,
    items: ["ضغط الدم", "السكري", "الكوليسترول", "الرجفان الأذيني"],
  },
  {
    title: "نمط الحياة",
    icon: PersonStanding,
    image: riskLifestyleImg,
    color: "secondary" as const,
    items: ["التدخين", "السمنة", "قلة النشاط", "الكحول"],
  },
];

const colorMap = {
  primary: {
    gradient: "from-primary/10 to-primary/5",
    badge: "bg-primary/10 text-primary",
    dot: "bg-primary",
    border: "border-primary/15",
    glow: "group-hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.25)]",
  },
  destructive: {
    gradient: "from-destructive/10 to-destructive/5",
    badge: "bg-destructive/10 text-destructive",
    dot: "bg-destructive",
    border: "border-destructive/15",
    glow: "group-hover:shadow-[0_8px_30px_-8px_hsl(var(--destructive)/0.25)]",
  },
  secondary: {
    gradient: "from-secondary/10 to-secondary/5",
    badge: "bg-secondary/10 text-secondary",
    dot: "bg-secondary",
    border: "border-secondary/15",
    glow: "group-hover:shadow-[0_8px_30px_-8px_hsl(var(--secondary)/0.25)]",
  },
};

const StrokeDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
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

            {/* Risk Factors - Visual Tiles */}
            <p className="text-base font-semibold text-foreground text-right mb-5">عوامل الخطر:</p>
            <div className="grid gap-5 sm:grid-cols-3">
              {riskCategories.map((cat, ci) => {
                const colors = colorMap[cat.color];
                return (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + ci * 0.1, ease }}
                    className={`group relative rounded-2xl border ${colors.border} bg-gradient-to-b ${colors.gradient} overflow-hidden transition-all duration-300 hover:-translate-y-1 ${colors.glow}`}>
                    
                    {/* Image header */}
                    <div className="relative h-28 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      <div className={`absolute bottom-3 right-3 ${colors.badge} rounded-full px-2.5 py-1 text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm`}>
                        <cat.icon className="h-3.5 w-3.5" />
                        {cat.title}
                      </div>
                    </div>

                    {/* Items */}
                    <div className="p-4 space-y-2">
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                          <span className="text-sm font-semibold text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Brain illustration sidebar */}
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
