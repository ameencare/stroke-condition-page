import { motion } from "framer-motion";
import { Activity, Dumbbell, Scale, Footprints, HandMetal } from "lucide-react";

const ease = [0.2, 0, 0, 1];

const services = [
  {
    icon: Activity,
    title: "تحسين الحركة",
    description: "نركز على تمارين متخصصة لاستعادة وظائف الأطراف وتسهيل الحركة اليومية.",
  },
  {
    icon: Dumbbell,
    title: "تقوية العضلات",
    description: "برامج تدريبية لتقوية العضلات الضعيفة واستعادة القوة البدنية تدريجياً.",
  },
  {
    icon: Scale,
    title: "تدريب التوازن",
    description: "تمارين متخصصة لتحسين التوازن وتقليل خطر السقوط والإصابات.",
  },
  {
    icon: Footprints,
    title: "استعادة القدرة على المشي",
    description: "تدريب مكثف على المشي باستخدام تقنيات حديثة لاستعادة الاستقلالية.",
  },
  {
    icon: HandMetal,
    title: "تحسين الأنشطة اليومية",
    description: "مساعدة المريض على أداء الأنشطة اليومية كالأكل والملبس والنظافة الشخصية.",
  },
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="rounded-3xl bg-card p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <service.icon className="mb-4 h-12 w-12 text-secondary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
