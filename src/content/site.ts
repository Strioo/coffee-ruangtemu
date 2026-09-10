import type {
  BusinessInformation,
  ExperienceItem,
  GalleryItem,
  MenuItem,
  NavigationItem,
} from "@/types/content";

export const business = {
  brandName: "ruang temu",
  address: "Jl A. Yani Purwokerto Timur",
  operatingHours: "Senin–Jumat 08.00–23.00\nSabtu–Minggu 08.00–00.00",
  whatsappUrl: null,
  instagramUrl: "https://www.instagram.com/ruangtemu.coffeespace?stkn=ZDNlZDc0MzIxNw==",
  mapsUrl: null,
} satisfies BusinessInformation;

export const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Workspace", href: "#workspace" },
  { label: "Tentang", href: "#tentang" },
  { label: "Lokasi", href: "#lokasi" },
] satisfies NavigationItem[];

export const featuredMenu = [
  { id: "arena-temu", name: "Arena Temu", category: "Coffee Milk", price: 25000 },
  { id: "stroberi-coffee", name: "Stroberi Coffee", category: "Coffee Milk", price: 27000 },
  { id: "passionate-mojito", name: "Passionate Mojito", category: "Mocktail", price: 25000 },
  { id: "appletini-espresso", name: "Appletini Espresso", category: "Coffee Mocktail", price: 30000 },
  { id: "variant-bottle", name: "Variant Bottle 300 ml", category: "Bottle", price: 35000 },
  { id: "spaghetti-shrimp-aglio-olio", name: "Spaghetti Shrimp Aglio Olio", category: "Pasta / Noodle", price: 33000 },
] satisfies MenuItem[];

export const menuSheets = [
  { src: "/images/menu/menu-minuman-01.jpg", alt: "Daftar menu kopi dan minuman ruang temu halaman satu", width: 1878, height: 1359 },
  { src: "/images/menu/menu-minuman-02.jpg", alt: "Daftar menu mocktail, teh, dan minuman ruang temu halaman dua", width: 1878, height: 1359 },
  { src: "/images/menu/menu-makanan-01.jpg", alt: "Daftar menu makanan ruang temu halaman satu", width: 1878, height: 1359 },
  { src: "/images/menu/menu-makanan-02.jpg", alt: "Daftar menu pasta, steak, camilan, dan pencuci mulut ruang temu", width: 1878, height: 1359 },
];

export const experiences = [
  {
    id: "coffee",
    index: "01",
    title: "Kopi untuk menemani waktu.",
    description: "Beragam pilihan kopi dan minuman tersedia untuk menemani waktu fokus maupun percakapan santai.",
    image: { src: "/images/place/coffee-bar.jpg", alt: "Area coffee bar ruang temu", width: 1875, height: 2500 },
  },
  {
    id: "space",
    index: "02",
    title: "Ruang untuk berbagai kebutuhan.",
    description: "Pilih meja komunal, area duduk indoor, atau sudut luar ruang sesuai kebutuhanmu.",
    image: { src: "/images/workspace/meja-komunal.jpg", alt: "Meja komunal panjang di ruang temu", width: 1875, height: 2500 },
  },
  {
    id: "atmosphere",
    index: "03",
    title: "Suasana yang membuat betah.",
    description: "Pencahayaan hangat, elemen hijau, dan pilihan area duduk membentuk suasana tenang.",
    image: { src: "/images/location/fasad-malam.jpg", alt: "Fasad ruang temu pada malam hari", width: 1875, height: 2500 },
  },
] satisfies ExperienceItem[];

export const gallery = [
  { id: "garden", src: "/images/gallery/taman-terbuka.jpg", alt: "Area duduk taman terbuka ruang temu", label: "Taman terbuka", width: 1875, height: 2500 },
  { id: "round-table", src: "/images/gallery/meja-bundar.jpg", alt: "Meja bundar dan cermin di ruang temu", label: "Sudut meja bundar", width: 1875, height: 2500 },
  { id: "warm-corridor", src: "/images/gallery/koridor-hangat.jpg", alt: "Koridor dengan lampu gantung hangat", label: "Koridor hangat", width: 1875, height: 2500 },
  { id: "green-wall", src: "/images/gallery/dinding-hijau.jpg", alt: "Dinding hijau dan area lounge ruang temu", label: "Area lounge", width: 1875, height: 2500 },
  { id: "tree-area", src: "/images/gallery/area-pohon.jpg", alt: "Area duduk di bawah pohon rindang", label: "Area rindang", width: 1875, height: 2500 },
  { id: "teal-corridor", src: "/images/gallery/koridor-teal.jpg", alt: "Koridor ruang temu dengan dinding teal", label: "Sudut interior", width: 1875, height: 2500 },
] satisfies GalleryItem[];

export function formatPrice(price: number): string {
  return `${new Intl.NumberFormat("id-ID").format(price / 1000)}K`;
}
