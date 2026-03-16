import { motion } from "framer-motion";
import { Home, UserCheck, Clock, Shield } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  { icon: Home, title: "راحة المنزل", desc: "تلقي العلاج في بيئة مألوفة ومريحة تساعد على التعافي السريع." },
  { icon: UserCheck, title: "رعاية مخصصة", desc: "برنامج تأهيلي مصمم خصيصاً لحالتك واحتياجاتك الفردية." },
  { icon: Clock, title: "مواعيد مرنة", desc: "جدول علاجي يناسب ظروفك وظروف عائلتك." },
  { icon: Shield, title: "فريق طبي متخصص", desc: "أخصائيون معتمدون ذوو خبرة واسعة في تأهيل ما بعد الجلطة." },
];

const HomeRehabSection = () => {
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
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            التأهيل المنزلي مع شركة أمين
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            نوفر لك فريقاً طبياً متكاملاً يصل إلى منزلك لتقديم أفضل برامج التأهيل بعد الجلطة
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex gap-4 rounded-3xl bg-card p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRehabSection;
