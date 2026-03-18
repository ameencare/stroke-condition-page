import { motion } from "framer-motion";
import { Brain, AlertTriangle, Footprints, Hand, Clock } from "lucide-react";
import brainImage from "@/assets/brain-stroke-illustration.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const effects = [
  { icon: AlertTriangle, text: "ضعف أو شلل في أحد جانبي الجسم" },
  { icon: Hand, text: "ضعف في حركة اليد أو الذراع" },
  { icon: Footprints, text: "صعوبة في المشي أو التوازن" },
];

const StrokeDefinitionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            تعريف الحالة
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
            ما هي الجلطة الدماغية؟
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[1fr_280px] items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="rounded-3xl bg-card p-8 md:p-10"
            style={{ boxShadow: 'var(--shadow-card)' }}>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-right mb-6">
              هي حالة يحدث فيها انقطاع في تدفق الدم الى جزء من الدماغ، نتيجة انسداد أو تمزق في أحد الشرايين، وتعد الأكثر شيوعًا لدى كبار السن. وعادةً بعد الجلطة الدماغية قد يفقد المريض جزءًا من الحركة أو التوازن أو أداء الأنشطة اليومية، ومن عوامل الخطر التي قد تزيد من احتمالية حدوثها، بعضها لا يمكن تغييره وبعضها قابل للتحكم لتقليل احتمالية الاصابة. من العوامل التي لا يمكن تغييرها: التقدم في العمر والتاريخ العائلي للإصابة بأمراض القلب أو السكتة الدماغية. أما العوامل الصحية القابلة للتحكم فتشمل ارتفاع ضغط الدم، السكري، ارتفاع الكوليسترول، وأمراض القلب مثل الرجفان الأذيني. بالإضافة إلى ذلك، يلعب نمط الحياة دورًا مهمًا في زيادة الخطر، مثل التدخين، السمنة، قلة النشاط البدني، والإفراط في تناول الكحول أو المخدرات.
            </p>

            <p className="text-base font-semibold text-foreground text-right mb-4">من أبرز آثار الجلطة:</p>
            <div className="grid gap-3 sm:grid-cols-1 mb-6">
              {effects.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease }}
                  className="flex items-center gap-3 rounded-2xl bg-destructive/5 p-4 transition-all duration-200 hover:bg-destructive/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground text-right mb-4">
              عادةً يحتاج المريض إلى برنامج تأهيلي شامل، يشمل العلاج الطبيعي لاستعادة الحركة وتحسين القدرة على الانتقال بأمان، بالإضافة إلى تثقيف المريض حول سلامته.
            </p>

            <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">
                فترة التعافي قد تختلف من مريض لآخر وتتراوح مابين 3 إلى 6 أشهر، وقد تمتد أحيانًا لفترة أطول حسب شدة الحالة والتزام المريض بالعلاج.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="hidden md:flex flex-col items-center justify-center sticky top-24">
            <div className="rounded-3xl bg-card p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <img
                src={brainImage}
                alt="رسم توضيحي للجلطة الدماغية - انقطاع تدفق الدم"
                className="w-full max-w-[240px] mx-auto" />
              <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
                انقطاع تدفق الدم إلى جزء من الدماغ
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrokeDefinitionSection;
