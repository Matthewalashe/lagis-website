import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Contact from '@/pages/Contact'
import Portfolio from '@/pages/Portfolio'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import NotFound from '@/pages/NotFound'

// GIS Unit Detail Page (data-driven template)
import GISUnitDetail from '@/pages/GISUnitDetail'

// Agency Landing Pages
import MISTDrones from '@/pages/agencies/MISTDrones'
import NTDALanding from '@/pages/agencies/NTDALanding'
import LASBCALanding from '@/pages/agencies/LASBCALanding'
import LAMATALanding from '@/pages/agencies/LAMATALanding'
import LASIECLanding from '@/pages/agencies/LASIECLanding'
import LASRERALanding from '@/pages/agencies/LASRERALanding'
import TourismLanding from '@/pages/agencies/TourismLanding'
import LandsBureauLanding from '@/pages/agencies/LandsBureauLanding'
import LASVOLanding from '@/pages/agencies/LASVOLanding'
import EnvironmentPage from '@/pages/agencies/EnvironmentPage'
import TransportPage from '@/pages/agencies/TransportPage'
import UrbanDevPage from '@/pages/agencies/UrbanDevPage'
import WaterfrontPage from '@/pages/agencies/WaterfrontPage'
import AgricLandPage from '@/pages/agencies/AgricLandPage'

// Special Pages
import MapsPage from '@/pages/MapsPage'
import BlueBookPage from '@/pages/BlueBookPage'
import LUACFormPage from '@/pages/LUACFormPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gis-units" element={<Portfolio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shop" element={<ShopPage />} />

          {/* GIS Unit Detail Pages (data-driven) */}
          <Route path="/gis-units/:unitId" element={<GISUnitDetail />} />

          {/* Agency Landing Pages */}
          <Route path="/mist" element={<MISTDrones />} />
          <Route path="/ntda" element={<NTDALanding />} />
          <Route path="/lasbca" element={<LASBCALanding />} />
          <Route path="/lamata" element={<LAMATALanding />} />
          <Route path="/lasiec" element={<LASIECLanding />} />
          <Route path="/lasrera" element={<LASRERALanding />} />
          <Route path="/tourism" element={<TourismLanding />} />
          <Route path="/lands-bureau" element={<LandsBureauLanding />} />
          <Route path="/lasvo" element={<LASVOLanding />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/urban-developments" element={<UrbanDevPage />} />
          <Route path="/waterfront" element={<WaterfrontPage />} />
          <Route path="/agric-land-holdings" element={<AgricLandPage />} />

          {/* Special Pages */}
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/blue-book" element={<BlueBookPage />} />
          <Route path="/luac-application" element={<LUACFormPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
