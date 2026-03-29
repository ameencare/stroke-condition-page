import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const CTASection = () => {
  return (
    <section id="booking" className="py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mx-auto max-w-3xl rounded-3xl bg-primary p-8 md:p-12 text-center"
          style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)' }}
        >
          <h2 className="mb-3 text-3xl font-semibold leading-snug tracking-tight text-primary-foreground md:text-4xl">
            ابدأ التأهيل مبكرًا… وامنح نفسك فرصة أفضل للتعافي
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-primary-foreground/85">
            كلما بدأت مبكراً في التأهيل، زادت فرصتك في استعادة حياتك الطبيعية. فريقنا جاهز لمساعدتك.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-4 text-base font-semibold text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
            >
              <CalendarCheck className="h-5 w-5" />
              احجز الآن
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground/15 px-6 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/25 active:scale-[0.98]"
            >
              <Stethoscope className="h-5 w-5" />
              اطلب استشارة
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="inline-flex items-center justify-center rounded-lg bg-whatsapp p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
            >
              <img src={whatsappIcon} alt="واتساب" className="h-10 w-10 object-contain" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
