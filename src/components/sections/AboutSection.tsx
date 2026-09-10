import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="section section--border" id="tentang">
      <Container className="about-grid">
        <div className="about-mobile-heading"><SectionHeading eyebrow="tentang ruang temu" title="Lebih dari tempat minum kopi." /></div>
        <div className="about-media image-frame">
          <Image alt="Area coffee bar di ruang temu" fill quality={70} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) min(720px, calc(100vw - 80px)), (max-width: 1279px) calc(41.67vw - 93px), 440px" src="/images/place/coffee-bar.jpg" />
          <div className="about-stamp"><strong>☕ Freshly Brewed</strong><span>Racikan kopi untuk menemani waktu.</span></div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="tentang ruang temu" title="Lebih dari tempat minum kopi." />
          <p>ruang temu menghadirkan kopi, ruang nyaman, dan suasana tenang dalam satu tempat. Datang untuk bekerja santai, berdiskusi proyek, atau sekadar mengambil jeda sejenak dari hiruk-pikuk kota.</p>
          <div className="tag-row" aria-label="Karakter ruang temu">
            <span><Icon name="coffee" size={18} />Artisanal Coffee</span><span><Icon name="desk" size={18} />Workspace</span><span><Icon name="park" size={18} />Area Hijau</span>
          </div>
          <div className="about-note">
            <div className="about-note__image image-frame"><Image alt="Area duduk panjang ruang temu" fill quality={65} sizes="144px" src="/images/workspace/area-duduk-panjang.jpg" /></div>
            <p><strong>Sudut Tenang &amp; Hangat</strong>Area duduk berpencahayaan hangat untuk berdiskusi atau beristirahat.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
