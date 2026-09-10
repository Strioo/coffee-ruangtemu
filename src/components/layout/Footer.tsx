import { business, navigation } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <p className="site-footer__brand">{business.brandName}</p>
            <p className="site-footer__intro">Sebuah titik temu yang tenang untuk menikmati kopi, mengeksplorasi ide produktif, dan membangun koneksi dalam suasana hangat.</p>
            <div className="footer-socials">
              <a href={business.instagramUrl} rel="noreferrer" target="_blank">Instagram ↗</a>
            </div>
          </div>
          <div>
            <p className="footer-label">Navigasi Cepat</p>
            <nav aria-label="Navigasi footer" className="footer-navigation">
              {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            </nav>
          </div>
          <div>
            <p className="footer-label">Kunjungi Kami</p>
            <p className="footer-muted">{business.address}</p>
            <p className="footer-muted footer-hours">{business.operatingHours}</p>
          </div>
          <div className="footer-action">
            <p className="footer-label">Temukan Ruangmu</p>
            <p className="footer-muted">Lihat suasana dan pilihan menu sebelum berkunjung.</p>
            <a className="button button--footer" href="#lokasi">Lihat Lokasi</a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} ruang temu</p>
          <a href="#beranda">Kembali ke atas ↑</a>
        </div>
      </Container>
    </footer>
  );
}
