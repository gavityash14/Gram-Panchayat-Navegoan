import React from 'react'
import Header from '../components/Header'
import { sarpanch, panchayat_officer, panchayat_staff_1, panchayat_staff_2, panchayat_staff_3,} from '../assets/assets'
import Footer from '../components/Footer'


export default function ContactUs() {
  return (
    <div>
      <title>संपर्क</title>
      <meta name='description' content='आमच्याशी संपर्क साधा' />
      <link rel="canonical" href="/contact-us" />
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-2 md:p-8 w-full text-center">
          <h1 className="text-white font-bold text-3xl mb-8">Contact Us</h1>

          <div className="flex flex-row gap-10 justify-center items-center text-white">
            {/* Sarpanch */}
            <div className="flex flex-col items-center">
              <img
                src={sarpanch}
                alt="sarpanch"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.सुभाष देवचंद अहिरे  </h2>
              <h3 className="text-[10px] md:text-[16px]">प्रशासक ग्रामपंचायत नवेगाव </h3>
              <h3 className="text-[10px] md:text-sm">मो. 9890126462</h3>
            </div>

            {/* Panchayat Officer */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_officer}
                alt="panchayat_officer"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.राजू भटू ठाकरे </h2>
              <h3 className="text-[10px] md:text-[16px]">पंचायत अधिकारी</h3>
              <h3 className="text-[10px] md:text-sm">मो. Mob no-8799885297</h3>
            </div>
          </div>

          {/* Staff */}
          <h1 className='text-green-500 font-bold text-2xl mb-8 mt-8'>कर्मचारी वृंद</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-white">
            {/* Staff 1 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_1}
                alt="staff 1"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. देवाजी काशिनाथ बोरसे </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्रामपंचायत शिपाई</h3>
            </div>

            {/* Staff 2 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_2}
                alt="staff 2"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.योगिता संजय पवार</h2>
              <h3 className="text-[10px] md:text-[16px]">केंद्र चालक</h3>
            </div>

            {/* Staff 3 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_3}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. भगवान आनंदसिंग पवार </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्राम रोजगार सेवक</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-white mt-16 gap-4 md:px-20 md:pb-20 md:pt-10'>
            <div className='md:w-[100%] rounded-2xl overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46821.49927561949!2d74.09794440855482!3d20.570103642162785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde6484c12e8531%3A0xede8b1dadc1998a5!2sNavegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1764206104660!5m2!1sen!2sin" width="600" height="450" style={{border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
               </iframe>
            </div>

            <div className='flex-row text-start py-4 px-10 bg-gray-500 md:ml-5 rounded-2xl self-center w-full md:h-[450px]'>
              <h3 className='font-bold text-2xl text-center'>Gram Panchayat, Navegoan</h3>
              <hr className='mt-4 mb-4' />
              <p className='md:text-[18px] md:pt-4'><strong>Email Id:</strong> nskgpnavegoan65@gmail.com</p>
              <p className='md:text-[18px] md:pt-4'><strong>LGD Code: </strong>182684</p>
              <p className='md:text-[18px] md:pt-4'><strong>Censes Code: </strong>550139</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
