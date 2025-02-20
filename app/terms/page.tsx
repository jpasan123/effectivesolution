'use client';

import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';

export default function TermsOfService() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using the services provided by Effective Solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-gray-600 mb-6">
                Effective Solutions provides software development and related technology services. The specific details and scope of services will be outlined in individual service agreements.
              </p>

              <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
              <ul className="space-y-3 mb-6">
                {[
                  'Provide accurate and complete information',
                  'Maintain the confidentiality of account credentials',
                  'Use services in compliance with applicable laws',
                  'Respect intellectual property rights'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All intellectual property rights related to our services, including software, designs, and documentation, remain the property of Effective Solutions unless explicitly stated otherwise in a written agreement.
              </p>

              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Effective Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.
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