import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

export function HeroSection() {
  return (
    <section className="hero section" id="beranda">
      <Container className="hero__grid">
        <div className="hero__content">
          <div className="hero__pills"><p className="pill"><span aria-hidden="true" />coffee &amp; space</p><p className="pill pill--secondary">ruang temu</p></div>
          <h1>Tempat ngopi, bekerja, dan bertemu.</h1>
          <p className="hero__lead">Ruang hangat untuk menikmati kopi, menyelesaikan pekerjaan, atau berbagi cerita bersama orang terdekat di suasana tenang.</p>
          <div className="button-row">
            <a className="button button--primary" href="#lokasi">Reservasi Tempat <Icon className="button-icon" name="calendar" size={18} /></a>
            <a className="button button--outline" href="#menu">Lihat Menu <Icon className="button-icon" name="arrow-right" size={18} /></a>
          </div>
          <div className="hero__keywords"><span><Icon name="coffee" size={16} />Kopi</span><b>•</b><span><Icon name="laptop" size={16} />Workspace</span><b>•</b><span><Icon name="users" size={16} />Community</span></div>
        </div>
        <div className="hero__media image-frame">
          <Image
            alt="Fasad depan ruang temu pada siang hari"
            fill
            fetchPriority="high"
            priority
            quality={70}
            sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) min(720px, calc(100vw - 80px)), (max-width: 1279px) calc((100vw - 208px) / 2), 536px"
            src="/images/hero/fasad-ruang-temu-siang.jpg"
          />
          <div className="hero__caption"><span><Icon name="clock" size={20} /></span><div><strong>ruang temu</strong><small>coffee · space · community</small></div><em>Outdoor &amp; Indoor</em></div>
        </div>
      </Container>
    </section>
  );
}
