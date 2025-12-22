import { useState } from "react";

function Content5() {
  const villas = [
    {
      id: 1,
      title: "One-Bedroom Seaview Hill Pool Villa",
      description:
        "Biệt thự One-bedroom Seaview Hill Pool Villa nổi bật với bể bơi vô cực, không gian sống thanh lịch và cảnh biển bao la cùng núi non hùng vĩ, thích hợp cho chuyến nghỉ dưỡng cùng gia đình hoặc bạn bè.",
      image:
        "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20One-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool.jpg&w=1920&q=75",
      guests: 2,
      beds: "King",
      area: "152 mét vuông",
      view: "Ocean",
    },
    {
      id: 2,
      title: "Two-Bedroom Seaview Hill Pool Villa",
      description:
        "Biệt thự Two-bedroom Seaview Hill Pool Villa nổi bật với bể bơi vô cực, không gian rộng rãi và cảnh biển bao la xen lẫn núi non hùng vĩ, thích hợp cho chuyến nghỉ dưỡng cùng gia đình hoặc bạn bè.",
      image:
        "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2FBT-langco-%20Two-bedroom%20Seaview%20Hill%20Pool%20Villa%20-%20Private%20Pool%202.jpg&w=1920&q=75",
      guests: 4,
      beds: "2 King",
      area: "237 mét vuông",
      view: "Ocean",
    },
    {
      id: 3,
      title: "Three-Bedroom Oceanview Pool Villa",
      description:
        "Nằm trên đồi giữa lòng dải dương bao la, Biệt thự Three-Bedroom Pool Villa nổi bật với bể bơi vô cực bao quanh là biển xanh ngắt, cùng không gian rộng rãi, thích hợp cho chuyến nghỉ dưỡng cùng gia đình và bạn bè",
      image:
        "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2Fbt-langco-%20Three-bedroom%20Oceanview%20Pool%20Villa%20-%20Private%20Pool%20with%20Sunrise.jpg&w=1920&q=75",
      guests: 6,
      beds: "Twin, 2 King",
      area: "260 mét vuông",
      view: "Ocean",
    },
  ];

  return (
    <div className="bg-[#e8e4dc] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold md:text-4xl tracking-[0.2em] text-center mb-12 text-gray-800">
          BIỆT THỰ ĐẶC TRƯNG
        </h2>

        {/* Villa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {villas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VillaCard({ villa }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative group overflow-hidden">
        <img
          src={villa.image}
          alt={villa.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
        
         
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-light mb-3 text-gray-800 min-h-[56px]">
          {villa.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">
          {villa.description}
        </p>

        {/* Amenities */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="text-sm">{villa.guests}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">{villa.beds}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span className="text-sm">{villa.area}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            <span className="text-sm">{villa.view}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button className="w-full py-3 border border-gray-800 text-gray-800 text-sm font-light tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300">
            TÌM HIỂU
          </button>
          <button className="w-full py-3 bg-[#b5a382] text-white text-sm font-light tracking-wider hover:bg-[#a39272] transition-all duration-300">
            ĐẶT NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content5;
