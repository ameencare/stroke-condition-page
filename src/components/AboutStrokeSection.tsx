import { motion } from "framer-motion";
import { AlertCircle, Footprints, Hand, Scale, MoveHorizontal } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const effects = [
  { icon: MoveHorizontal, text: "ضعف أو شلل في أحد جانبي الجسم" },
  { icon: Footprints, text: "صعوبة في المشي" },
  { icon: Scale, text: "مشاكل في التوازن" },
  { icon: Hand, text: "ضعف في استخدام اليد أو الذراع" },
];

const AboutStrokeSection = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container">
        {/* Early Rehabilitation Importance */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <AlertCircle className="h-4 w-4" />
            أهمية التأهيل المبكر
          </div>
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            لماذا يجب البدء بالتأهيل مبكراً؟
          </h2>
          <div className="rounded-3xl bg-card p-8 md:p-10" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              تشير الإرشادات الطبية إلى أن بدء التأهيل خلال 24–48 ساعة بعد استقرار الحالة يساعد بشكل كبير في تحسين نتائج التعافي وتقليل المضاعفات.
            </p>
          </div>
        </motion.div>

        {/* What Happens After Stroke */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center mb-8"
        >
          <h2 className="mb-6 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            ماذا يحدث بعد الجلطة الدماغية؟
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {effects.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
                <item.icon className="h-7 w-7 text-destructive" />
              </div>
              <p className="text-base font-bold text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStrokeSection;
