/**
 * LAGIS GIS Units — Image Assets
 * Images pulled directly from the original Framer site (framerusercontent.com)
 * QR codes generated via goqr.me API
 */

const FC = 'https://framerusercontent.com/images';

// ─── ORIGINAL FRAMER SITE IMAGES ────────────────────────────────────

export const images = {
  // Common / Shared
  logo: `${FC}/hCmRikboNTxTBb2m2KCooqjTf8E.png`,                   // LAGIS logo
  qrSample: `${FC}/r4Dpby7yKWNXE5DjXZh8JejZuQ.jpg`,               // Generic QR
  mapBg: `${FC}/xsUH8PxTOYYEdbX7jH1SyKIjShw.png?scale-down-to=1024&width=3166&height=2531`, // Map background
  mapBg2: `${FC}/WsZL7avWq04bli9TFoBmxGi3w5c.png?scale-down-to=1024&width=3166&height=2531`, // Alternate map bg

  // Homepage images
  home: {
    hero1: `${FC}/JmExOdelkVkXMou2DvpiOCmHHiw.jpg?width=1080&height=720`,      // Home hero 1
    hero2: `${FC}/Yjrn9f3303h7eBODI4RfAAgEwI.jpg?width=1080&height=720`,      // Home hero 2
    hero3: `${FC}/YRxenlgZR0vicCSpaED4pf0Dbfc.jpg?width=1080&height=720`,      // Home hero 3
    card: `${FC}/RRHNm84c5B5twcpI4huV7gvII.jpg?width=626&height=417`,         // Card image
    icon1: `${FC}/VorIHZyQaxj6vQMuoVKWWBP4.png?width=370&height=370`,         // Icon
    icon2: `${FC}/mFr6YNitDQJTKmyUCjzzjzPbk.png?width=148&height=146`,        // Small icon
    icon3: `${FC}/mzvSEtCaqFVpPui7ZZoibtNIM.png?width=112&height=82`,         // Small icon 2
    ekoAtlantic: `${FC}/n6LwC1HiF75CnepfTyVbM6QCrnE.webp?width=570&height=570`, // Eko Atlantic
    embed: `${FC}/ucCl83zIT3hPqUaseWkdrttZ1CE.webp?width=474&height=267`,     // Embed preview
    lagisLogo: `${FC}/jzSCaFykEXy6qDWDkddSdbF1EeQ.png?width=475&height=136`, // LAGIS wordmark
  },

  // GIS Unit portfolio card images
  units: {
    // MIST GIS Unit (keyboard page) — Drones/Science & Tech
    mist: {
      hero: `${FC}/Slp11qWJ5MXZG7xalkBY7gn50.jpg?scale-down-to=1024&width=4500&height=3000`,
      card: `${FC}/Eh7dz4Y52jD37nJkAhDUuYSwEmA.jpg?scale-down-to=1024&width=4500&height=3000`,
      drone: `${FC}/ziRQDKBpzWO9XpvwdyPNBDUvXMQ.jpg?scale-down-to=1024&width=5184&height=3456`,
      droneIcon: `${FC}/39M0Xm8n7GCGPgi9FU8LOQt7VHs.png`,
      icon: `${FC}/iF9kcNsGVNvBOPtMhP5iD1ET4.png`,
      mapPreview: `${FC}/rvGhSlkcYR4RXXBJhHbs78t2ss.webp`,
    },

    // NTDA GIS Unit (sofa page) — Land Allocation
    ntda: {
      card: `${FC}/F92uHio0bwU1a7CCmfpIS2JpzA.jpg?scale-down-to=1024&width=6000&height=4000`,
      hero: `${FC}/Grg7wMndxky6yB1AdV6exOwPo.jpg?scale-down-to=1024&width=6000&height=4000`,
      map: `${FC}/cxpR9vjllFqJV6DktdB4tDZJa8E.jpg?scale-down-to=1024&width=1600&height=900`,
      icon: `${FC}/GOrTFsFABc65JHR1vmxA5KcUnw.png`,
    },

    // LASBCA (work-media page) — Building Control
    lasbca: {
      hero: `${FC}/47WBljXmvMWav7E0QN1t4NsoFcs.jpg?scale-down-to=1024&width=6000&height=4000`,
    },

    // Tourism GIS Unit (dddone page)
    tourism: {
      hero: `${FC}/nBrWji1UfJazrc0Yvp2p0rhyWg.jpg?scale-down-to=1024&width=4500&height=3060`,
      beach: `${FC}/WhNNCPErbhKxeWTMjyyvpTys6G0.jpg?scale-down-to=1024&width=7900&height=5267`,
      nightlife: `${FC}/w6lbHryiJSXHhfoOp5CYIFw340I.webp?scale-down-to=1024&width=1440&height=900`,
      culture: `${FC}/GbqVRcM2gKMk8PVA3QvX74DYw.jpg?scale-down-to=1024&width=1080&height=607`,
      detty1: `${FC}/UujtBr0Yjk2yrk4nPKbqMTutDuI.jpg?scale-down-to=1024&width=1080&height=693`,
      detty2: `${FC}/xLTzXuCKFW0eECiNq2uis7IiRbo.jpg?scale-down-to=1024&width=1080&height=789`,
      food: `${FC}/gMl2v7SxdbqZ1V6E6z1tJocoBN4.jpg?width=700&height=467`,
      beach2: `${FC}/tREqSeF6QNyaCZFL1A8914GLI.jpg?width=768&height=576`,
      festival: `${FC}/eMaPqfxFhq46cSonmwPF1LZXeQ.jpg?width=680&height=307`,
      ekoMap: `${FC}/aN598gGo6V32GLBK9B2Uzq4H8.webp?scale-down-to=1024&width=1200&height=600`,
      place: `${FC}/4i0zIeBCZjPCnjJfuAv7WjWulbs.jpg?width=770&height=400`,
      profile: `${FC}/t3npaxo44OvA8kSVisgOp9CwgJQ.jpg?width=300&height=300`,
    },

    // LAMATA GIS Unit (architect page) — Transport
    lamata: {
      hero: `${FC}/C0ac4iUsG3KGfZZ8rfc3RrhMSYY.jpg?scale-down-to=1024&width=4032&height=2268`,
      metro: `${FC}/mNHeea61fyMo5PMZI9HHMBGcrDI.jpg?scale-down-to=1024&width=4032&height=2268`,
      brt: `${FC}/dCsMby9eXsqLFD6DRG6UBYwPH8c.jpg?scale-down-to=1024&width=4032&height=2268`,
      map: `${FC}/pCGH7Iy89F1uLA1FQh8OXJFsE4.webp?scale-down-to=1024`,
      icon: `${FC}/3Wv14GyHkdo1g7Y6To7uDLyXwQ.png`,
      mapWebp: `${FC}/Td7MKPRLbzl4ev249a2x6gxSycg.webp`,
    },

    // LASIEC GIS Unit (calc page) — Electoral
    lasiec: {
      hero: `${FC}/ihQewsyT0oGQBL3aZgnTJI9T2hM.jpg?scale-down-to=1024&width=2790&height=1860`,
      polling: `${FC}/frMBm8877prIuzkbNZUqXGBg.jpg?scale-down-to=1024&width=1024&height=683`,
      voting: `${FC}/gHM8OhHCmTgVHSOKmH5DOOQqis.jpg?scale-down-to=1024&width=1280&height=960`,
      card: `${FC}/fYF2ouOJQ34FboJ3lrPnjw0rCc.jpg?scale-down-to=1024&width=1024&height=683`,
      map: `${FC}/VEkNwz7apUvwlcJBxUuJKT84weU.webp`,
      ward: `${FC}/tyViKv8bcyGhKuPpZGTOAA8jvmg.jpg?scale-down-to=1024&width=1024&height=648`,
      pvc: `${FC}/Q6Q7w6GvJy4iIDF4wyAyoRhZU.jpg?scale-down-to=1024`,
      icon: `${FC}/Cnuwv5TdfsT3hSKvAVosgBoAY.jpg?scale-down-to=1024`,
      mapIcon: `${FC}/SDPbgCeHShDY71Da7T4HGTh7q4.png`,
    },

    // LASRERA GIS Unit (abstract page) — Real Estate
    lasrera: {
      hero: `${FC}/KLHdre2ztMgzsIGEYgjqTHGKUY.jpg?scale-down-to=1024&width=4500&height=3000`,
      card: `${FC}/UAReyPEQBsvsxCLZqISVrvMk28.webp`,
      icon: `${FC}/LgeCShok1JlN3SB1GbCfgleR4.png`,
      verify: `${FC}/pvy8U0WOHEqdP6SWHCUFozYaBuc.png`,
      qr: `${FC}/1EjCcoBMcSH86uj93uadv9Gjqeo.jpg?scale-down-to=1024`,
      scan: `${FC}/COneeuQ8sHL9NUcTIkAK5iKqKaw.png`,
    },

    // Lands Bureau GIS Unit (handp page)
    landsBureau: {
      hero: `${FC}/9KkzoivgEkoevA3vlllk8S496wE.jpg?scale-down-to=1024&width=4896&height=3264`,
      map: `${FC}/StrYjOtmcrdzIpL13ihESQdvrA.jpg?scale-down-to=1024&width=1800&height=1200`,
      card: `${FC}/heoTFznPl0dozpWnvwrUoGAc2w.jpg?scale-down-to=1024&width=4096&height=2730`,
      icon: `${FC}/5QNbP6c9ezbnPsYUzknQmpP1E4.png`,
      mapCard: `${FC}/lj2ZeRV3q4DlKwAX5VOHetGwZIk.png`,
      property: `${FC}/RdPo7LWkQsSAGvjMQ5rpogegM.webp`,
    },

    // LASVO (sport page) — Valuation
    lasvo: {
      hero: `${FC}/RSX52zb0h3kbJ0rLXqPqo5hxwLA.jpg?scale-down-to=1024&width=7680&height=4320`,
      property: `${FC}/Y5F6DOduc7DBpAISKGLvF7bEik.jpg?scale-down-to=1024&width=4500&height=3000`,
      valuation: `${FC}/kRtHrz01DtW4RaaHcPpNi20gwQ.jpg?scale-down-to=1024&width=6000&height=4000`,
      card: `${FC}/aYC1m2rjWQVWKVfIWuKeYs64WUY.jpg?scale-down-to=1024&width=4032&height=2268`,
      building: `${FC}/FuO9ojZ5n1rD2x5d4WRR8AhMY.jpg?scale-down-to=1024`,
      portrait: `${FC}/sm09E4dT7RgDdCaGTmF7KAq7bsA.jpg?scale-down-to=1024&width=2930&height=4000`,
      icon: `${FC}/KhIL5Ks0RJPdZjKKWYeZGXojQQ.png`,
    },
  },

  // MIST drone page specific images
  mist: {
    hero: `${FC}/a0Gvm3joVZwLvRyPhQiJ8IFe1jA.jpg?scale-down-to=1024`,
    drone1: `${FC}/jyoSxmnuknJ53JwxdpwP1Hxfzw.jpg?scale-down-to=1024`,
    drone2: `${FC}/PE0MZCTZQouZof96wzTIYZFCXc.jpg?scale-down-to=1024`,
    training: `${FC}/VrhuWbipM9gh4FL46ZLapOzlu0.jpg?scale-down-to=1024`,
    icon1: `${FC}/Diz8R3aJza7yzMm7DFb982GsvE.png`,
    icon2: `${FC}/GB4IozPZSs8dp161zx8qPK8E.png`,
    icon3: `${FC}/Ht67WkrMdTXGYpNT9MS7k7kQU4.png`,
    icon4: `${FC}/qviSim1EeKob0A4ePY70DARJgQ.png`,
    icon5: `${FC}/s7dUjNb2yPrU2X5sQJNJJzf7U.png`,
    icon6: `${FC}/wnAp7gnVl8VBQKR1Piy94wNZA.png`,
    icon7: `${FC}/wyMHkvOdoSzrxXwfkQTBtlfQBaA.png`,
    cert: `${FC}/zurvvTvLvj0tQnV3Rbd0EX2Xnx8.png`,
  },

  // LASVO page specific
  lasvo: {
    hero: `${FC}/7dr28TFUFD1oGjZlmBg944pxHE.jpg?scale-down-to=1024`,
    valuer: `${FC}/H287Q1hy2CLBt0IjpSqMg2WuUec.jpg?scale-down-to=1024`,
    icon1: `${FC}/gc9QqZaO22XDhL2ZQ4zW5rBAPYw.png`,
    icon2: `${FC}/GgdPRdvtBtKNPhDuWShwEHUwUy8.png`,
    icon3: `${FC}/JTsso8r1vVZoQ3StXG9QJONsAh0.png`,
    bluebook: `${FC}/lzc67gKimZWulX74oVsVwRjoc.webp`,
    map: `${FC}/z9NoPfxtkJhldmtOxIOQv6FAtc.png`,
  },

  // Lands Bureau page
  landsBureau: {
    hero: `${FC}/qWMNM9xXArR3xSZAItkD8LNACx0.jpg?scale-down-to=1024`,
    bluebook: `${FC}/II8FIYMB5CCnOTedklQcvNDQbR0.webp?scale-down-to=1024`,
    map: `${FC}/Vlub9k1o8rTCdDszzYVo0UkQC4.webp`,
    property: `${FC}/ollj6wKMGtyFMiTHaK1zXA9K20A.png`,
  },

  // Maps page specific
  maps: {
    hero: `${FC}/75mgO0ykGUcOi4S7sM14aD597ik.jpg?scale-down-to=1024`,
    satellite: `${FC}/9S1OkfxM9QkhG1kSNboWTqWRc.jpg?scale-down-to=1024`,
    data1: `${FC}/AeUwknI4Voq2Tb3Y9v4sHmzYkTs.jpg?scale-down-to=1024`,
    data2: `${FC}/kYC69IQPHBLHdlmMaGsUGLybac.jpg?scale-down-to=1024`,
    data3: `${FC}/qJjTz7WaM1AZoeuVYrZkWSfpCbU.jpg?scale-down-to=1024`,
    data4: `${FC}/y6RfPgNgyhCGAggf7UFjgfLXsDQ.jpg?scale-down-to=1024`,
    gis: `${FC}/cxpR9vjllFqJV6DktdB4tDZJa8E.jpg?scale-down-to=1024&width=1600&height=900`,
  },

  // Shared icons/illustrations
  icons: {
    gis: `${FC}/fdv3V1y6VBa6ADZUdKVM5d9Vo.jpg?scale-down-to=512`,
    layer: `${FC}/gFjSeD5nIyCuR21RUTvZXDlxJ8.png`,
    process: `${FC}/h3mBSCvaB9OaOzkWlmnilp49DIQ.png`,
    drone: `${FC}/hU2idHJPxwZUYLf0SMGaPPK11s.png`,
  },
};

// ─── GIS UNIT CARD IMAGES (for Portfolio grid) ─────────────────────
export const unitImages = {
  'lands-bureau': images.units.landsBureau.hero,
  'lasrera': images.units.lasrera.hero,
  'lamata': images.units.lamata.hero,
  'lasiec': images.units.lasiec.hero,
  'tourism': images.units.tourism.hero,
  'lasbca': images.units.lasbca.hero,
  'mist': images.units.mist.hero,
  'ntda': images.units.ntda.hero,
  'lasvo': images.units.lasvo.hero,
};

// ─── QR CODES ──────────────────────────────────────────────────────
const BASE_URL = 'https://lagisunit.com';
const QR_API = 'https://api.qrserver.com/v1/create-qr-code';

export const getQRCodeUrl = (path, size = 200) =>
  `${QR_API}/?size=${size}x${size}&data=${encodeURIComponent(BASE_URL + path)}&color=001838&bgcolor=ffffff&format=svg`;

export const unitQRCodes = {
  'lands-bureau': getQRCodeUrl('/gis-units/lands-bureau'),
  'lasrera': getQRCodeUrl('/gis-units/lasrera'),
  'lamata': getQRCodeUrl('/gis-units/lamata'),
  'lasiec': getQRCodeUrl('/gis-units/lasiec'),
  'tourism': getQRCodeUrl('/gis-units/tourism'),
  'lasbca': getQRCodeUrl('/gis-units/lasbca'),
  'mist': getQRCodeUrl('/gis-units/mist'),
  'ntda': getQRCodeUrl('/gis-units/ntda'),
  'lasvo': getQRCodeUrl('/gis-units/lasvo'),
};

// ─── BACKWARD-COMPATIBLE ALIASES ───────────────────────────────────
// These map the old property paths used across pages to the new Framer URLs
// So images.hero.main, images.tourism.beach, etc. all still work

// Attach legacy aliases directly to the images object
images.hero = {
  ...images.home,
  main: images.home.hero1,
  about: images.units.landsBureau.hero,
  services: images.units.lamata.hero,
  contact: images.units.ntda.hero,
};

images.gis = {
  satellite: images.maps.satellite,
  mapping: images.maps.gis,
  aerialCity: images.units.mist.hero,
  topography: images.maps.data1,
};

images.drone = {
  flying: images.mist.drone1,
  aerial: images.mist.hero,
  controller: images.mist.training,
  cityAerial: images.units.mist.drone,
};

images.transport = {
  brt: images.units.lamata.brt,
  thirdMainland: images.units.lamata.metro,
  road: images.units.lamata.hero,
  traffic: images.units.lamata.hero,
  ferry: images.units.lamata.metro,
  bus: images.units.lamata.brt,
  metro: images.units.lamata.metro,
};

images.realEstate = {
  modern: images.units.lasrera.hero,
  buildings: images.units.lasvo.property,
  house: images.units.lasvo.valuation,
};

images.construction = {
  site: images.units.lasbca.hero,
  crane: images.units.lasbca.hero,
  blueprint: images.units.lasbca.hero,
};

images.election = {
  voting: images.units.lasiec.hero,
  civic: images.units.lasiec.polling,
};

images.tourism = {
  beach: images.units.tourism.beach,
  nightlife: images.units.tourism.nightlife,
  culture: images.units.tourism.culture,
  festival: images.units.tourism.hero,
  landmark: images.units.tourism.detty1,
};

images.environment = {
  green: images.maps.data1,
  water: images.maps.data2,
  drainage: images.maps.data3,
  sustainability: images.maps.hero,
};

images.agriculture = {
  farm: images.maps.data4,
  crops: images.maps.data3,
  aerial: images.maps.data1,
};

images.waterfront = {
  harbor: images.maps.data2,
  bridge: images.units.lamata.metro,
  coastal: images.maps.hero,
};

images.tech = {
  data: images.maps.gis,
  screens: images.maps.satellite,
  office: images.units.ntda.card,
  coding: images.maps.data1,
};

images.land = {
  survey: images.units.ntda.hero,
  terrain: images.units.ntda.card,
  urbanPlan: images.units.landsBureau.hero,
  property: images.units.landsBureau.map,
};

images.team = {
  meeting: images.units.ntda.card,
  engineers: images.units.mist.hero,
};

images.lagos = {
  skyline: images.home.hero2,
  ekoAtlantic: images.home.ekoAtlantic,
  lekkiBridgeNight: images.home.hero3,
  lekkiBridge: images.home.hero1,
};

