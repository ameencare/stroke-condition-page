import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.2, 0, 0, 1];

const faqs = [
  {
    q: "متى يبدأ العلاج الطبيعي بعد الجلطة؟",
    a: "يُنصح ببدء العلاج الطبيعي في أقرب وقت ممكن بعد استقرار الحالة الصحية للمريض، عادةً خلال 24 إلى 48 ساعة من الجلطة. البدء المبكر يساعد على تحقيق نتائج أفضل في التعافي.",
  },
  {
    q: "كم تستغرق فترة التأهيل بعد الجلطة؟",
    a: "تختلف المدة من مريض لآخر حسب شدة الجلطة والمنطقة المتأثرة. بشكل عام، التحسن الأكبر يحدث خلال 3 إلى 6 أشهر، لكن التأهيل قد يستمر لفترة أطول.",
  },
  {
    q: "هل يمكن استعادة القدرة على الحركة بعد الجلطة؟",
    a: "نعم، مع العلاج الطبيعي المنتظم والمتخصص، يمكن لكثير من المرضى استعادة جزء كبير من قدرتهم الحركية. النتائج تعتمد على عدة عوامل منها شدة الجلطة ومدى الالتزام بالبرنامج التأهيلي.",
  },
  {
    q: "هل العلاج الطبيعي المنزلي فعال مثل المستشفى؟",
    a: "نعم، الدراسات أثبتت أن التأهيل المنزلي يمكن أن يكون بنفس فعالية التأهيل في المستشفى، بل قد يكون أفضل لأن المريض يتدرب في بيئته الطبيعية مما يسهل نقل المهارات المكتسبة.",
  },
  {
    q: "كيف أحجز جلسة علاج طبيعي منزلي؟",
    a: "يمكنك الحجز عن طريق الاتصال بنا أو التواصل عبر واتساب. سيقوم فريقنا بتقييم حالتك وتحديد أقرب موعد متاح لزيارة منزلية.",
  },
];

const FAQSection = () => {
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
            الأسئلة الشائعة
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl bg-card px-6 border-none"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <AccordionTrigger className="text-right text-lg font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
