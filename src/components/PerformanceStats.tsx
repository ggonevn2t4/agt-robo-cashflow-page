
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

const PerformanceStats = () => {
  const stats = [
    {
      title: "Tỷ lệ thắng",
      value: "100%",
      description: "Tất cả các giao dịch đều có lãi"
    },
    {
      title: "Lợi nhuận trung bình",
      value: "5%/ngày",
      description: "Với số vốn 100$"
    },
    {
      title: "Thời gian hoạt động",
      value: "24/7",
      description: "Bot hoạt động liên tục"
    },
    {
      title: "Số khách hàng",
      value: "1000+",
      description: "Đã tin dùng AGT Bot"
    }
  ];

  return (
    <section className="py-16 relative" id="performance">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <BarChart2 className="h-8 w-8 mr-3 text-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Hiệu Suất Ấn Tượng
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-dark-light border-gold/20 overflow-hidden relative group hover:border-gold/40 transition-all duration-300">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500"></div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gold-light mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-dark-light p-6 rounded-xl border border-gold/20">
          <h3 className="text-xl font-bold mb-4 text-gold">Biểu Đồ Lợi Nhuận Hàng Tháng</h3>
          <div className="bg-dark-darker p-4 rounded-lg border border-gold/10 h-[300px] flex items-center justify-center">
            <p className="text-gray-400">Biểu đồ thống kê lợi nhuận AGT Bot</p>
            {/* Replace this with a real chart component if you have data */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
