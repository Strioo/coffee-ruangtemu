import { navigation } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";

const icons: IconName[] = ["coffee", "restaurant-menu", "laptop", "info", "location"];

export function MobileBottomNavigation() {
  return (
    <nav aria-label="Navigasi cepat" className="mobile-bottom-navigation">
      {navigation.map((item, index) => (
        <a className={index === 0 ? "is-active" : ""} href={item.href} key={item.href}>
          <Icon name={icons[index]} size={22} />
          <small>{item.label}</small>
        </a>
      ))}
    </nav>
  );
}