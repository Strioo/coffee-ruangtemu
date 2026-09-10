import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/content/site";

export function LocationSection() {
  return (
    <section className="section location section--border" id="lokasi">
      <Container className="location-grid">
        <div className="location-copy">
          <SectionHeading
            eyebrow="lokasi & akses"
            title="Kunjungi ruang temu."
            description="Temukan alamat, jam operasional, dan Instagram resmi ruang temu sebelum berkunjung."
          />
          <div className="location-mobile-image image-frame">
            <Image alt="Fasad ruang temu pada malam hari" fill quality={65} sizes="(max-width: 599px) calc(100vw - 40px), min(720px, calc(100vw - 80px))" src="/images/location/fasad-malam.jpg" />
          </div>
          <div className="location-info-card">
            <div>
              <i aria-hidden="true"><Icon name="location" size={20} /></i>
              <p><strong>Alamat</strong><span>{business.address}</span></p>
            </div>
            <div>
              <i aria-hidden="true"><Icon name="clock" size={20} /></i>
              <p><strong>Jam Operasional</strong><span className="operating-hours">{business.operatingHours}</span></p>
            </div>
            <div>
              <i aria-hidden="true"><Icon name="hash" size={20} /></i>
              <p><strong>Instagram</strong><a className="inline-link" href={business.instagramUrl} rel="noreferrer" target="_blank">@ruangtemu.coffeespace</a></p>
            </div>
          </div>
          <div className="location-actions"><a className="button button--primary" href="#galeri">Lihat Suasana</a><a className="button button--outline" href="#menu">Lihat Menu</a></div>
        </div>
        <div className="location-photos">
          <div className="location-photo image-frame">
            <Image alt="Fasad ruang temu pada malam hari" fill quality={65} sizes="(max-width: 1279px) calc((100vw - 232px) / 4), 268px" src="/images/location/fasad-malam.jpg" />
            <span>Malam Hari</span>
          </div>
          <div className="location-photo image-frame">
            <Image alt="Fasad ruang temu pada siang hari" fill quality={65} sizes="(max-width: 1279px) calc((100vw - 232px) / 4), 268px" src="/images/location/fasad-siang.jpg" />
            <span>Siang Hari</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
