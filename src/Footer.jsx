import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#A89B85] text-white pt-12 pb-8 font-sans">
        <div className="absolute inset-0 bg-gray-600/50 z-10"><span className="text-red-500 font-bold text-2xl">Có cần cái này không ? Hay huy muốn thay bằng tên nhóm hay gì gì đó</span></div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        
        {/* Top Section: Socials & Button */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/30 pb-8 mb-10 gap-6">
          
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-200 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Twitter size={20} /></a>
          </div>

          {/* Button */}
          <button className="border border-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-[#A89B85] transition-all uppercase">
            Best Price Guarantee
          </button>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 text-sm">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Our Brands</h4>
            <a href="#" className="hover:underline opacity-90">Laguna</a>
            <a href="#" className="hover:underline opacity-90">Banyan Tree Veya</a>
            <a href="#" className="hover:underline opacity-90">Banyan Tree Escape</a>
            <a href="#" className="hover:underline opacity-90">Angsana</a>
            <a href="#" className="hover:underline opacity-90">Garrya</a>
            <a href="#" className="hover:underline opacity-90">Cassia</a>
            <a href="#" className="hover:underline opacity-90">Dhawa</a>
            <a href="#" className="hover:underline opacity-90">Homm</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Our Products</h4>
            <a href="#" className="hover:underline opacity-90">Essentials</a>
            <a href="#" className="hover:underline opacity-90">Gift Cards</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Corporate Site</h4>
            <a href="#" className="hover:underline opacity-90">Careers</a>
            <a href="#" className="hover:underline opacity-90">Brand Story</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Associated Sites</h4>
            <a href="#" className="hover:underline opacity-90">withBanyan</a>
            <a href="#" className="hover:underline opacity-90">Banyan Global Foundation</a>
            <a href="#" className="hover:underline opacity-90">Banyan Living</a>
          </div>

           {/* Column 5 */}
           <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Media</h4>
            <a href="#" className="hover:underline opacity-90">Newsroom</a>
            <a href="#" className="hover:underline opacity-90">Under the Banyan Tree</a>
          </div>

           {/* Column 6 */}
           <div className="flex flex-col gap-3">
            <h4 className="font-bold tracking-widest mb-2 uppercase">Contact Us</h4>
            <a href="#" className="hover:underline opacity-90">Get in Touch</a>
            <a href="#" className="hover:underline opacity-90">Support</a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-80">
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <span>Copyright © 2025 - Banyan Tree Hotels & Resorts. All rights reserved</span>
            <div className="flex gap-4">
                <a href="#" className="hover:underline">Terms & Conditions</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Cookie Policy</a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>In partnership with</span>
            <span className="font-bold text-lg tracking-tighter">ALL</span>
            <span className="text-[10px] leading-tight">ACCOR<br/>LIVE<br/>LIMITLESS</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
