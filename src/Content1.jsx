import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function Content1() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    // Giới hạn từ 0% đến 100%
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e) => {
      updateSliderPosition(e.touches[0].clientX);
    },
    [updateSliderPosition]
  );

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
    } else {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
    }

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="min-h-[550px] md:w-full mx-0 md:mx-auto justify-center px-0 lg:px-5 flex flex-col lg:flex-row lg:gap-0 items-stretch bg-[#e8e6e1] py-12 md:py-18 lg:py-25 overflow-hidden">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="order-2 lg:order-1 w-full px-8 lg:px-0 py-10 lg:w-[35%] lg:pr-10 lg:max-w-[500px] space-y-6 lg:space-y-8 "
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[2rem] leading-10 whitespace-pre-wrap font-display font-semibold sm:text-[2rem] md:text-[2rem] text-[#082B26] tracking-[5px]"
        >
          THAY TIÊU ĐỀ CHỔ NÀY NÈ HUY
        </motion.h2>

        <div className="pl-0 md:pl-8 space-y-4">
          <div className="space-y-4 font-niramit text-justify text-[#082B26] font-[400px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tận hưởng một thiên đường của những giấc quan tại Banyan Tree Lãng
              Cô, một khu nghỉ dưỡng biển với 89 căn biệt thự hạng sang, tất cả
              đều có hồ bơi riêng, nằm nép mình giữa biển Đông xanh ngắt và dãy
              Trường Sơn hùng vĩ.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Tọa lạc gần ba thành phố văn hóa du lịch lớn:{" "}
              <a
                href="#"
                className="text-[#c49b63] hover:underline transition-colors"
              >
                Huế
              </a>
              ,{" "}
              <a
                href="#"
                className="text-[#c49b63] hover:underline transition-colors"
              >
                Đà Nẵng
              </a>
              ,{" "}
              <a
                href="#"
                className="text-[#c49b63] hover:underline transition-colors"
              >
                Hội An
              </a>
              , kết nối du khách với ba di sản văn hóa nổi tiếng được{" "}
              <a
                href="#"
                className="text-[#c49b63] hover:underline transition-colors"
              >
                UNESCO
              </a>{" "}
              công nhận: Phố cổ Hội An, Kính thành Huế và Thánh địa Mỹ Sơn,
              Banyan Tree Lãng Cô là một điểm đến hoàn hảo để khám phá về nguyên
              sơ và thơ mộng của dải đất duyên hải miền Trung Việt Nam.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Right Image Comparison Slider */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:max-w-[900px] order-1 lg:order-2 cursor-grab"
      >
        <div
          ref={containerRef}
          className="relative mx-auto w-full h-[300px] lg:h-full select-none"
        >
          {/* Background Image (Right Side) */}
          <img
            src="https://www.banyantree.com/assets/2025-02/bt-langco-Three-bedroom%20Oceanview%20Pool%20Villa%20-%20Exterior.jpg"
            alt="Oceanview"
            className="p-0 mx-0 my-0 absolute inset-0 w-full h-full object-cover"
            draggable="false"
          />
          {/* Foreground Image (Left Side) - với clip-path */}
          <img
            src="https://www.banyantree.com/assets/2025-06/bt-langco-front.png"
            alt="Pool Villa"
            className="absolute p-0 mx-0 my-0 inset-0 w-full h-full object-cover"
            draggable="false"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          />
          <div 
                  className="absolute top-0 bottom-0 w-5 -translate-x-1/2 cursor-grab active:cursor-grabbing z-20 flex justify-center"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
          {/* Slider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-grab active:cursor-grabbing z-20"
          >
            {/* Top Diamond */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-5 h-5">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="white"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3.01c-1.097 1.139-4.898 8.107-9.358 8.718 5.59 2.13 9.247 9.378 9.247 9.378S14.267 13.26 21.057 12c-.524-1.733-4.223.694-9.057-8.99z" />
              </svg>
            </div>

            {/* Bottom Diamond */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5 h-5" >
             <svg
                className="w-5 h-5 text-gray-600"
                fill="white"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3.01c-1.097 1.139-4.898 8.107-9.358 8.718 5.59 2.13 9.247 9.378 9.247 9.378S14.267 13.26 21.057 12c-.524-1.733-4.223.694-9.057-8.99z" />
              </svg>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Content1;
