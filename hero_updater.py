import os
import re

files_info = {
    "MISTDrones.jsx": {"hero": "images.drone.aerial", "title_fallback": "Drone Flight Training", "subtitle_fallback": "Ministry of Science & Technology"},
    "NTDALanding.jsx": {"hero": "images.land.terrain", "title_fallback": "NTDA", "subtitle_fallback": "New Towns Development Authority"},
    "LASBCALanding.jsx": {"hero": "images.construction.crane", "title_fallback": "LASBCA", "subtitle_fallback": "Building Control Agency"},
    "LAMATALanding.jsx": {"hero": "images.transport.road", "title_fallback": "LAMATA", "subtitle_fallback": "Lagos Metropolitan Area Transport Authority"},
    "LASIECLanding.jsx": {"hero": "images.election.voting", "title_fallback": "LASIEC", "subtitle_fallback": "Independent Electoral Commission"},
    "LASRERALanding.jsx": {"hero": "images.realEstate.modern", "title_fallback": "LASRERA", "subtitle_fallback": "Real Estate Regulatory Authority"},
    "TourismLanding.jsx": {"hero": "images.tourism.festival", "title_fallback": "Tourism", "subtitle_fallback": "Ministry of Tourism"},
    "LandsBureauLanding.jsx": {"hero": "images.land.property", "title_fallback": "Lands Bureau", "subtitle_fallback": "Lagos State Lands Bureau"},
    "LASVOLanding.jsx": {"hero": "images.realEstate.buildings", "title_fallback": "LASVO", "subtitle_fallback": "Valuation Office"},
    "EnvironmentPage.jsx": {"hero": "images.environment.sustainability", "title_fallback": "Environment", "subtitle_fallback": "Ministry of Environment"},
    "TransportPage.jsx": {"hero": "images.transport.road", "title_fallback": "Transportation", "subtitle_fallback": "Ministry of Transportation"},
    "UrbanDevPage.jsx": {"hero": "images.construction.crane", "title_fallback": "Urban Development", "subtitle_fallback": "Ministry of Physical Planning"},
    "WaterfrontPage.jsx": {"hero": "images.waterfront.bridge", "title_fallback": "Waterfront Infrastructure", "subtitle_fallback": "Waterfront Development"},
    "AgricLandPage.jsx": {"hero": "images.agriculture.aerial", "title_fallback": "Agriculture", "subtitle_fallback": "Ministry of Agriculture"}
}

directory = "src/pages/agencies"

for filename, info in files_info.items():
    filepath = os.path.join(directory, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add import if missing
    if "import { images } from '@/data/images'" not in content:
        # replace the first import
        content = re.sub(r'^(import .*?;?)$', r"import { images } from '@/data/images';\n\1", content, count=1, flags=re.MULTILINE)
    
    # Remove PageHero import
    content = re.sub(r'import PageHero.*?\n', '', content)

    # Extract title and subtitle from PageHero
    title_match = re.search(r'title\s*=\s*(["\']|{)(.*?)(["\']|})', content)
    subtitle_match = re.search(r'subtitle\s*=\s*(["\']|{)(.*?)(["\']|})', content)
    
    title = title_match.group(2) if title_match else info["title_fallback"]
    subtitle = subtitle_match.group(2) if subtitle_match else info["subtitle_fallback"]
    
    title_str = f"{{{title}}}" if title_match and title_match.group(1) == '{' else title
    subtitle_str = f"{{{subtitle}}}" if subtitle_match and subtitle_match.group(1) == '{' else subtitle

    hero_jsx = f"""{{/* Hero */}}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src={{{info['hero']}}} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001838]/85 to-[#001838]/60" />
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <h1 className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title_str}
          </h1>
          <p className="font-inter text-lg md:text-xl text-[#bfe0f2] max-w-2xl mx-auto">
            {subtitle_str}
          </p>
        </div>
      </section>"""
      
    # Replace PageHero
    content = re.sub(r'<PageHero\s+[^>]*/>', hero_jsx, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filename}")
