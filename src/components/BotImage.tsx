
import React from 'react';

const BotImage = () => {
  return (
    <section className="py-8 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-xl border border-gold/20">
          <img 
            src="/lovable-uploads/d13068d2-80c3-482f-9cf7-b4fb2d559f4e.png" 
            alt="AGT Bot - Robot Trading" 
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center text-gold-light mt-4 text-lg">
          Bot AGT - Giao dịch tự động 24/7 dựa trên logic toán học
        </p>
      </div>
    </section>
  );
};

export default BotImage;
