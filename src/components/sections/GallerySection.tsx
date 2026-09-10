import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/content/site";

export function GallerySection() {
  return (
    <section className="section gallery-section section--border" id="galeri">
      <Container>
        <SectionHeading
          eyebrow="suasana"
          title="Lihat lebih dekat ruang temu."
          description="Setiap sudut dirancang agar kamu merasa tenang, terinspirasi, dan betah berlama-lama."
        />
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-item--${index + 1} image-frame`} key={item.id}>
              <Image alt={item.alt} fill quality={65} sizes="(max-width: 599px) calc((100vw - 52px) / 2), (max-width: 1023px) calc((100vw - 128px) / 3), (max-width: 1279px) calc((100vw - 208px) / 3), 357px" src={item.src} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
