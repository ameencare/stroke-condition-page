import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const StrokeDefinitionSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            فهم الجلطة الدماغية
          </div>
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            تعريف الجلطة الدماغية
          </h2>
          <div className="rounded-3xl bg-card p-8 md:p-10 text-right" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              الجلطة الدماغية هي خلل مفاجئ في إمداد الدماغ بالدم، وغالبًا ما يكون بسبب انسداد أو انفجار مفاجئ في أحد شرايين الدماغ. وتُعد أكثر شيوعًا لدى كبار السن.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrokeDefinitionSection;
