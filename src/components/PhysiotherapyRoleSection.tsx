import { motion } from "framer-motion";
import { Activity, Dumbbell, Scale, Footprints } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const services = [
  { icon: Activity, title: "تحسين الحركة" },
  { icon: Dumbbell, title: "تقوية العضلات" },
  { icon: Scale, title: "تحسين التوازن" },
  { icon: Footprints, title: "استعادة الأنشطة اليومية" },
];

const PhysiotherapyRoleSection = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            دور العلاج الطبيعي بعد الجلطة
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            العلاج الطبيعي هو الركيزة الأساسية في رحلة التعافي بعد الجلطة الدماغية
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <service.icon className="mb-4 h-12 w-12 text-secondary" />
              <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
