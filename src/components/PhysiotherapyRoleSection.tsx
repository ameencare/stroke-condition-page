import { motion } from "framer-motion";
import { Bike, Dumbbell, ArrowUp, Footprints, Star, Clock } from "lucide-react";
import benefitsImage from "@/assets/benefits-exercises.jpg";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  { icon: Bike, title: "استعادة الحركة تدريجيًا" },
  { icon: Dumbbell, title: "تقوية العضلات" },
  { icon: ArrowUp, title: "تحسين التوازن وتقليل خطر السقوط" },
  { icon: Footprints, title: "إعادة تعلم المشي والأنشطة اليومية" },
];

const PhysiotherapyRoleSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <Star className="h-4 w-4" />
            رحلتك الى العلاج
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
            كيف يساعد العلاج الطبيعي؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            العلاج الطبيعي المبكر بعد الجلطة يساعد على:
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              className="flex flex-col items-center rounded-3xl bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <b.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mx-auto max-w-4xl rounded-3xl bg-card overflow-hidden"
          style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="grid md:grid-cols-[1fr_300px]">
            <div className="p-8 md:p-10 flex items-center">
              <div className="text-right">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  برامج التأهيل تساعد المرضى على استعادة المهارات المتأثرة بالجلطة وتحسين جودة حياتهم بشكل ملحوظ.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  ويعتبر التأهيل المنزلي فعالًا، حيث يتيح للمريض التدريب في بيئته الطبيعية، مما يسهل تطبيق المهارات المكتسبة في حياته اليومية.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  وتشير إرشادات وزارة الصحة إلى أهمية بدء التأهيل خلال 24–48 ساعة بعد استقرار الحالة، مع وضع خطة علاجية فردية يتم متابعتها بشكل مستمر من فريق متخصص.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  عادةً يحتاج المريض إلى برنامج تأهيلي شامل، يشمل العلاج الطبيعي لاستعادة الحركة وتحسين القدرة على الانتقال بأمان، بالإضافة إلى تثقيف المريض حول سلامته.
                </p>
                <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    العلاج الطبيعي خطوة أساسية بعد السكتة الدماغية، ويُنصح بالبدء المبكر بعد استقرار حالة المريض مع جلسات يومية تقريبًا 5 أيام في الأسبوع في المرحلة المبكرة. 
                    فترة التعافي تختلف من مريض لآخر، وعادةً تتراوح بين 3 إلى 6 أشهر، وقد تمتد لفترة أطول حسب شدة الحالة والتزام المريض بالعلاج. غالبًا يظهر التحسن الأكبر خلال أول 3 أشهر، بينما قد يستمر التحسن بعد ذلك ولكن بمعدل أبطأ.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={benefitsImage}
                alt="جلسة علاج طبيعي منزلية - تمارين تقوية العضلات"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysiotherapyRoleSection;
