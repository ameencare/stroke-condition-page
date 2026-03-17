import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-rehab.jpg";
import logoImage from "@/assets/logo-ameen.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary pt-16">
      <div className="absolute inset-0">
        <img src={heroImage} alt="إعادة التأهيل بعد الجلطة" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="mb-4">
              <img src={logoImage} alt="شركة أمين للرعاية الطبية المنزلية" className="h-16 w-auto" />
            </div>
            <h1 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              التأهيل بعد الجلطة الدماغية – ابدأ رحلة التعافي واستعد حركتك
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-primary-foreground/85 max-w-xl">
              العلاج الطبيعي المبكر بعد الجلطة يساعد على تحسين الحركة والتوازن وتقليل الإعاقة، وفق توصيات وزارة الصحة السعودية.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-4 text-base font-semibold text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                <CalendarCheck className="h-5 w-5" />
                احجز جلسة علاج طبيعي
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground/15 px-6 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/25 active:scale-[0.98]"
              >
                <Stethoscope className="h-5 w-5" />
                اطلب استشارة
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="hidden md:block"
          >
            <img
              src={heroImage}
              alt="إعادة التأهيل بعد الجلطة الدماغية"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
