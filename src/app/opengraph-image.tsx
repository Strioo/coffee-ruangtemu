import { createSocialImage, socialImageContentType, socialImageSize } from "./social-image";

export const alt = "ruang temu — Coffee & Space di Purwokerto";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage();
}