import re
import os

directory = "src/pages/agencies"

def update_file(filename, replacements):
    filepath = os.path.join(directory, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for old_regex, new_replacement in replacements:
        content = re.sub(old_regex, new_replacement, content, flags=re.DOTALL)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")

# Define the replacements for all files
replacements = {
    "MISTDrones.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Choose Your Flight Path</h2>.*?</div>', 
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Choose Your Flight Path</h2>
            <p className="text-dark-gray font-inter text-lg">Flexible training packages designed for individuals and enterprises.</p>
          </div>
          <div><img src={images.drone.flying} alt="Training" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>'''),
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Why Choose Us</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Why Choose Us</h2>
            <p className="text-dark-gray text-lg">The premier Drone as a Service (DaaS) platform in Lagos.</p>
          </div>
          <div><img src={images.drone.controller} alt="Why Choose Us" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "NTDALanding.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>How It Works</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">How It Works</h2>
            <p className="text-dark-gray text-lg">Getting your private land approved is simple with LUAC.</p>
          </div>
          <div><img src={images.land.survey} alt="LUAC process" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "LASBCALanding.jsx": [
         (r'<div className="text-center mb-16">\s*<h2[^>]*>Our Process</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Our Process</h2>
            <p className="text-dark-gray text-lg">Ensuring safety and compliance in every structure.</p>
          </div>
          <div><img src={images.construction.blueprint} alt="Process" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "LAMATALanding.jsx": [
        # LAMATA has BRT and Ferry sections
        (r'(<h2[^>]*>Bus Rapid Transit \(BRT\)</h2>)',
         r'<img src={images.transport.bus} alt="BRT" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1'),
        (r'(<h2[^>]*>Ferry Services</h2>)',
         r'<img src={images.transport.ferry} alt="Ferry Services" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1')
    ],
    "LASIECLanding.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Polling Options</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Polling Options</h2>
            <p className="text-dark-gray text-lg">Civic engagement starts here.</p>
          </div>
          <div><img src={images.election.civic} alt="Civic Duty" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "LASRERALanding.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Verification Process</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Verification Process</h2>
            <p className="text-dark-gray text-lg">Ensuring authentic real estate transactions.</p>
          </div>
          <div><img src={images.realEstate.buildings} alt="Verification" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "TourismLanding.jsx": [
        (r'(<h2[^>]*>Beach Resorts</h2>)',
         r'<img src={images.tourism.beach} alt="Beach Resorts" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1'),
        (r'(<h2[^>]*>Detty December</h2>)',
         r'<img src={images.tourism.nightlife} alt="Detty December" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1')
    ],
    "LandsBureauLanding.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Land Use Charge</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Land Use Charge</h2>
            <p className="text-dark-gray text-lg">Understanding your LUC obligations and benefits.</p>
          </div>
          <div><img src={images.land.urbanPlan} alt="LUC" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "LASVOLanding.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Valuation Services</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Valuation Services</h2>
            <p className="text-dark-gray text-lg">Accurate property valuation across Lagos State.</p>
          </div>
          <div><img src={images.realEstate.house} alt="Valuation" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "EnvironmentPage.jsx": [
        (r'(<h2[^>]*>Drainage Infrastructure</h2>)',
         r'<img src={images.environment.drainage} alt="Drainage" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1'),
        (r'(<h2[^>]*>Green Initiatives</h2>)',
         r'<img src={images.environment.green} alt="Green Initiatives" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg" />\n          \1')
    ],
    "TransportPage.jsx": [
        (r'(<h3[^>]*>LAMATA.*?</h3>)',
         r'<img src={images.transport.metro} alt="Metro" className="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />\n                  \1'),
        (r'(<h3[^>]*>LASWA.*?</h3>)',
         r'<img src={images.transport.ferry} alt="Ferry" className="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />\n                  \1')
    ],
    "UrbanDevPage.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>CAP Process</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">CAP Process</h2>
            <p className="text-dark-gray text-lg">Streamlining physical planning approvals.</p>
          </div>
          <div><img src={images.construction.blueprint} alt="CAP" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "WaterfrontPage.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Infrastructure Development</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Infrastructure Development</h2>
            <p className="text-dark-gray text-lg">Developing Lagos waterfront infrastructure.</p>
          </div>
          <div><img src={images.waterfront.harbor} alt="Infrastructure" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ],
    "AgricLandPage.jsx": [
        (r'<div className="text-center mb-16">\s*<h2[^>]*>Land Allocation</h2>.*?</div>',
         r'''<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-epilogue font-bold text-navy mb-4">Land Allocation</h2>
            <p className="text-dark-gray text-lg">Securing agricultural lands for sustainable farming.</p>
          </div>
          <div><img src={images.agriculture.farm} alt="Land Allocation" className="rounded-2xl shadow-xl w-full h-64 object-cover" /></div>
        </div>''')
    ]
}

for filename, reps in replacements.items():
    update_file(filename, reps)

