import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const features = [
    "Akses WhatsApp 24/7 untuk pelaporan warga",
    "Form chatbot interaktif yang membimbing pengguna",
    "Pemetaan laporan berdasarkan lokasi & kategori",
    "Integrasi ke dashboard internal Pemkab",
    "Penugasan ke OPD/instansi teknis secara otomatis",
    "Notifikasi kepada warga terkait tindak lanjut"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Solusi yang Diterapkan dalam Program #HaloBupati
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span className="text-lg text-card-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="bg-card rounded-2xl p-8 shadow-elevated">
          <h3 className="text-xl font-semibold text-center mb-8 text-card-foreground">
            Alur Proses HaloBupati
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                1
              </div>
              <span className="text-sm font-medium text-card-foreground">Warga</span>
            </div>
            
            <div className="hidden sm:block">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                2
              </div>
              <span className="text-sm font-medium text-card-foreground">WA Chatbot</span>
            </div>

            <div className="hidden sm:block">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                3
              </div>
              <span className="text-sm font-medium text-card-foreground">OPD</span>
            </div>

            <div className="hidden sm:block">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                4
              </div>
              <span className="text-sm font-medium text-card-foreground">Tindak Lanjut</span>
            </div>

            <div className="hidden sm:block">
              <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                5
              </div>
              <span className="text-sm font-medium text-card-foreground">Notifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;