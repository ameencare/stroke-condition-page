import { motion } from "framer-motion";
import { Brain, HeartPulse } from "lucide-react";

const ease = [0.2, 0, 0, 1];

const AboutStrokeSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            فهم الجلطة الدماغية
          </div>
          <h2 className="mb-6 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            ماذا يحدث بعد الجلطة الدماغية؟
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-3xl bg-card p-8 md:p-10" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="mb-6 flex justify-center">
              <HeartPulse className="h-12 w-12 text-secondary" />
            </div>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              الجلطة الدماغية تحدث عندما ينقطع تدفق الدم إلى جزء من الدماغ، مما يؤدي إلى تلف في الخلايا العصبية. يمكن أن يسبب ذلك ضعفاً في الحركة، صعوبة في الكلام، ومشاكل في التوازن.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              التأهيل المبكر والمنتظم هو المفتاح لاستعادة الوظائف المفقودة. كلما بدأ العلاج الطبيعي مبكراً، زادت فرص التعافي وتحسن جودة الحياة.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              فريقنا الطبي المتخصص في شركة أمين يعمل على تصميم برنامج تأهيلي مخصص لكل مريض بناءً على حالته واحتياجاته الفردية.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStrokeSection;
