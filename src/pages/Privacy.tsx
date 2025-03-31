import React from 'react';

export function Privacy() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#2a9df4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Aerofly Travels, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Passport details</li>
                <li>Travel preferences and history</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Cookies and usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>To process your travel bookings and reservations</li>
                <li>To communicate with you about your bookings</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our services and website</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Airlines and travel providers to fulfill your bookings</li>
                <li>Payment processors for secure transactions</li>
                <li>Legal authorities when required by law</li>
                <li>Service providers who assist in our operations</li>
                <li>Other third parties with your consent</li>
                <li>Business partners for marketing and promotional purposes</li>
                <li>We may also disclose information when required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</li>

              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Secure Sockets Layer (SSL) encryption</li>
                <li>Firewalls and intrusion detection systems</li>
                <li>We implement security measures to protect your personal information from 
                    unauthorised access, use, or disclosure.</li>
                <li>However, please note that no method of transmission over the Internet or electronic 
                    storage is 100% secure. While we strive to protect your information, we cannot guarantee 
                    absolute security.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our practices, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-600">Email: privacy@aeroflytravel.com</p>
                <p className="text-gray-600">Phone: +91 8586980421</p>
                <p className="text-gray-600">Address: Delhi India</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}