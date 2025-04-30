
import React from 'react';
import { List } from "lucide-react";

const FeaturesList = () => {
  const features = [
    {
      title: "Giao dịch tự động 24/7",
      description: "Bot hoạt động liên tục không cần giám sát, tự phát hiện và nắm bắt cơ hội giao dịch."
    },
    {
      title: "Tỷ lệ thắng 100%",
      description: "Thuật toán tiên tiến đảm bảo mọi giao dịch đều có lãi, không có giao dịch thua lỗ."
    },
    {
      title: "An toàn vốn tối đa",
      description: "Hệ thống quản lý rủi ro thông minh giúp bảo vệ vốn đầu tư của bạn."
    },
    {
      title: "Hoạt động trên mọi sàn",
      description: "Tương thích với tất cả các sàn giao dịch phổ biến hỗ trợ XAU/USD."
    },
    {
      title: "Không cần kiến thức chuyên sâu",
      description: "Dễ dàng cài đặt và sử dụng, phù hợp với cả người mới bắt đầu."
    },
    {
      title: "Hỗ trợ kỹ thuật 24/7",
      description: "Đội ngũ hỗ trợ sẵn sàng giúp đỡ bạn mọi lúc khi cần."
    }
  ];

  return (
    <section className="py-16 relative" id="features">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <List className="h-8 w-8 mr-3 text-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Tính Năng Nổi Bật
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-light border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 hover:shadow-gold">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="text-gold font-bold">{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gold-light">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-gold/40"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-gold/40"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-gold/40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
