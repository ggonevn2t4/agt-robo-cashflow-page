
import React from 'react';
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-16 relative" id="demo">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Video className="h-8 w-8 mr-3 text-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Xem AGT Bot Hoạt Động
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* YouTube video container */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gold/30 mb-8">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/tF35UhD-fY0"
              title="AGT Bot Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-dark-light border border-gold/20 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-gold-light">Muốn Trải Nghiệm Thực Tế?</h3>
            <p className="text-gray-300 mb-6">
              Nhận tài khoản demo từ chúng tôi và xem AGT Bot hoạt động trực tiếp trên tài khoản của bạn!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("https://zalo.me/0708684608", "_blank")}
              >
                <Video className="mr-2 h-5 w-5" />
                Nhận Demo Qua Zalo
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-dark-darker font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Xem Hướng Dẫn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
