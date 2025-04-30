
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      location: "TP. Hồ Chí Minh",
      rating: 5,
      comment: "Đã sử dụng AGT Bot được 3 tháng, lợi nhuận ổn định 4-5$/ngày với số vốn 100$. Rất hài lòng!",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Trần Thị B",
      location: "Hà Nội",
      rating: 5,
      comment: "Ban đầu còn nghi ngờ, nhưng sau khi dùng thử đã thấy hiệu quả rõ rệt. AGT Bot giúp tôi tăng thu nhập thụ động mỗi ngày.",
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Lê Văn C",
      location: "Đà Nẵng",
      rating: 4,
      comment: "Dễ cài đặt và sử dụng. Bot hoạt động ổn định 24/7, hỗ trợ kỹ thuật nhanh chóng khi cần.",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];

  return (
    <section className="py-16 relative" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-dark-light border-gold/20 hover:border-gold/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-light">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold' : 'text-gray-500'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
