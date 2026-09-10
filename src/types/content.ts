export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
};

export type ExperienceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: ImageAsset;
};

export type GalleryItem = ImageAsset & {
  id: string;
  label: string;
};

export type BusinessInformation = {
  brandName: "ruang temu";
  address: string | null;
  operatingHours: string | null;
  whatsappUrl: `https://${string}` | null;
  instagramUrl: `https://${string}` | null;
  mapsUrl: `https://${string}` | null;
};
