
import React from 'react';

const CentralVisual = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 wavy-line dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Robot with Trading Interface */}
          <div className="relative w-full md:w-1/2 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-dark/20 blur-2xl rounded-full"></div>
              <div className="relative bg-dark-light p-6 rounded-2xl border border-gold/20 shadow-gold">
                <div className="robot-container relative">
                  {/* Robot Head with Glowing Visor */}
                  <div className="robot-head bg-dark-darker w-32 h-36 mx-auto rounded-t-2xl rounded-b-lg border-t-2 border-gold/50 relative overflow-hidden">
                    {/* Visor */}
                    <div className="absolute w-24 h-6 bg-gold top-10 left-4 rounded-md animate-pulse-gold"></div>
                    
                    {/* Antenna */}
                    <div className="absolute w-2 h-8 bg-gray-700 top-0 left-1/2 transform -translate-y-6 -translate-x-1/2">
                      <div className="w-4 h-4 bg-gold rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse-gold"></div>
                    </div>
                    
                    {/* Robot Body */}
                    <div className="robot-body w-40 h-44 bg-dark-light rounded-lg border border-gold/30 absolute -bottom-44 -left-4">
                      {/* Control Panel */}
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                          <div key={num} className="w-full h-4 rounded-sm bg-dark-darker border border-gold/20"></div>
                        ))}
                      </div>
                      <div className="h-6 w-20 mx-auto bg-gold/20 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Trading interface */}
                <div className="mt-20 bg-dark-darker p-4 rounded-lg border border-gold/30 shadow-inner">
                  <div className="text-gold text-sm font-mono text-center mb-2">XAU/USD</div>
                  <div className="h-24 flex items-center justify-center overflow-hidden">
                    <svg width="250" height="80" viewBox="0 0 250 80" className="stroke-gold-light">
                      <polyline 
                        points="0,40 20,45 40,35 60,50 80,30 100,40 120,20 140,35 160,25 180,40 200,15 220,30 240,25 250,20" 
                        fill="none" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between text-xs text-gold/70 font-mono mt-2">
                    <span>09:30</span>
                    <span>12:00</span>
                    <span>15:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profit Symbols */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4 md:gap-8 p-4">
            {/* Gold Coins Stack */}
            <div className="coin-stack relative">
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
              <div className="relative z-10">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <div 
                    key={idx}
                    className="w-20 h-20 rounded-full bg-gold border-2 border-gold-light flex items-center justify-center text-dark-darker font-bold text-lg shadow-gold"
                    style={{ marginTop: `-${idx * 8}px`, zIndex: 5 - idx }}
                  >
                    $
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dollar Signs */}
            <div className="dollar-symbols flex flex-col items-center">
              <div className="text-gold text-7xl font-bold animate-float shadow-gold-lg">
                $
              </div>
              <div className="text-gold-light text-5xl font-bold mt-6 animate-float" style={{ animationDelay: "1s" }}>
                $
              </div>
              <div className="text-gold-dark text-6xl font-bold mt-4 animate-float" style={{ animationDelay: "0.5s" }}>
                $
              </div>
            </div>
            
            {/* Gold Bars */}
            <div className="gold-bars flex flex-col gap-2">
              <div className="h-10 w-24 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-md shadow-gold"></div>
              <div className="h-10 w-24 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-md shadow-gold ml-4"></div>
              <div className="h-10 w-24 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-md shadow-gold"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default CentralVisual;
