import React,{useContext} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
import {upi_trademark,qr_code_1,qr_code_2 } from '../assets/assets';


export default function PaymentOfTax() {
  const {language} = useContext(AppContext);

  return (
    <div>
      <Header />
      <div className="bg-black flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-2 md:p-8 w-full text-center">
          <p className="text-white mb-4">{language === "en" ?  "All taxpayers are hereby informed that you can pay your house tax/water tax online using a QR code." : "सर्व कर धारकांना सुचना करण्यात येते की, आपण आपल्या घराची घरपट्टी / पाणीपट्टी भरणा QR कोड चा वापर करुन ऑनलाईन भरणा करु शकता."}</p>
          <h1 className="text-white font-bold text-3xl mb-8">{language === "en" ?  "Payment of Tax" : "कर भरणा"}</h1>
          <div className="flex justify-center space-x-8 mb-4">
            <div className='flex flex-col items-start'>
              <h3 className='text-white text-2xl self-center'>{language === "en"? "House Tax" : "घरपट्टी"}</h3>
              <img src={qr_code_1} alt="QR Code 1" className="w-32 h-32 self-center my-4" />
              <p className='text-white'>GRAMPANCHAYAT NAVEGAON</p>
              <p className='text-white'>gramp98817@barodampay</p>
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-white text-2xl self-center'>{language === "en"? "Water Supply Tax/Water Tax" : "पाणी पुरवठा निधी/पाणी पट्टी"}</h3>
              <img src={qr_code_2} alt="QR Code 2" className="w-32 h-32 self-center my-4" />
              <p className='text-white'>GRAMPANCHAYAT NAVEGAON</p>
              <p className='text-white'>panip98817@barodampay</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={upi_trademark} alt="UPI Trademark" className='mt-4 h-12' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
