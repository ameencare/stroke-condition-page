import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const EarlyRehabSection = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center"
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
      </div>
    </section>
  );
};

export default EarlyRehabSection;
