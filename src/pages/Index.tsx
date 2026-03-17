import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, MessageCircle, CheckCircle2, AlertTriangle, ShieldCheck, Clock } from "lucide-react";
import logoImage from "@/assets/logo-ameen.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const benefits = [
  "تحسين الحركة واستعادة التوازن",
  "تقوية العضلات",
  "المساعدة على المشي من جديد",
  "برنامج تأهيلي مخصص في المنزل",
];

const Index = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative">
      {/* Sticky WhatsApp */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>

      {/* Top bar */}
      <div className="bg-primary px-4 py-3 flex items-center justify-center">
        <img src={logoImage} alt="شركة أمين" className="h-10 w-auto" />
      </div>

      {/* Main content — fills remaining viewport */}
      <main className="flex-1 flex flex-col justify-center px-4 py-6 md:py-8">
        <div className="mx-auto w-full max-w-2xl flex flex-col gap-5 md:gap-6">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground mb-3">
              لا تؤجل التأهيل بعد الجلطة…{" "}
              <span className="text-primary">ابدأ الآن</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
              العلاج الطبيعي المبكر يساعد على تحسين الحركة والتوازن وتقليل الإعاقة، وفق توصيات طبية معتمدة.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="grid grid-cols-2 gap-2.5 md:gap-3"
          >
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-2 rounded-2xl bg-card p-3 md:p-4"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug">{b}</span>
              </div>
            ))}
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="flex items-center justify-center gap-2 rounded-xl bg-destructive/10 px-4 py-2.5 text-center"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 text-destructive" />
            <span className="text-sm md:text-base font-bold text-destructive">
              كل يوم تأخير قد يؤثر على سرعة التعافي
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="flex flex-col gap-2.5 sm:flex-row sm:justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <CalendarCheck className="h-5 w-5" />
              احجز الآن
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-4 text-base font-bold text-primary transition-all hover:bg-primary/5 active:scale-[0.98]"
            >
              <Stethoscope className="h-5 w-5" />
              اطلب استشارة
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </motion.div>

          {/* Trust + Reassurance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="flex flex-col items-center gap-2 text-center text-xs md:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span>خدماتنا مبنية على إرشادات وزارة الصحة السعودية والجمعية الأمريكية للقلب</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span>تحسن تدريجي خلال أسابيع إلى أشهر حسب الحالة</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
