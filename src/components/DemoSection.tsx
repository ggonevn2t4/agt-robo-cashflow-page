
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
          {/* Video container */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gold/30 mb-8">
            <div className="absolute inset-0 bg-dark-darker flex items-center justify-center">
              {/* Replace with actual video or live demo */}
              <div className="text-center">
                <Video className="h-16 w-16 text-gold mx-auto mb-4" />
                <p className="text-gold-light text-xl">Video Demo AGT Bot</p>
              </div>
            </div>
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
