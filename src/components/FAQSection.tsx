
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "AGT Bot là gì?",
      answer: "AGT Bot là bot giao dịch tự động chuyên về XAU/USD (vàng), hoạt động 24/7 với tỷ lệ thắng cao và an toàn trên mọi sàn giao dịch."
    },
    {
      question: "Cần bao nhiêu vốn để bắt đầu?",
      answer: "Bạn chỉ cần 100$ để bắt đầu hành trình kiếm tiền với AGT Bot."
    },
    {
      question: "Làm thế nào để nhận được AGT Bot?",
      answer: "Bạn có thể liên hệ qua Zalo hoặc Telegram để được hỗ trợ nhận và cài đặt AGT Bot miễn phí."
    },
    {
      question: "AGT Bot có hoạt động trên sàn giao dịch nào?",
      answer: "AGT Bot hoạt động tốt trên hầu hết các sàn giao dịch phổ biến hỗ trợ XAU/USD."
    },
    {
      question: "Lợi nhuận trung bình hàng ngày là bao nhiêu?",
      answer: "Với vốn 100$, bạn có thể kiếm được khoảng 5$ mỗi ngày, tương đương 5% lợi nhuận hàng ngày."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold">
          Câu Hỏi Thường Gặp
        </h2>
        
        <div className="max-w-3xl mx-auto bg-dark-light p-6 rounded-xl border border-gold/20 relative">
          {/* Glowing effect */}
          <div className="absolute inset-0 -z-10 bg-gold/5 blur-xl"></div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gold/20">
                <AccordionTrigger className="text-lg font-medium text-gold-light hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FAQSection;
