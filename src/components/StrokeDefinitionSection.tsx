import { motion } from "framer-motion";
import { Brain, AlertTriangle, Footprints, Scale, Hand, Clock } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const effects = [
  { icon: AlertTriangle, text: "ضعف أو شلل في أحد جانبي الجسم" },
  { icon: Hand, text: "ضعف في حركة اليد أو الذراع" },
  { icon: Footprints, text: "صعوبة في المشي أو التوازن" }
];


const StrokeDefinitionSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl text-center">
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            تعريف المشكلة
          </div>
          <h2 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            ما هي الجلطة الدماغية؟
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-10"
          style={{ boxShadow: 'var(--shadow-card)' }}>
          
          <p className="text-lg leading-relaxed text-muted-foreground text-right mb-6">هي حالة يحدث فيها انقطاع في تدفق الدم الى جزء من الدماغ، نتيجة انسداد أو تمزق في أحد الشرايين، وتعد الأكثر شيوعًا لدى كبار السن.
وعادةً بعد الجلطة الدماغية قد يفقد المريض جزءًا من الحركة أو التوازن أو أداء الأنشطة اليومية،






          </p>

          <p className="text-base font-semibold text-foreground text-right mb-4">ضعف أو شلل في أحد جانبي الجسم
</p>
          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            {effects.map((item, i) => <div key={i} className="flex items-center gap-3 rounded-2xl bg-destructive/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                  <item.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-sm font-medium text-foreground whitespace-pre-line">{item.text}</p>
              </div>)}
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground text-right mb-4">
            عادةً يحتاج المريض إلى برنامج تأهيلي شامل، يشمل العلاج الطبيعي لاستعادة الحركة وتحسين القدرة على الانتقال بأمان، بالإضافة إلى تثقيف المريض حول سلامته.
          </p>

          <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">فترة التعافي قد تختلف من مريض لآخر وتتراوح مابين 3 إلى 6 أشهر، وقد تمتد أحيانًا لفترة أطول حسب شدة الحالة والتزام المريض بالعلاج.

            </p>
          </div>
        </motion.div>
      </div>
    </section>);};export default StrokeDefinitionSection;