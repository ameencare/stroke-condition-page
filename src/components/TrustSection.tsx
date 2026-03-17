import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const TrustSection = () => {
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
          <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-secondary" />
          <h2 className="mb-6 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            التزامنا بالجودة
          </h2>
          <div className="rounded-3xl bg-card p-8 md:p-10" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              نلتزم بتقديم خدماتنا وفق أحدث الإرشادات الطبية المعتمدة من وزارة الصحة السعودية والجمعية الأمريكية للقلب.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
