import { motion } from "framer-motion";
import { ClipboardCheck, Target, Stethoscope, TrendingUp, CalendarCheck, MessageCircle, HeartHandshake } from "lucide-react";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const assessmentItems = [
"القوة العضلية والحركة الوظيفية",
"مدى الحركة للمفاصل والتوازن",
"الإحساس والتحكم الحركي"];


const HomeRehabSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-8 text-center">
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HeartHandshake className="h-4 w-4" />
            رحلتك مع أمين
          </div>
          <h2 className="mb-3 text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            خدمة العلاج الطبيعي مع أمين
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-10"
          style={{ boxShadow: 'var(--shadow-card)' }}>
          
          <h3 className="text-xl font-bold text-foreground mb-4 text-right">
            ابدأ رحلة التعافي مع العلاج الطبيعي
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground text-right mb-4">في رعاية أمين، يبدأ العلاج الطبيعي بـجلسة الفحص والعلاج الطبيعي، يقوم الأخصائي بتقييم شامل بعد الجلطة الدماغية، يشمل:

          </p>

          <div className="space-y-3 mb-6">
            {assessmentItems.map((item, i) =>
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            )}
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground text-right mb-6">ثم يقدم العلاج الطبيعي كجزء من الجلسة، ويناقش حالتك الصحية ليضع خطة علاجية مخصصة وأهداف واضحة، مع تحديد عدد الجلسات والطُرق الأنسب لدعم تعافيك وتحسين حياتك اليومية.
والتصنيف الموصى به هو أخصائي عالي الخبرة أو خبير، لأنها الأنسب لحالات الجلطة لتطلبها خبرة أعمق، بينما التقييم يساعد على وضع خطة علاجية دقيقة.
          </p>

          <div className="rounded-2xl bg-secondary/10 p-5 mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-secondary shrink-0" />
              <p className="text-base font-semibold text-foreground">
                فريق أمين يضمن متابعة مستمرة وتقييم التقدم لضمان أفضل النتائج
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]">
              
              <CalendarCheck className="h-5 w-5" />
              احجز جلسة علاج طبيعي الآن
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-muted px-6 py-4 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent active:scale-[0.98]">
              
              <Stethoscope className="h-5 w-5" />
              اطلب استشارة هاتفية مجانية
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]">تواصل عبر محادثة الواتس أب

              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HomeRehabSection;