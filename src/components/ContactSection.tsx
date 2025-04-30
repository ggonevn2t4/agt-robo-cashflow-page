
import React from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <footer className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-dark-light rounded-xl p-8 border border-gold/20 relative">
          {/* Glowing effect */}
          <div className="absolute inset-0 -z-10 bg-gold/5 blur-xl"></div>
          
          <h3 className="text-2xl font-bold mb-6 text-center text-gold">
            Liên Hệ Để Nhận Tư Vấn
          </h3>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-400" />
            <p className="text-xl text-gray-200">Zalo: 0708684608</p>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              onClick={() => window.open("https://zalo.me/0708684608", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Liên hệ ngay
            </Button>
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold/40"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gold/40"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gold/40"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold/40"></div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-10">
          AGT Bot © {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
