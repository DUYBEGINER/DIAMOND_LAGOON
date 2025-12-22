import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const DESTINATIONS = [
    { id: 1, title: "Thánh Địa Mỹ Sơn", description: "Di tích đền tháp Chăm Pa bí ẩn trong thung lũng.Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 2, title: "Vườn Quốc Gia Bạch Mã", description: "Hệ sinh thái quan trọng của Đông Dương.Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 3, title: "Đầm Lập An", description: "Tuyệt Tình Cốc miền Trung với trời nước bao la.Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 4, title: "Phố Cổ Hội An", description: "Những ngôi nhà cổ phủ đầy rêu phong.Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 5, title: "Cố Đô Huế", description: "Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa.", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 6, title: "Cố Đô Huế", description: "Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa.", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
    { id: 7, title: "Cố Đô Huế", description: "Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa.", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },
{ id: 8, title: "Cố Đô Huế", description: "Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa Vẻ đẹp trầm mặc, cổ kính của kinh thành xưaVẻ đẹp trầm mặc, cổ kính của kinh thành xưa.", image: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75" },

]
;

const SwiperCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-screen bg-[#0f1912] overflow-hidden flex flex-col justify-center items-center font-serif text-white">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />

      {/* Tiêu đề chính */}
      <h1 className="absolute top-10 text-2xl md:text-4xl tracking-widest text-center uppercase z-10 drop-shadow-lg">
        Khám phá Miền Trung Việt Nam
      </h1>

      {/* Container chính */}
      <div className="relative w-full max-w-[1400px] h-[800px] flex justify-center items-center">
        
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          modules={[Navigation, Autoplay]}
          slidesPerView={'auto'} // Dùng auto để chỉnh width bằng CSS
          centeredSlides={true}
          spaceBetween={20}      // Khoảng cách
          loop={true}
          speed={600}            // Tốc độ mượt mà
          grabCursor={true}
          className="w-full h-full flex items-center" 
        >
          {DESTINATIONS.map((item) => (
            <SwiperSlide key={item.id} className="custom-slide">
              <div className="slide-inner w-full h-full flex flex-col items-center justify-center pt-10">
                
                {/* 1. Phần HÌNH ẢNH */}
                <div className="image-container relative w-full overflow-hidden shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay tối màu cho thẻ Inactive */}
                  {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 overlay-dim" /> */}
                </div>

                {/* 2. Phần NỘI DUNG */}
                <div className="text-center mt-6 transition-all duration-500 w-full px-2">
                  {/* Title: Luôn hiện */}
                  <h3 className="text-xl md:text-2xl text-white mb-2 tracking-wide font-medium drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  {/* Description & Button: Chỉ hiện khi Active */}
                  <div className="desc-wrapper overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                    <p className="text-sm text-gray-200 font-sans line-clamp-3 mb-4 mx-auto max-w-[90%]">
                      {item.description}
                    </p>
                    <button className="px-6 py-2 bg-[#b89e72] hover:bg-[#a68b5e] text-white text-xs font-sans tracking-widest uppercase transition-colors duration-300 mb-2">
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng */}
        <button onClick={() => swiperRef.current?.slidePrev()} className="absolute left-2 md:left-10 z-50 p-2 text-white/70 hover:text-white hover:scale-110 transition-all">
          <ChevronLeft size={60} strokeWidth={1} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="absolute right-2 md:right-10 z-50 p-2 text-white/70 hover:text-white hover:scale-110 transition-all">
          <ChevronRight size={60} strokeWidth={1} />
        </button>

      </div>

      {/* --- CSS STYLE --- */}
      <style jsx global>{`
        /* 1. Kích thước thẻ cơ bản (Inactive) */
        .custom-slide {
          width: 300px; /* Mobile width */
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5; /* Làm mờ các thẻ bên cạnh */
          transition: opacity 0.5s ease;
        }

        @media (min-width: 768px) {
          .custom-slide {
            width: 380px; /* Desktop width */
          }
        }

        /* 2. Style cho Hình ảnh */
        .image-container {
            width: 100%;
            height: 380px; /* Chiều cao mặc định (Vuông vức hơn) */
            transform: translateY(0);
        }

        /* -----------------------------------------------------
           TRẠNG THÁI ACTIVE (Thẻ Giữa)
           ----------------------------------------------------- */
        
        /* 1. Hiển thị rõ thẻ active */
        .swiper-slide-active {
            opacity: 1;
            z-index: 10;
        }

        /* 2. Kéo dài hình ảnh và đẩy lên trên */
        .swiper-slide-active .image-container {
            height: 550px; /* Kéo dài thành hình chữ nhật đứng */
            transform: translateY(-50px); /* Đẩy lên cao 50px */
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            border: 1px solid rgba(255,255,255,0.1);
        }

        /* 3. Xóa lớp phủ tối */
        .swiper-slide-active .overlay-dim {
            opacity: 0;
        }

        /* 4. Hiển thị mô tả và nút */
        .swiper-slide-active .desc-wrapper {
            max-height: 200px; /* Mở rộng chiều cao để hiện chữ */
            opacity: 1;
            margin-top: 10px;
        }

        /* Xử lý riêng cho thẻ Inactive để Title nằm sát hình hơn */
        .custom-slide:not(.swiper-slide-active) .text-center {
            margin-top: 1.5rem;
        }
        
        /* Hiệu ứng chuyển động mượt cho text khi active di chuyển lên */
        .swiper-slide-active .text-center {
             transform: translateY(-40px); /* Kéo text lên theo ảnh */
        }

      `}</style>
    </div>
  );
};

export default SwiperCarousel;