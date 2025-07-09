import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "+27814964249";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-8 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition-all duration-300 z-40"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
