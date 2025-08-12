import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin menghadirkan jalur pelaporan warga yang modern dan efisien di daerah Anda?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Kami bantu integrasi dari sistem existing, komunikasi, hingga pelatihan.
          </p>
          
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 mb-16">
            <Phone className="w-5 h-5 mr-2" />
            Minta Demo Kolaborasi Sekarang
          </Button>

          {/* Navigation Links */}
          <div className="border-t border-white/20 pt-12">
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-white mb-3 rotate-180" />
                <h3 className="text-white font-semibold mb-2">Studi Kasus Lainnya</h3>
                <p className="text-white/70 text-sm">Lihat implementasi HaloGov di daerah lain</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-6 h-6 text-white mb-3" />
                <h3 className="text-white font-semibold mb-2">Kontak Tim HaloGov</h3>
                <p className="text-white/70 text-sm">Konsultasi langsung dengan tim ahli kami</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-white mb-3" />
                <h3 className="text-white font-semibold mb-2">Solusi Pelaporan Warga</h3>
                <p className="text-white/70 text-sm">Pelajari fitur lengkap sistem pelaporan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;