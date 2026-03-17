import { motion } from "framer-motion";
import { Timer } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const RecoveryDurationSection = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <Timer className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="mb-6 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            المدة المتوقعة للتعافي
          </h2>
          <div className="rounded-3xl bg-card p-8 md:p-10 text-right" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              تختلف مدة التعافي من أسابيع إلى عدة أشهر حسب شدة الحالة والالتزام بالعلاج. التحسن الأكبر يحدث عادةً خلال الأشهر الثلاثة إلى الستة الأولى بعد الجلطة. البدء المبكر في العلاج الطبيعي يزيد من فرص التعافي بشكل ملحوظ.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecoveryDurationSection;
