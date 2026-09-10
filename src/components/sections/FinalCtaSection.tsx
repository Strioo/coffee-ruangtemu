import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { business } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <Container>
        <div className="final-cta__panel">
          <span aria-hidden="true" className="final-cta__icon"><Icon name="favorite" size={26} /></span>
          <p className="eyebrow">Kunjungan &amp; Reservasi</p>
          <h2>Siap bertemu di ruang temu?</h2>
          <p>Pilih tempat favoritmu, nikmati racikan kopi, dan rasakan ruang yang dirancang untuk kenyamananmu.</p>
          <div className="button-row">
            <a className="button button--light" href="#lokasi">Reservasi Sekarang <span aria-hidden="true">→</span></a>
            {business.whatsappUrl ? <a className="button button--light-outline" href={business.whatsappUrl} rel="noreferrer" target="_blank">Hubungi WhatsApp</a> : <a className="button button--light-outline" href="#menu">Lihat Menu</a>}
          </div>
        </div>
      </Container>
    </section>
  );
}
