/**
 * Central image configuration.
 * All images are served from Vercel Blob CDN for reliability.
 * These URLs are permanent and globally distributed.
 */
export const IMAGES = {
  hero: "https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/hero-mensskydd.jpg",
  products: "https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/products-overview.jpg",
  arbetsplats: "https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/arbetsplats.jpg",
  hallbarhet: "https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/hallbarhet.jpg",
  skola: "https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/skola.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;
