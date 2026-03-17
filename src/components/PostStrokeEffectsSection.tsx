import { motion } from "framer-motion";
import { Footprints, Hand, Scale, MoveHorizontal } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const effects = [
  { icon: MoveHorizontal, text: "ضعف أو شلل في أحد جانبي الجسم" },
  { icon: Footprints, text: "صعوبة في المشي" },
  { icon: Scale, text: "مشاكل في التوازن" },
  { icon: Hand, text: "ضعف في استخدام اليد أو الذراع" },
];

const PostStrokeEffectsSection = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container">
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

export default PostStrokeEffectsSection;
