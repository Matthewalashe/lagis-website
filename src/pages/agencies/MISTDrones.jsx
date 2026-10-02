import React from 'react';
import { motion } from 'framer-motion';
import { Plane, CheckCircle, MonitorPlay, Box, Truck, ArrowRight, ShieldCheck, Clock, Navigation, MapPin } from 'lucide-react';
import { images } from '@/data/images';
import { externalTools } from '@/data/extraData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MISTDrones = () => {
  return (
    <main className="bg-light-gray min-h-screen font-inter pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src={images.units.mist.hero} 
          alt="Drone Flight aerial" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-primary/80 to-blue-900/80 mix-blend-multiply" />
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container mx-auto px-6 py-28 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-light-blue/20 text-light-blue border border-light-blue/30 text-sm font-semibold tracking-wider mb-6">
              MINISTRY OF INNOVATION, SCIENCE & TECHNOLOGY GIS UNIT
            </span>
            <h1 className="font-epilogue text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Drone Flight Training Bundle
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
              Start Flying with Confidence
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Get hands-on simulation + outdoor practice in Lagos, plus your very own Beginner Drone Kit delivered straight to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1">
                Buy Bundle Now
              </a>
              <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Training Package */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-navy mb-4">Complete Training Package</h2>
            <p className="text-dark-gray text-lg max-w-2xl mx-auto">Everything You Need to Start</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Simulation Training', desc: 'Computer/simulator. Practice flying in risk-free environment.', icon: <MonitorPlay className="w-8 h-8" /> },
              { title: 'Outdoor Flight', desc: 'Supervised practical flight sessions in open Lagos spaces.', icon: <Plane className="w-8 h-8" /> },
              { title: 'Beginner Drone Kit', desc: 'Start with the best tools. Kit included for personal practice.', icon: <Box className="w-8 h-8" /> },
              { title: 'Direct Delivery', desc: 'Your equipment delivered straight to your door.', icon: <Truck className="w-8 h-8" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="bg-light-gray p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-dark-gray leading-relaxed mb-6">{item.desc}</p>
                <a href="#learn-more" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Discover More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={images.mist.drone1} 
                alt="Drone training" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-epilogue text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-light-blue text-lg mb-10">The Best You Can Have</p>
              
              <div className="space-y-8">
                {[
                  { title: 'Save Money & Time', desc: 'Bundle is cheaper and more convenient.', icon: <Clock className="text-primary w-6 h-6" /> },
                  { title: 'No Guesswork', desc: 'We recommend trusted beginner drones.', icon: <ShieldCheck className="text-primary w-6 h-6" /> },
                  { title: 'Lagos-Ready', desc: 'Fully compliant with Nigerian regulations.', icon: <MapPin className="text-primary w-6 h-6" /> },
                  { title: 'Fast Learning Curve', desc: 'Most trainees fly solo by the next day.', icon: <Navigation className="text-primary w-6 h-6" /> }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl"
                  >
                    <div className="mt-1 p-2 bg-white/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-24 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-epilogue text-3xl md:text-5xl font-bold text-navy mb-4">Our Package Tier</h2>
            <p className="text-dark-gray text-lg">Ready when you are.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Individual Package */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-xl flex-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Plane className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Individual Package</h3>
              <p className="text-dark-gray mb-6">Starter Access</p>
              <div className="text-5xl font-epilogue font-bold text-primary mb-8">
                ₦70,000
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Hands-on drone flight training (basic-intermediate)',
                  'Access to training drones (limited hours)',
                  'GIS integration fundamentals',
                  '1 certification exam (NCAA RPAS certification)',
                  'Discounted upgrade to advanced certification'
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 text-dark-gray">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30">
                Start
              </button>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-navy text-white rounded-3xl p-10 shadow-2xl flex-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Box className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise Package</h3>
              <p className="text-light-blue mb-6">Full Service</p>
              <div className="text-4xl font-epilogue font-bold text-white mb-8">
                Contact Sales
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Everything in Professional',
                  'Up to 15+ participants (train & certify staff)',
                  'Executive-level drone training (compliance, fleet management, AI & analytics)',
                  'Multiple certification exams included',
                  'Dedicated drone leasing/operations support',
                  'Enterprise aerial project execution with analysis reports',
                  'On-site training & annual refresher courses',
                  'VIP consultation & integration with enterprise GIS'
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-white text-navy font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-epilogue text-3xl md:text-5xl font-bold text-navy mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Partnering with this drone team transformed our site inspections. What used to take days now takes hours—with stunning aerial clarity. Their professionalism and turnaround time are unmatched.",
                author: "Samuel O.",
                role: "Project Manager, BuildRight Ltd."
              },
              {
                text: "Their drone mapping helped us detect irrigation issues we couldn't see from the ground. Crop health improved within weeks. It's like having a bird's-eye agronomist on call.",
                author: "Chinwe A.",
                role: "Farm Director, GreenHarvest Nigeria"
              },
              {
                text: "The aerial footage they delivered made our listings pop. We saw a 40% increase in inquiries within the first month. Clients love the cinematic views!",
                author: "Tunde B.",
                role: "Realtor, LuxeSpaces Realty"
              }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-light-gray p-8 rounded-3xl relative"
              >
                <div className="text-4xl text-primary/20 absolute top-6 right-6 font-serif">"</div>
                <p className="text-dark-gray italic mb-8 relative z-10">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-navy">{test.author}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MISTDrones;
