import processFlow from "@/assets/process-flow.jpg";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Menjembatani Komunikasi Warga dan Pemerintah Daerah
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kabupaten Pamekasan ingin memperkuat hubungan langsung antara pemerintah dan warganya. 
                Tantangan seperti pelaporan kerusakan infrastruktur, layanan tidak optimal, hingga aduan 
                sosial sering kali terhambat karena proses yang manual dan berbelit.
              </p>
              <p>
                Melalui inisiatif <span className="font-semibold text-primary">#HaloBupati</span>, 
                Pemkab menghadirkan jalur pelaporan berbasis WhatsApp yang dapat diakses oleh siapa saja — 
                tanpa perlu mengunduh aplikasi baru.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={processFlow}
                alt="Ilustrasi proses pelaporan warga melalui HaloBupati"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-secondary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;