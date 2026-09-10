import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredMenu, formatPrice, menuSheets } from "@/content/site";

const menuIcons: IconName[] = ["coffee", "coffee-maker", "sparkles", "wine", "water-bottle", "restaurant"];

export function FeaturedMenuSection() {
  return (
    <section className="section section--border" id="menu">
      <Container>
        <div className="section-header-row">
          <SectionHeading
            eyebrow="pilihan menu"
            title="Teman untuk setiap suasana."
            description="Pilih kopi, minuman segar, dan sajian favorit untuk menemani setiap detak waktumu."
          />
          <span className="source-badge">Biji Lokal &amp; Bahan Pilihan</span>
        </div>
        <a aria-label={`Buka ${menuSheets[0].alt} ukuran penuh`} className="menu-mobile-sheet" href={menuSheets[0].src} target="_blank"><Image alt={menuSheets[0].alt} height={menuSheets[0].height} sizes="calc(100vw - 40px)" src={menuSheets[0].src} width={menuSheets[0].width} /></a>
        <div className="menu-grid">
          {featuredMenu.map((item, index) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__top"><span className="menu-card__icon"><Icon name={menuIcons[index]} size={22} /></span><p>{item.category}</p><strong>{formatPrice(item.price)}</strong></div>
              <div className="menu-card__body"><h3>{item.name}</h3><p>{["Coffee Milk Signature House Blend", "Espresso infused fresh strawberry", "Passion fruit, mint leaves, sparkling soda", "Crisp green apple meets espresso", "Ready-to-drink coffee on the go", "Pasta hangat untuk teman bersantai"][index]}</p></div>
              <div className="menu-card__meta"><span>{index < 2 ? "Es / Panas Tersedia" : "Pilihan Favorit"}</span><Icon name={index % 2 ? "star" : "favorite"} size={18} /></div>
            </article>
          ))}
        </div>
        <a className="button button--primary menu-mobile-button" href={menuSheets[0].src} target="_blank">Lihat Semua Menu <Icon name="restaurant-menu" size={18} /></a>
        <div className="menu-sheets">
          <div className="menu-sheets__heading-row">
            <div className="menu-sheets__heading">
              <p className="eyebrow">Buku Menu Fisik</p>
              <h3>Daftar Menu Resmi Ruang Temu</h3>
            </div>
            <a className="button button--primary" href={menuSheets[0].src} target="_blank">Lihat Semua Menu <span aria-hidden="true">→</span></a>
          </div>
          <div className="menu-sheets__grid">
            {menuSheets.slice(0, 2).map((sheet, index) => (
              <a aria-label={`Buka ${sheet.alt} ukuran penuh`} href={sheet.src} key={sheet.src} target="_blank">
                <Image alt={sheet.alt} height={sheet.height} sizes="(max-width: 1279px) calc((100vw - 248px) / 2), 516px" src={sheet.src} width={sheet.width} />
                <span>0{index + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
