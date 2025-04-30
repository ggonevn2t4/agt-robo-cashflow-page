
import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign } from "lucide-react";

const PriceComparison = () => {
  const plans = [
    {
      name: "Cơ Bản",
      price: "Miễn Phí",
      features: [
        "Bot giao dịch cơ bản",
        "Hoạt động 24/7",
        "Hỗ trợ qua nhóm Zalo",
        "Tỷ lệ thắng 95%",
        "Giao dịch XAU/USD"
      ],
      recommended: false
    },
    {
      name: "Pro",
      price: "300.000đ",
      features: [
        "Tất cả tính năng cơ bản",
        "Tỷ lệ thắng 100%",
        "Hỗ trợ kỹ thuật 1:1",
        "Cài đặt từ xa miễn phí",
        "Công cụ quản lý rủi ro"
      ],
      recommended: true
    },
    {
      name: "VIP",
      price: "500.000đ",
      features: [
        "Tất cả tính năng Pro",
        "Chiến lược nâng cao",
        "Hỗ trợ nhiều cặp tiền",
        "Báo cáo hiệu suất chuyên sâu",
        "Tư vấn đầu tư cá nhân"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-16 relative" id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <DollarSign className="h-8 w-8 mr-3 text-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Bảng Giá Dịch Vụ
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-dark-light border ${plan.recommended ? 'border-gold' : 'border-gold/20'} rounded-xl overflow-hidden relative flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gold text-dark-darker text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3">
                    KHUYÊN DÙNG
                  </div>
                </div>
              )}
              
              <div className={`p-6 text-center ${plan.recommended ? 'bg-gold/10' : ''}`}>
                <h3 className="text-xl font-bold mb-2 text-gold-light">{plan.name}</h3>
                <p className="text-3xl font-bold text-gold mb-4">{plan.price}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-2 text-xl">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6">
                <Button 
                  variant={plan.recommended ? "default" : "outline"} 
                  className={`w-full py-6 ${plan.recommended ? 'bg-gold text-dark-darker hover:bg-gold-light' : 'border-gold text-gold hover:bg-gold hover:text-dark-darker'}`}
                >
                  Chọn Gói
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center text-gold">So Sánh Chi Tiết</h3>
          
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-dark-darker">
                  <TableHead className="text-gold-light">Tính năng</TableHead>
                  <TableHead className="text-center text-gold-light">Cơ Bản</TableHead>
                  <TableHead className="text-center text-gold-light">Pro</TableHead>
                  <TableHead className="text-center text-gold-light">VIP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Tỷ lệ thắng</TableCell>
                  <TableCell className="text-center">95%</TableCell>
                  <TableCell className="text-center">100%</TableCell>
                  <TableCell className="text-center">100%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cặp giao dịch</TableCell>
                  <TableCell className="text-center">XAU/USD</TableCell>
                  <TableCell className="text-center">XAU/USD</TableCell>
                  <TableCell className="text-center">Nhiều cặp</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hỗ trợ kỹ thuật</TableCell>
                  <TableCell className="text-center">Nhóm chung</TableCell>
                  <TableCell className="text-center">Hỗ trợ 1:1</TableCell>
                  <TableCell className="text-center">Ưu tiên VIP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thời gian hỗ trợ</TableCell>
                  <TableCell className="text-center">Giờ hành chính</TableCell>
                  <TableCell className="text-center">24/7</TableCell>
                  <TableCell className="text-center">24/7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
