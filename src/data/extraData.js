/**
 * LAGIS — SVG Illustrations & Visual Assets
 * Uses free SVG illustrations from undraw.co and SVG icons
 * All illustrations are inline SVG components for max performance
 */

// ─── EXTERNAL TOOL LINKS (from original Framer site) ───────────────
export const externalTools = {
  inecPollingUnit: 'https://cvr.inecnigeria.org/pu',
  lagRide: 'https://lagride.ng',
  cowryCard: 'https://cowrywise.com',
  lasgOnline: 'https://lasg.gov.ng',
  laspppa: 'https://laspppa.org',
  landUseCharge: 'https://luc.lagosstate.gov.ng',
  eGIS: 'https://egis.lagosstate.gov.ng',
  lagosGov: 'https://lagosstate.gov.ng',
  lasbcaOnline: 'https://lasbca.lagosstate.gov.ng',
  ntdaOnline: 'https://ntda.lagosstate.gov.ng',
  lamataOnline: 'https://lamata-ng.com',
  lasieconline: 'https://lasiec.gov.ng',
  lasreraOnline: 'https://lasrera.lagosstate.gov.ng',
  tourismMinistry: 'https://tourism.lagosstate.gov.ng',
  environmentMinistry: 'https://environment.lagosstate.gov.ng',
  landsBureau: 'https://landsbureau.lagosstate.gov.ng',
};

// ─── LAGOS LGA DATA (for LASIEC Polling Units) ─────────────────────
export const lagosLGAs = [
  { name: 'Agege', wards: 11, pollingUnits: 187, headquarters: 'Agege' },
  { name: 'Ajeromi-Ifelodun', wards: 16, pollingUnits: 328, headquarters: 'Ajegunle' },
  { name: 'Alimosho', wards: 17, pollingUnits: 486, headquarters: 'Ikotun' },
  { name: 'Amuwo-Odofin', wards: 10, pollingUnits: 171, headquarters: 'Festac Town' },
  { name: 'Apapa', wards: 10, pollingUnits: 149, headquarters: 'Apapa' },
  { name: 'Badagry', wards: 13, pollingUnits: 211, headquarters: 'Badagry' },
  { name: 'Epe', wards: 19, pollingUnits: 225, headquarters: 'Epe' },
  { name: 'Eti-Osa', wards: 12, pollingUnits: 233, headquarters: 'Victoria Island' },
  { name: 'Ibeju-Lekki', wards: 11, pollingUnits: 124, headquarters: 'Akodo' },
  { name: 'Ifako-Ijaiye', wards: 13, pollingUnits: 219, headquarters: 'Ifako' },
  { name: 'Ikeja', wards: 11, pollingUnits: 193, headquarters: 'Ikeja' },
  { name: 'Ikorodu', wards: 19, pollingUnits: 377, headquarters: 'Ikorodu' },
  { name: 'Kosofe', wards: 13, pollingUnits: 284, headquarters: 'Ketu' },
  { name: 'Lagos Island', wards: 12, pollingUnits: 195, headquarters: 'Lagos Island' },
  { name: 'Lagos Mainland', wards: 12, pollingUnits: 183, headquarters: 'Yaba' },
  { name: 'Mushin', wards: 14, pollingUnits: 268, headquarters: 'Mushin' },
  { name: 'Ojo', wards: 12, pollingUnits: 235, headquarters: 'Ojo' },
  { name: 'Oshodi-Isolo', wards: 14, pollingUnits: 260, headquarters: 'Oshodi' },
  { name: 'Shomolu', wards: 11, pollingUnits: 195, headquarters: 'Shomolu' },
  { name: 'Surulere', wards: 12, pollingUnits: 215, headquarters: 'Surulere' },
];

export const lagosLGATotals = {
  totalLGAs: 20,
  totalLCDAs: 37,
  totalWards: lagosLGAs.reduce((sum, lga) => sum + lga.wards, 0),
  totalPollingUnits: lagosLGAs.reduce((sum, lga) => sum + lga.pollingUnits, 0),
};

// ─── TOURISM DATA ──────────────────────────────────────────────────
export const tourismSpots = {
  dettyDecember: [
    { name: 'Fela Shrine', category: 'Nightlife', area: 'Ikeja', desc: 'The legendary Afrobeat temple where music lives on' },
    { name: 'Landmark Beach', category: 'Beach', area: 'Victoria Island', desc: 'Lagos most popular beachfront destination' },
    { name: 'Nike Art Gallery', category: 'Culture', area: 'Lekki', desc: 'Africa\'s largest art gallery with thousands of pieces' },
    { name: 'Freedom Park', category: 'Heritage', area: 'Lagos Island', desc: 'Former prison turned cultural hub and event space' },
    { name: 'Lekki Conservation Centre', category: 'Nature', area: 'Lekki', desc: 'Africa\'s longest canopy walkway and nature reserve' },
    { name: 'Terra Kulture', category: 'Culture', area: 'Victoria Island', desc: 'Premier arts, culture, and entertainment center' },
    { name: 'Tarkwa Bay Beach', category: 'Beach', area: 'Lagos Island', desc: 'Secluded beach accessible only by boat' },
    { name: 'Kalakuta Republic Museum', category: 'Heritage', area: 'Ikeja', desc: 'Fela Kuti\'s former residence and museum' },
    { name: 'Elegushi Beach', category: 'Beach', area: 'Lekki', desc: 'Popular beach with restaurants and nightlife' },
    { name: 'The Palms Shopping Mall', category: 'Shopping', area: 'Lekki', desc: 'Premier shopping destination with entertainment' },
    { name: 'National Museum Lagos', category: 'Heritage', area: 'Onikan', desc: 'Nigeria\'s oldest museum with historical artifacts' },
    { name: 'Ikeja City Mall', category: 'Shopping', area: 'Ikeja', desc: 'Major commercial hub and entertainment center' },
  ],
  categories: ['All', 'Beach', 'Nightlife', 'Culture', 'Heritage', 'Nature', 'Shopping'],
};

// ─── GIS MAP LAYERS (embeddable OpenStreetMap data) ─────────────────
export const mapEmbeds = {
  // OpenStreetMap embed for Lagos overview
  lagosOverview: 'https://www.openstreetmap.org/export/embed.html?bbox=3.0,6.35,3.7,6.75&layer=mapnik',
  lagosMetro: 'https://www.openstreetmap.org/export/embed.html?bbox=3.2,6.4,3.55,6.65&layer=mapnik',
  // Per-unit map views
  units: {
    lamata: 'https://www.openstreetmap.org/export/embed.html?bbox=3.2,6.4,3.55,6.65&layer=mapnik&marker=6.5244,3.3792',
    lasiec: 'https://www.openstreetmap.org/export/embed.html?bbox=2.8,6.3,4.0,6.8&layer=mapnik',
    tourism: 'https://www.openstreetmap.org/export/embed.html?bbox=3.3,6.4,3.6,6.55&layer=mapnik',
    environment: 'https://www.openstreetmap.org/export/embed.html?bbox=3.0,6.35,3.7,6.75&layer=mapnik',
    agric: 'https://www.openstreetmap.org/export/embed.html?bbox=3.4,6.3,4.0,6.75&layer=mapnik',
  },
};
