import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
{ icon: Bike, title: "استعادة الحركة تدريجيًا" },
{ icon: Dumbbell, title: "تقوية العضلات" },
{ icon: ArrowUp, title: "تحسين التوازن وتقليل خطر السقوط" },
{ icon: Footprints, title: "إعادة تعلم المشي والأنشطة اليومية" }];


const PhysiotherapyRoleSection = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-8 text-center">
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <Star className="h-4 w-4" />
            التعامل مع المشكلة
          </div>
          <h2 className="mb-3 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            كيف يساعد العلاج الطبيعي؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            العلاج الطبيعي المبكر بعد الجلطة يساعد على:
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mb-8">
          {benefits.map((b, i) =>
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease }}
            className="flex flex-col items-center rounded-3xl bg-card p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ boxShadow: 'var(--shadow-card)' }}>
            
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                <b.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-10"
          style={{ boxShadow: 'var(--shadow-card)' }}>
          
          <p className="text-lg leading-relaxed text-muted-foreground text-right">وتشير الدراسات إلى أن برامج التأهيل تساعد المرضى على إعادة تعلم المهارات التي تأثرت بسبب الجلطة وتحسين جودة حياتهم بشكل ملحوظ،
          <br /><br />
          وأثبتت بأن التأهيل المنزلي فعال لأن المريض يتدرب في بيئته الطبيعية مما يسهل نقل المهارات المكتسبة</p>
        </motion.div>
      </div>
    </section>);

};

export default PhysiotherapyRoleSection;