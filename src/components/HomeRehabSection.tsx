import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Home, TrendingUp } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  { icon: ClipboardCheck, title: "تقييم شامل للحالة" },
  { icon: FileText, title: "خطة علاج مخصصة" },
  { icon: Home, title: "جلسات علاج طبيعي منزلية" },
  { icon: TrendingUp, title: "متابعة مستمرة للتقدم" },
];

const HomeRehabSection = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            التأهيل المنزلي مع شركة أمين
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            نوفر لك فريقاً طبياً متكاملاً يصل إلى منزلك لتقديم أفضل برامج التأهيل بعد الجلطة
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-7 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRehabSection;
