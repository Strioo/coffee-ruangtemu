import { business, navigation } from "@/content/site";
import { Container } from "./Container";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <div className="site-header__start">
          <a aria-label="ruang temu, kembali ke beranda" className="brand" href="#beranda">
            {business.brandName}
          </a>
          <nav aria-label="Navigasi utama" className="desktop-navigation">
            {navigation.map((item, index) => <a className={index === 0 ? "is-active" : ""} href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="site-header__actions">
          <a className="header-cta" href="#lokasi">Reservasi Tempat</a>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
