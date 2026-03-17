import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import logoImage from "@/assets/logo-ameen.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <img
          src={logoImage}
          alt="شركة أمين للرعاية الطبية المنزلية"
          className="h-12 md:h-14 w-auto"
        />
        <a
          href="tel:+966500000000"
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            scrolled
              ? "bg-primary text-primary-foreground"
              : "bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm"
          }`}
        >
          <Phone className="h-4 w-4" />
          اتصل بنا
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
