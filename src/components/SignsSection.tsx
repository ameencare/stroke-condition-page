import { motion } from "framer-motion";
import { AlertTriangle, Footprints, Hand, Scale, MoveHorizontal } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const signs = [
  { icon: Footprints, text: "صعوبة المشي" },
  { icon: MoveHorizontal, text: "ضعف في أحد جانبي الجسم" },
  { icon: Scale, text: "مشاكل في التوازن" },
  { icon: Hand, text: "صعوبة استخدام اليد أو الذراع" },
];

const SignsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive">
            <AlertTriangle className="h-4 w-4" />
            علامات تحتاج انتباهك
          </div>
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            علامات تدل على حاجتك للعلاج الطبيعي بعد الجلطة
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signs.map((sign, i) => (
            <motion.div
              key={sign.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
                <sign.icon className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-lg font-bold text-foreground">{sign.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignsSection;
