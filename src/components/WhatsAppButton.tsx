import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
    >
      <img src={whatsappIcon} alt="واتساب" className="h-full w-full object-cover" />
    </a>
  );
};

export default WhatsAppButton;
