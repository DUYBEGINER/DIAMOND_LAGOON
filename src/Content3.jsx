import React from 'react'

function Content3() {
  return (
    <section className="min-h-[550px] lg:max-h-[800px]  md:w-full mx-0 md:mx-auto justify-center px-0 lg:px-5 flex flex-col lg:flex-row lg:gap-0 items-stretch bg-[#e8e6e1] py-12 md:py-18 lg:py-25 overflow-hidden">
      {/* Left content */}
      <div className="order-2 lg:order-1 w-full md:min-w-[450px] px-8 lg:px-0 py-10 lg:w-[35%] lg:pr-10 lg:max-w-[500px] space-y-6 lg:space-y-8 flex flex-col justify-center">
        <h2 className="text-[1.8rem] leading-10 whitespace-pre-wrap font-display font-semibold sm:text-[1.9rem] md:text-[2rem] text-[#082B26] tracking-[5px]">
          TIÊU ĐỀ THÊM VÀO ĐÂY NÈ HUY ĐẦU B
        </h2>

        <div className="pl-0 xl:pl-8 space-y-4">
          <div className="space-y-4 font-niramit text-justify text-[#082B26] font-[400px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit optio, provident ad aspernatur atque repellat suscipit quasi, excepturi cumque at recusandae labore veritatis alias tempora nulla sapiente eum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus totam molestiae eum dignissimos laudantium aspernatur. Sint sunt perspiciatis, ipsum eius, non nesciunt quasi, fugit dicta iusto quibusdam at nobis?
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 px-10 font-display tracking-[0.18em] uppercase text-sm bg-[#c49b63] text-white hover:bg-[#a37e4e] transition-colors"
            >
              GIỮ BUTTON NÀY?
            </a>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full lg:max-w-[900px] order-1 lg:order-2">
        <div className="relative mx-auto w-full h-[300px] lg:h-full">
          <img
            src="https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-09%2Fbt-langco-festiveseason_1.jpg&w=1920&q=75"
            alt="Banyan Tree Lãng Cô - Michelin Keys"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Content3
