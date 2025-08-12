import { Button } from "@/components/ui/button";
import { QrCode, MessageCircle } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Coba Simulasikan #HaloBupati
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pindai kode QR atau klik tombol di bawah untuk mencoba chatbot HaloBupati 
            dan kirim simulasi laporan seperti warga asli.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-24 h-24 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Pindai QR Code
              </h3>
              <p className="text-muted-foreground mb-6">
                Gunakan kamera ponsel Anda untuk memindai kode QR dan langsung terhubung ke chatbot demo
              </p>
              <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                Link demo: s.id/halobupati-demo
              </div>
            </div>
          </div>

          {/* WhatsApp Button Section */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <MessageCircle className="w-24 h-24 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Mulai Demo WhatsApp
              </h3>
              <p className="text-muted-foreground mb-8">
                Klik tombol di bawah untuk langsung mencoba chatbot HaloBupati melalui WhatsApp
              </p>
              <Button variant="demo" size="lg" className="w-full text-lg py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Mulai Simulasi WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary-light rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-primary font-medium mb-2">
              ℹ️ Keterangan Tambahan
            </p>
            <p className="text-primary/80">
              Layanan ini sepenuhnya terintegrasi dengan WhatsApp Business API dan 
              mendukung inkuiri dari warga secara otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;