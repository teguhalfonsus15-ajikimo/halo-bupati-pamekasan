import { Smartphone, Clock, Building, Users } from "lucide-react";

const ImpactSection = () => {
  const metrics = [
    {
      icon: Smartphone,
      number: "9.200+",
      label: "laporan masuk dalam 6 bulan pertama",
      bgColor: "bg-primary-light"
    },
    {
      icon: Clock,
      number: "< 3 jam",
      label: "Rata-rata waktu respons awal",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Building,
      number: "16+",
      label: "OPD terlibat dalam sistem penanganan laporan",
      bgColor: "bg-primary-light"
    },
    {
      icon: Users,
      number: "78%",
      label: "Tingkat kepuasan pelapor meningkat",
      bgColor: "bg-secondary-light"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dampak Nyata dari Implementasi HaloBupati
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.number}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-elevated">
          <div className="max-w-4xl mx-auto">
            <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "Dengan HaloBupati, laporan warga langsung kami terima dan tindak lanjuti. 
              Ini mempercepat respon sekaligus membangun kepercayaan publik."
            </blockquote>
            <cite className="text-white/80 font-medium">
              — Perwakilan Pemkab Pamekasan
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;