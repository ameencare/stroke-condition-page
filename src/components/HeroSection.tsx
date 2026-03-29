import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-home-therapy.jpg";
import logoImage from "@/assets/logo-ameen.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary pt-16">
      <div className="absolute inset-0">
        <img src={heroImage} alt="إعادة التأهيل بعد الجلطة" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}>
            
            <div className="mb-6">
              <img src={logoImage} alt="شركة أمين للرعاية الطبية المنزلية" className="h-20 md:h-24 w-auto drop-shadow-lg" />
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              استعد حركتك بالعلاج الطبيعي بعد الجلطة الدماغية
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
              العلاج الطبيعي المبكر بعد الجلطة يساعد على تحسين الحركة والتوازن وتقليل الإعاقة، وفق توصيات وزارة الصحة السعودية.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-4 text-base font-bold text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
                <CalendarCheck className="h-5 w-5" />
                احجز جلسة علاج طبيعي
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground/15 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/25 active:scale-[0.98]">
                <Stethoscope className="h-5 w-5" />
                اطلب استشارة مجانية
              </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center rounded-xl bg-whatsapp p-3 text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
              <img src={whatsappIcon} alt="واتساب" className="h-8 w-8" />
            </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary-foreground/10 blur-xl" />
              <img
                src={heroImage}
                alt="أخصائي علاج طبيعي يساعد مريض جلطة في المنزل"
                className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
