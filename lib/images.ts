// External image URLs - NOUL Cultural Craft Center

// Provided images (hosted on postimg)
export const IMAGES = {
  // Logo
  logo: 'https://i.postimg.cc/76VjB8fG/Chat-GPT-Image-Jun-22-2026-09-49-07-AM.png',

  // Main architectural renders
  siteMasterPlan: 'https://i.postimg.cc/K84wJM5G/Chat-GPT-Image-Jun-16-2026-10-48-31-PM.png',
  alternateAerial: 'https://i.postimg.cc/tTDNKrXm/Chat-GPT-Image-Jun-21-2026-07-52-56-AM.png',
  nightAerial: 'https://i.postimg.cc/0N0YStJ8/IMPORTANT-THIS-IS-A-NIGHT-202606162335-1.jpg',
  daytimeAerial: 'https://i.postimg.cc/qR733pTj/IMPORTANT-THIS-IS-A-POST-PRODUCTION-202606162340.jpg',
  goldenHourAerial: 'https://i.postimg.cc/MKBjRshN/IMPORTANT-THIS-IS-NOT-AN-202606162331.jpg',

  // Interior & craft images
  weavingWork1: 'https://i.postimg.cc/ZqzPCWVz/Screenshot-2026-06-22-093817.png',
  weavingWork2: 'https://i.postimg.cc/9MF77Z97/Screenshot-2026-06-22-093846.png',
  textileDetail: 'https://i.postimg.cc/j5gJQ2QR/Screenshot-2026-06-22-093910.png',
  workshopSpace: 'https://i.postimg.cc/ZRdC3HRd/Screenshot-2026-06-22-094255.png',
  craftDisplay: 'https://i.postimg.cc/VL1drjcV/Screenshot-2026-06-22-094358.png',
  artisanWork: 'https://i.postimg.cc/rsTF4L7r/Screenshot-2026-06-22-094324.png',

  // Aliases for component use
  weavingLoom: 'https://i.postimg.cc/ZqzPCWVz/Screenshot-2026-06-22-093817.png',
  textileTexture: 'https://i.postimg.cc/j5gJQ2QR/Screenshot-2026-06-22-093910.png',
  workshopInterior: 'https://i.postimg.cc/ZRdC3HRd/Screenshot-2026-06-22-094255.png',
  courtyard: 'https://i.postimg.cc/9MF77Z97/Screenshot-2026-06-22-093846.png',
  exhibition: 'https://i.postimg.cc/VL1drjcV/Screenshot-2026-06-22-094358.png',
  galleryHall: 'https://i.postimg.cc/rsTF4L7r/Screenshot-2026-06-22-094324.png',
  theater: 'https://i.postimg.cc/MKBjRshN/IMPORTANT-THIS-IS-NOT-AN-202606162331.jpg',
  craftMarket: 'https://i.postimg.cc/VL1drjcV/Screenshot-2026-06-22-094358.png',
  community: 'https://i.postimg.cc/ZqzPCWVz/Screenshot-2026-06-22-093817.png',
} as const

// All images for gallery (all 11 provided images)
export const ALL_GALLERY_IMAGES = [
  { src: IMAGES.goldenHourAerial, alt: 'NOUL Cultural Craft Center — golden hour aerial view', category: 'Exterior / Architecture' as const, size: 'wide' as const },
  { src: IMAGES.nightAerial, alt: 'NOUL campus illuminated at night', category: 'Exterior / Architecture' as const, size: 'tall' as const },
  { src: IMAGES.daytimeAerial, alt: 'NOUL Cultural Craft Center — daytime aerial', category: 'Exterior / Architecture' as const, size: 'wide' as const },
  { src: IMAGES.alternateAerial, alt: 'NOUL campus — alternate aerial overview', category: 'Exterior / Architecture' as const, size: 'tall' as const },
  { src: IMAGES.siteMasterPlan, alt: 'NOUL Cultural Craft Center — site master plan', category: 'Exterior / Architecture' as const, size: 'wide' as const },
  { src: IMAGES.weavingWork1, alt: 'Traditional weaving workshop in action', category: 'Workshops & Craft Spaces' as const, size: 'tall' as const },
  { src: IMAGES.weavingWork2, alt: 'Artisan demonstrating weaving techniques', category: 'Workshops & Craft Spaces' as const },
  { src: IMAGES.textileDetail, alt: 'Intricate handwoven textile details', category: 'Workshops & Craft Spaces' as const },
  { src: IMAGES.workshopSpace, alt: 'Interior weaving workshop space', category: 'Workshops & Craft Spaces' as const, size: 'tall' as const },
  { src: IMAGES.craftDisplay, alt: 'Craft exhibition display', category: 'Exhibition Areas' as const, size: 'wide' as const },
  { src: IMAGES.artisanWork, alt: 'Artisan working on traditional loom', category: 'Workshops & Craft Spaces' as const },
]


export { IMAGES }