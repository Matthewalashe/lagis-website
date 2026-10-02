import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Home, Building, CheckCircle2, AlertTriangle, Upload, Send } from 'lucide-react';
import { luacFormData } from '@/data/siteData';
import { images } from '@/data/images';

export default function LUACFormPage() {
  return (
    <div className="min-h-screen bg-light-gray font-inter pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={images.land.survey} alt="Surveying" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001838]/85 to-[#001838]/60" />
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {luacFormData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-inter text-lg md:text-xl text-[#bfe0f2] max-w-2xl mx-auto"
          >
            Submit your land and property details for official processing by the Land Use Allocation Committee.
          </motion.p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 mt-12 space-y-16">
        
        {/* Who Should Use This Form */}
        <section>
          <h2 className="text-2xl font-epilogue font-bold text-dark-gray mb-6 text-center">Who Should Use This Form</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {luacFormData.whoShouldUse.map((item, idx) => {
              const icons = [<Home className="w-6 h-6" />, <Users className="w-6 h-6" />, <Building className="w-6 h-6" />];
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                    {icons[idx]}
                  </div>
                  <h3 className="font-bold text-dark-gray mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Instructions Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-epilogue font-bold text-dark-gray mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Information Required
              </h3>
              <ol className="space-y-4">
                {luacFormData.requiredInfo.map((info, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700">
                    <span className="font-bold text-primary">{idx + 1}.</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-epilogue font-bold text-dark-gray mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> How to Complete
              </h3>
              <ul className="space-y-3">
                {luacFormData.howToComplete.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700 items-start">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="font-epilogue font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Important Notes
              </h3>
              <ul className="space-y-3">
                {luacFormData.notes.map((note, idx) => (
                  <li key={idx} className="text-sm text-red-700 leading-relaxed">
                    • {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-epilogue font-bold text-dark-gray mb-8 border-b pb-4">Application Details</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Personal Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter your full legal name" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+234..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="you@example.com" />
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Property Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Property Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Address *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Full address of the property" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Plot / Reference Number *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="e.g. Block A, Plot 12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Document Type *</label>
                      <select required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                        <option value="">Select document type</option>
                        <option value="c-of-o">Certificate of Occupancy</option>
                        <option value="deed">Deed of Assignment</option>
                        <option value="survey">Survey Plan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Purpose & Documents */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Submission Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Submission *</label>
                    <textarea required rows="3" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Explain why you are submitting this form..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary hover:bg-blue-50 transition-colors cursor-pointer group">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors" />
                        <div className="flex text-sm text-gray-600 justify-center">
                          <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                            <span>Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                    <textarea rows="2" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Any other information..."></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-all flex justify-center items-center gap-2 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <Send className="w-5 h-5" /> Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
