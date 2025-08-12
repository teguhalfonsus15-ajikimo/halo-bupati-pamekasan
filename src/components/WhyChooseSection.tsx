import { CheckCircle } from "lucide-react";
import whatsappDemo from "@/assets/whatsapp-demo.jpg";

const WhyChooseSection = () => {
  const benefits = [
    "Tidak perlu antre atau datang ke kantor",
    "Laporan langsung diteruskan ke dinas terkait",
    "Bisa memantau status penyelesaian",
    "Gratis, cepat, dan bisa digunakan siapa saja"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kenapa Warga Memilih HaloBupati?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={whatsappDemo}
                alt="Screenshot WhatsApp chatbot HaloBupati"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full opacity-20"></div>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg text-card-foreground font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-secondary rounded-xl text-center">
              <p className="text-secondary-foreground font-medium mb-2">
                💡 Fakta Menarik
              </p>
              <p className="text-secondary-foreground/80">
                Lebih dari 90% warga Pamekasan sudah menggunakan WhatsApp, 
                sehingga adopsi HaloBupati sangat mudah dan cepat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;