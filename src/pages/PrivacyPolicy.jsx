import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#001838] text-white py-24 px-6 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-epilogue text-4xl md:text-5xl font-bold mb-4"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[#bfe0f2] text-lg md:text-xl max-w-2xl mx-auto font-inter"
      >
        {subtitle}
      </motion.p>
    )}
  </section>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Privacy Policy" />
      
      <section className="py-20 px-6 max-w-4xl mx-auto font-inter text-gray-600 leading-relaxed">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to the Lagos State Geographic Information System (LAGIS) privacy policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, title, date of birth and gender.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details (if applicable).</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Sharing Your Information</h2>
            <p className="mb-4">
              We may share your personal data with internal third parties (such as other departments within the Lagos State Government) and external third parties (such as service providers acting as processors based in Nigeria who provide IT and system administration services). We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
            </p>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Security of Your Information</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Retention of Information</h2>
            <p className="mb-4">
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Your Privacy Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-epilogue text-2xl font-bold text-[#001838] mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-[#f5f7fa] p-6 rounded-xl inline-block">
              <p className="text-[#001838] font-medium">Email: privacy@egisunit.com</p>
              <p className="text-[#001838] font-medium">Address: LASPIC Building 15, the Secretariat, Alausa</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
