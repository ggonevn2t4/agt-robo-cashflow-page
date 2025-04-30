
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const data = [
  { year: '2021', percent: 200 },
  { year: '2022', percent: 600 },
  { year: '2023', percent: 900 },
  { year: '2024', percent: 1272 }
];

const statsData = [
  { label: 'Equity', value: '18.171,61 USD', color: 'bg-blue-500' },
  { label: 'Profit', value: '18.507,63 USD', color: 'bg-blue-500' },
  { label: 'Initial Deposit', value: '1.608,00 USD', color: 'bg-blue-100' },
  { label: 'Withdrawals', value: '2.000,00 USD', color: 'bg-blue-100' },
  { label: 'Deposits', value: '0,00 USD', color: 'bg-transparent' }
];

const performanceData = [
  { label: 'Profit Factor', value: '2.99', color: 'text-gray-300' },
  { label: 'Expected Payoff', value: '10.85 USD', color: 'text-gray-300' },
  { label: 'Average Profit', value: '23.71 USD', color: 'text-green-500' },
  { label: 'Average Loss', value: '-17.44 USD', color: 'text-red-500' }
];

const TradingHistory = () => {
  return (
    <section className="py-16 relative" id="trading-history">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Clock className="h-8 w-8 mr-3 text-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Lịch Sử Giao Dịch 4 Năm
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Chart and Trading History */}
          <div className="bg-dark-light rounded-xl p-6 border border-gold/20 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/923a8398-8894-4c80-97c1-c61ef73a4b95.png" 
                  alt="AGT Robot Logo" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    RoboForex-Pro
                  </Badge>
                  <p className="text-gray-300 text-sm mt-1">1:500</p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-green-500">1 272%</h3>
                <div className="flex items-center justify-end">
                  <Badge className="bg-red-100 text-red-700">Reliability</Badge>
                  <span className="ml-3 text-gray-300"><span className="text-green-500">5</span> weeks (since 2021)</span>
                </div>
              </div>
            </div>
            
            <div className="h-52 mt-6">
              <ChartContainer config={{ data: { theme: { light: '#3b82f6', dark: '#3b82f6' } } }}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPercent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1D29', border: '1px solid #2A2D3E', borderRadius: '8px' }}
                    labelStyle={{ color: '#D4AF37' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="percent" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorPercent)" 
                  />
                </AreaChart>
              </ChartContainer>
            </div>
            
            <div className="grid grid-cols-1 gap-3 mt-8">
              {statsData.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300">{stat.label}</span>
                  <div className="flex items-center">
                    <span className="w-24 text-right text-white font-medium">{stat.value}</span>
                    <div className={`h-6 w-32 ml-4 ${stat.color} rounded-sm`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Live signal image */}
          <div className="bg-dark-light rounded-xl p-6 border border-gold/20 shadow-lg flex flex-col justify-center">
            <img 
              src="/lovable-uploads/7edf1e42-d91c-4f5c-a4db-28eb15a8f152.png" 
              alt="Live Signal Trading History" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            <div className="mt-8">
              <Card className="bg-dark border border-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-dark-light pb-2">
                        <span className="text-gray-300">{item.label}:</span>
                        <span className={item.color}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingHistory;
