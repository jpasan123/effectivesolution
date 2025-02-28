'use client';

import { motion } from 'framer-motion';
import { Lock, Check } from 'lucide-react';

// Example header navigation items
const navItems = {
  terms: [
    { href: '#acceptance', label: 'Acceptance' },
    { href: '#services', label: 'Services' },
    { href: '#obligations', label: 'Obligations' },
    // ... other items
  ],
  privacy: [
    { href: '#collection', label: 'Collection' },
    { href: '#usage', label: 'Usage' },
    { href: '#sharing', label: 'Sharing' },
    // ... other items
  ]
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
              <p className="text-gray-600 mb-6">
                We collect information that you provide directly to us, including personal information such as name, email address, and contact details when you use our services or communicate with us.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
              <ul className="space-y-3 mb-6">
                {[
                  'Provide and maintain our services',
                  'Communicate with you about our services',
                  'Improve and develop our services',
                  'Protect against fraud and unauthorized access'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist in our operations, subject to confidentiality obligations.
              </p>

              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information.
              </p>

              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@effectivesolutions.com.
              </p>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}