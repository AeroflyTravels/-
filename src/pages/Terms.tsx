import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';

export function Terms() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#2a9df4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Booking Terms</h3>
              <p className="text-gray-600">
                Understanding our booking and cancellation policies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Privacy & Security</h3>
              <p className="text-gray-600">
                How we protect your personal information
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AlertCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Liability</h3>
              <p className="text-gray-600">
                Understanding our liability limitations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HelpCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                How to get help when you need it
              </p>
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Aerofly Travels' services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Booking and Payments</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">2.1 Reservations</h3>
                <p className="text-gray-600">
                  All reservations are subject to availability and confirmation. A booking is not confirmed until you receive 
                  a written confirmation from us.
                </p>

                <h3 className="text-lg font-semibold">2.2 Payment Terms</h3>
                <p className="text-gray-600">
                  Full payment is required at the time of booking unless otherwise specified. All prices are in the currency 
                  specified and include applicable taxes.
                </p>

                <h3 className="text-lg font-semibold">2.3 Cancellation Policy</h3>
                <p className="text-gray-600">
                  Cancellation policies vary by service type and provider. Specific cancellation terms will be provided at 
                  the time of booking.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Visa and Travel Documents</h2>
              <p className="text-gray-600 mb-4">
                It is the traveler's responsibility to ensure they have valid travel documents, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid passport with required validity period</li>
                <li>Necessary visas and permits</li>
                <li>Travel insurance documentation</li>
                <li>Vaccination certificates where required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Liability</h2>
              <p className="text-gray-600 mb-4">
                Aerofly Travels acts as an intermediary between travelers and service providers. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Actions or omissions of service providers</li>
                <li>Force majeure events</li>
                <li>Personal injury or property damage</li>
                <li>Lost or delayed baggage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Changes and Modifications</h2>
              <p className="text-gray-600 mb-4">
                Aerofly Travels may update or modify these terms and conditions at any time.
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                to our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Prices and availability are subject to change without notice.</li>
                <li>Modifications to bookings may be subject to fees and availability.</li>
                <li>Changes to bookings may be subject to fees and availability.</li>
                <li>Cancellation policies vary depending on the service and may incur cancellation charges.</li>
                <li>Refunds, if applicable, will be processed according to our refund policy.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on our website, including text, graphics, logos, and software, is the property of Aerofly 
                Travels and is protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Services</h2>
              <p className="text-gray-600">
              <li>Aerofly Travels provides a wide range of travel services, including: meet and assist, attestation and legalisation, onsite support & implant, Indian E-Visa processing, and more as per the agreed terms. </li>
              <li> Sightseeing tours, international tour packages, air tickets, hotels, cruise, train tickets, and travel insurance are also offered as part of our services.</li>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8.  Customer Responsibilities</h2>
              <p className="text-gray-600">
              <li>Customers are responsible for providing accurate information during the booking process. </li>
              <li> Customers must adhere to the rules and regulations of airlines, hotels, and other service providers.</li>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Disputes</h2>
              <p className="text-gray-600">
              <li>Any disputes or complaints should promptly be reported to Jetsave India Tours for resolution. </li>
              <li> Disputes not resolved amicably shall be subject to the jurisdiction of the appropriate courts.</li>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600">
              <li>Aerofly Travels reserves the right to amend these terms and conditions at any time without prior notice. </li>
              <li> Customers are advised to review the terms periodically for updates.</li>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-600">Email: legal@aeroflytravel.com</p>
                <p className="text-gray-600">Phone: +91 8586980421</p>
                <p className="text-gray-600">Address: Delhi India</p>
              </div>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-gray-500">
          <p className="text-center text-gray-400">
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}