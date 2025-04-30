
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto py-10 md:py-16 px-4 text-center relative">
      <div className="shine-effect">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gold-gradient animate-pulse-gold">
          AGT - Bot In Tiền Tự Động 24/7
        </h1>
      </div>
      
      <h2 className="text-xl md:text-2xl mb-4 text-gold-light font-semibold">
        Khởi Nghiệp Chỉ Với 100$, Kiếm 5$/Ngày
      </h2>
      
      <p className="text-lg text-gray-300 mb-8">
        Tỷ lệ thắng 100% - An toàn trên mọi sàn
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button 
          variant="default" 
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
          onClick={() => window.open("https://zalo.me/0708684608", "_blank")}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Nhận miễn phí qua Zalo
        </Button>
        
        <Button 
          variant="default" 
          className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-500 text-white font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
          onClick={() => window.open("https://t.me/agtbot", "_blank")}
        >
          <Send className="mr-2 h-5 w-5" />
          Nhận qua Telegram
        </Button>
      </div>
    </header>
  );
};

export default Header;
