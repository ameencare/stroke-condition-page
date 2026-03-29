import { motion } from "framer-motion";
import { ClipboardCheck, Target, Stethoscope, TrendingUp, CalendarCheck, HeartHandshake } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import journeyAssessment from "@/assets/journey-assessment.jpg";
import journeyPlan from "@/assets/journey-plan.jpg";
import journeyTherapy from "@/assets/journey-therapy.jpg";
import journeyRecovery from "@/assets/journey-recovery.jpg";
import assessStrength from "@/assets/assess-strength.jpg";
import assessFunctional from "@/assets/assess-functional.jpg";
import assessRom from "@/assets/assess-rom.jpg";
import assessBalance from "@/assets/assess-balance.jpg";
import assessSensation from "@/assets/assess-sensation.jpg";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const assessmentCards = [
  {
    title: "القوة العضلية",
    subtitle: "تمارين المقاومة",
    image: assessStrength,
    alt: "تقييم قوة العضلات",
  },
  {
    title: "الحركة الوظيفية",
    subtitle: "المشي والأنشطة اليومية",
    image: assessFunctional,
    alt: "تقييم الحركة الوظيفية",
  },
  {
    title: "مدى الحركة",
    subtitle: "حركة المفاصل",
    image: assessRom,
    alt: "تقييم مدى حركة المفاصل",
  },
  {
    title: "التوازن",
    subtitle: "تدريب الوقوف",
    image: assessBalance,
    alt: "تقييم التوازن",
  },
  {
    title: "الإحساس والتحكم",
    subtitle: "التنسيق الحركي",
    image: assessSensation,
    alt: "تقييم الإحساس والتحكم الحركي",
  },
];

const journeySteps = [
  {
    step: "١",
    title: "جلسة الفحص والعلاج الطبيعي",
    description: "يقوم الأخصائي بتقييم شامل لحالتك الصحية بعد الجلطة",
    image: journeyAssessment,
    alt: "أخصائي يقيّم حالة المريض في المنزل",
  },
  {
    step: "٢",
    title: "الخطة العلاجية",
    description: "وضع خطة علاجية مخصصة وأهداف واضحة بالتشاور معك ومع عائلتك",
    image: journeyPlan,
    alt: "أخصائي يشرح خطة العلاج للمريض وعائلته",
  },
  {
    step: "٣",
    title: "الجلسات العلاجية",
    description: "جلسات علاج طبيعي منتظمة في منزلك مع متابعة مستمرة",
    image: journeyTherapy,
    alt: "جلسة علاج طبيعي نشطة في المنزل",
  },
  {
    step: "٤",
    title: "التحسن التدريجي",
    description: "استعادة الحركة والاستقلالية بشكل تدريجي وملحوظ",
    image: journeyRecovery,
    alt: "مريض يمشي باستقلالية بعد التأهيل",
  },
];

const HomeRehabSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HeartHandshake className="h-4 w-4" />
            رحلتك مع أمين
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
            خدمة العلاج الطبيعي مع أمين
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            من التقييم الأول إلى التعافي… نرافقك في كل خطوة
          </p>
        </motion.div>

        {/* Visual Journey Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-14">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group rounded-3xl bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${step.step === "٢" ? "object-[60%_center] scale-110" : ""}`} />
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg">
                  {step.step}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assessment Section with Image Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mx-auto max-w-5xl">

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground md:text-2xl mb-2">
              التقييم الشامل يشمل
            </h3>
            <p className="text-base text-muted-foreground">
              يقوم الأخصائي بفحص دقيق لتحديد خطة العلاج المناسبة
            </p>
          </div>

          {/* Assessment Image Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {assessmentCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="group rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-bold text-foreground">{card.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-10"
          style={{ boxShadow: 'var(--shadow-card)' }}>

          <p className="text-lg leading-relaxed text-muted-foreground text-right mb-4">
            في رعاية أمين، يبدأ العلاج الطبيعي بـجلسة الفحص والعلاج الطبيعي، يقوم الأخصائي بتقييم شامل بعد الجلطة الدماغية ثم يقدم العلاج كجزء من الجلسة، ويناقش حالتك ليضع خطة علاجية مخصصة.
          </p>

          <div className="rounded-2xl bg-secondary/10 p-5 mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-secondary shrink-0" />
              <p className="text-base font-semibold text-foreground">
                فريق أمين يضمن متابعة مستمرة وتقييم التقدم لضمان أفضل النتائج
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
              <CalendarCheck className="h-5 w-5" />
              احجز جلسة علاج طبيعي الآن
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-muted px-6 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent active:scale-[0.98]">
              <Stethoscope className="h-5 w-5" />
              اطلب استشارة هاتفية مجانية
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
              <img src={whatsappIcon} alt="واتساب" className="h-full w-full object-cover" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRehabSection;
