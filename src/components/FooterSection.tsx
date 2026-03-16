import { Phone, Mail, MapPin } from "lucide-react";
import logoImage from "@/assets/logo-ameen.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img src={logoImage} alt="شركة أمين للرعاية الطبية المنزلية" className="h-14 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              نوفر خدمات التأهيل والعلاج الطبيعي المنزلي بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">تواصل معنا</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">+966 50 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ameen-care.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">خدماتنا</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>العلاج الطبيعي المنزلي</li>
              <li>تأهيل ما بعد الجلطات</li>
              <li>العلاج الوظيفي</li>
              <li>الاستشارات الطبية</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} شركة أمين للرعاية الطبية المنزلية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
