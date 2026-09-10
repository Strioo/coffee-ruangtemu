import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facilities: [IconName, string][] = [["table", "Meja Komunal"], ["chair", "Area Duduk"], ["snowflake", "Area Indoor"], ["park", "Area Outdoor"], ["forest", "Taman Rindang"], ["coffee", "Coffee Bar"], ["users", "Area Diskusi"], ["volume-off", "Suasana Tenang"]];

export function WorkspaceSection() {
  return (
    <section className="section workspace" id="workspace">
      <Container>
        <SectionHeading
          eyebrow="workspace"
          title="Ruang nyaman untuk fokus dan berkolaborasi."
          description="Bekerja sendiri, berdiskusi bersama tim, atau mengadakan pertemuan kecil dalam suasana yang tenang dan estetik."
        />
        <div className="workspace-grid">
          <figure className="workspace-photo image-frame">
            <Image alt="Meja komunal panjang di ruang temu" fill quality={65} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 112px) / 2), (max-width: 1279px) calc((100vw - 192px) / 2), 544px" src="/images/workspace/meja-komunal.jpg" />
            <figcaption><strong>Communal Working Bar</strong><span>Meja panjang untuk bekerja dan berdiskusi.</span></figcaption>
          </figure>
          <figure className="workspace-photo image-frame">
            <Image alt="Area duduk panjang dengan karya seni di dinding" fill quality={50} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 112px) / 2), (max-width: 1279px) calc((100vw - 192px) / 2), 544px" src="/images/workspace/area-duduk-panjang.jpg" />
            <figcaption><strong>Indoor Long Bench</strong><span>Area duduk panjang dalam suasana hangat.</span></figcaption>
          </figure>
        </div>
        <div className="facility-grid">
          {facilities.map(([icon, label]) => <div key={label}><Icon name={icon} size={18} /><span>{label}</span></div>)}
        </div>
        <a className="button workspace-button" href="#galeri">Lihat Detail Workspace <span aria-hidden="true">→</span></a>
      </Container>
    </section>
  );
}
