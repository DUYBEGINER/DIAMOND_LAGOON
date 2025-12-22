import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Dữ liệu mẫu (Data) ---
const DESTINATIONS = [
  {
    id: 1,
    title: "Thánh Địa Mỹ Sơn",
    description: "Được hình thành vào thế kỷ IV, Thánh địa Mỹ Sơn là quần thể di tích đền tháp Chăm Pa bí ẩn, nằm ẩn mình trong thung lũng hoang sơ.",
    image: "",
  },
  {
    id: 2,
    title: "Vườn Quốc Gia Bạch Mã",
    description: "Được hình thành vào năm 1991, Bạch Mã được công nhận là một trong những khu vực có hệ sinh thái quan trọng của Đông Dương, là một nơi không thể bỏ lỡ dành cho những người đam mê khám phá đa dạng sinh học.",
    image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75",
  },
  {
    id: 3,
    title: "Đầm Lập An - Vịnh Lăng Cô",
    description: "Chiêm ngưỡng vẻ đẹp của 'Tuyệt Tình Cốc miền Trung' với trời nước bao la, nơi giao hòa giữa mây trời và mặt nước trong xanh phẳng lặng.",
    image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75",
  },
  {
    id: 4,
    title: "Phố Cổ Hội An",
    description: "Những ngôi nhà cổ phủ đầy rêu phong, những chiếc đèn lồng rực rỡ và dòng sông Hoài thơ mộng mang đến cảm giác hoài cổ yên bình.",
    image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75",
  },
  {
    id: 5,
    title: "Cố Đô Huế",
    description: "Khám phá vẻ đẹp trầm mặc, cổ kính của kinh thành xưa với những cung điện vàng son và lăng tẩm uy nghiêm đậm chất lịch sử.",
    image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75",
  },
];

const CARD_WIDTH = 300; // Độ rộng cơ bản của ảnh bên cạnh
const CENTER_CARD_WIDTH = 400; // Độ rộng ảnh giữa

const InfiniteCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // --- Logic vòng lặp vô tận ---
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % DESTINATIONS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length);
  };

  // Hàm tính toán vị trí tương đối để tạo hiệu ứng vòng tròn
  const getCardProps = (index) => {
    const length = DESTINATIONS.length;
    // Tính khoảng cách giữa item hiện tại và activeIndex
    let offset = (index - activeIndex);

    // Xử lý wrap-around (ví dụ: đang ở 0 mà item là 4 thì coi như item ở vị trí -1)
    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    // Chỉ hiển thị 3 item: -1 (trái), 0 (giữa), 1 (phải). Các item khác ẩn đi
    const isVisible = Math.abs(offset) <= 1;
    
    return {
      offset,
      isVisible
    };
  };

  return (
    <div className="relative w-full h-screen bg-[#0f1912] overflow-hidden flex flex-col justify-center items-center font-serif text-white">
      
      {/* Background Texture (Optional - tạo cảm giác noise nhẹ giống ảnh) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      {/* Container chính */}
      <div className="relative w-full max-w-6xl h-[700px] flex justify-center items-center perspective-1000">
        
        {DESTINATIONS.map((item, index) => {
          const { offset, isVisible } = getCardProps(index);
          
          // Nếu không nằm trong vùng hiển thị (-1, 0, 1) thì return null để nhẹ DOM
          if (!isVisible) return null;

          return (
            <Card 
              key={item.id}
              item={item}
              offset={offset}
            />
          );
        })}

        {/* Nút điều hướng (Nằm ra mép ngoài màn hình) */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 md:left-10 z-50 p-2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronLeft size={60} strokeWidth={1} />
        </button>

        <button 
          onClick={handleNext} 
          className="absolute right-4 md:right-10 z-50 p-2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronRight size={60} strokeWidth={1} />
        </button>

      </div>
    </div>
  );
};

// --- Component Card Riêng Biệt ---
const Card = ({ item, offset }) => {
  const isActive = offset === 0;
  
  // Tính toán vị trí X dựa trên offset
  // Nếu là 0 (giữa) -> x = 0
  // Nếu là -1 (trái) -> x = -450px (đẩy sang trái)
  // Nếu là 1 (phải) -> x = 450px (đẩy sang phải)
  const xPos = offset * 450; 
  
  return (
    <motion.div
      layout
      initial={false}
      animate={{
        x: xPos,
        scale: isActive ? 1 : 0.85, // Giữa tỉ lệ 1, bên cạnh nhỏ hơn (0.85)
        opacity: isActive ? 1 : 0.5, // Bên cạnh mờ đi
        zIndex: isActive ? 10 : 1, // Giữa nổi lên trên
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25,
        mass: 1 
      }}
      className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center" // Căn giữa tuyệt đối
      style={{
        width: isActive ? CENTER_CARD_WIDTH : CARD_WIDTH,
        transformOrigin: "center center"
      }}
    >
      {/* Phần Hình Ảnh */}
      <div 
        className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl transition-all duration-500 bg-gray-900"
        style={{
          boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Phần Nội Dung (Nằm dưới ảnh) */}
      <div className={`mt-8 text-center transition-all duration-500 px-4 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'}`}>
        
        {/* Tiêu đề - Luôn hiện nhưng size khác nhau */}
        <h3 className={`font-serif tracking-wide mb-4 transition-all duration-300 ${isActive ? 'text-3xl text-white' : 'text-xl text-gray-300'}`}>
          {item.title}
        </h3>

        {/* Mô tả - Chỉ hiện khi Active */}
        {isActive && (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm md:text-base text-gray-200 font-sans leading-relaxed max-w-sm mx-auto"
          >
            {item.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default InfiniteCarousel;