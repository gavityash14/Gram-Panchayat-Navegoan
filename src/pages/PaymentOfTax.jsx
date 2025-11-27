import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaymentOfTax() {
  return (
    <div>
      <Header />
      <div className="bg-black flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-2 md:p-8 w-full text-center">
          <p className="text-white mb-4">All taxpayers are hereby informed that you can pay your house tax/water tax online using a QR code.</p>
          <h1 className="text-white font-bold text-3xl mb-8">Payment of Tax</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="qr-code-1.png" alt="QR Code 1" className="w-32 h-32" />
            <img src="qr-code-2.png" alt="QR Code 2" className="w-32 h-32" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
