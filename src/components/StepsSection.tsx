
import React from 'react';
import { Button } from "@/components/ui/button";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Nhận và cài đặt",
      description: "Gửi yêu cầu để nhận AGT qua email hoặc Zalo",
      buttonText: "Bước 1"
    },
    {
      number: 2,
      title: "Bắt đầu chạy thử",
      description: "Chạy thử AGT trên tài khoản demo để trải nghiệm",
      buttonText: "Bước 2"
    },
    {
      number: 3,
      title: "Cài đặt và kiếm tiền",
      description: "Cài đặt AGT trên tài khoản thực và bắt đầu kiếm lợi nhuận từ XAU/USD",
      buttonText: "Bước 3"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/5 rounded-xl blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
              
              <div className="relative bg-dark-light border border-gold/20 rounded-xl p-6 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-gold">
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-dark-darker font-bold">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gold">{step.title}</h3>
                <p className="text-gray-300 mb-6">{step.description}</p>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-dark-darker transition-all duration-300 w-full"
                  >
                    {step.buttonText}
                  </Button>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-gold/40"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-gold/40"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-gold/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-gold/40"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default StepsSection;
