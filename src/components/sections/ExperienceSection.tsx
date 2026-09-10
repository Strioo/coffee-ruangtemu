import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/content/site";

export function ExperienceSection() {
  return (
    <section className="section section--border">
      <Container>
        <SectionHeading centered eyebrow="pengalaman temu" title="Dibuat untuk membuatmu betah berlama-lama." />
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.id}>
              <div className="experience-card__image image-frame">
                <Image alt={item.image.alt} fill quality={65} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 104px) / 2), (max-width: 1279px) calc((100vw - 272px) / 3), 352px" src={item.image.src} />
                <span className="experience-card__mobile-index">{item.index}</span>
              </div>
              <div className="experience-card__number"><p className="experience-card__index">{item.index}</p><i /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
