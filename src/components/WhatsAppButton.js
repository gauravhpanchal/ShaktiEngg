import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ textMessage }) => {
  return (
    <div className="fixed md:block hidden bottom-4 z-50 right-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/919076182397?text=${textMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#e22023] text-buttonText  flex items-center gap-2 hover:bg-red-400 text-white px-4 py-2  rounded-xl shadow"
      >
        <FaWhatsapp className="h-8 w-8" />
        <span className="font-semibold text-xl">Chat Now</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
