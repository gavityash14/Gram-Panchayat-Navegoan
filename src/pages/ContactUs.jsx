import React from 'react'
import Header from '../components/Header'
import { sarpanch, panchayat_officer, panchayat_staff_1, panchayat_staff_2, panchayat_staff_3, panchayat_staff_4, panchayat_staff_5 } from '../assets/assets'
import Footer from '../components/Footer'


export default function ContactUs() {
  return (
    <div>
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
              <h3 className="text-[10px] md:text-[16px]">प्रशासक ग्रामपंचायत खामलोन</h3>
              <h3 className="text-[10px] md:text-sm">मो. 9890126462</h3>
            </div>

            {/* Panchayat Officer */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_officer}
                alt="panchayat_officer"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.विद्याधर पंडित महाले </h2>
              <h3 className="text-[10px] md:text-[16px]">पंचायत अधिकारी</h3>
              <h3 className="text-[10px] md:text-sm">मो. Mob no-9764659247</h3>
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
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. भिला नामदेव अहिरराव </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्रामपंचायत शिपाई</h3>
            </div>

            {/* Staff 2 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_2}
                alt="staff 2"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. वैभव भिला अहिरराव</h2>
              <h3 className="text-[10px] md:text-[16px]">पाणी पुरवठा कर्मचारी</h3>
            </div>

            {/* Staff 3 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_3}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. निंबा सोनू अहिरराव </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्राम रोजगार सेवक</h3>
            </div>

            {/* Staff 4 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_4}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.अमोल भरत काकडे </h2>
              <h3 className="text-[10px] md:text-[16px]">संगणक परिचालक</h3>
            </div>

            {/* Staff 5 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_5}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री. अमित भिला अहिरराव  </h2>
              <h3 className="text-[10px] md:text-[16px]">युवा प्रशिक्षणार्थी</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-white mt-16 gap-4 md:px-20 md:pb-20 md:pt-10'>
            <div className='md:w-[100%] rounded-2xl overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29846.187769235672!2d74.2741805417888!3d20.759973722637543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdef4bbf97f6083%3A0xade9cd92a843359e!2sKhamlon%2C%20Maharashtra%20423204!5e0!3m2!1sen!2sin!4v1763516620873!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className='flex-row text-start py-4 px-10 bg-gray-500 md:ml-5 rounded-2xl self-center w-full md:h-[450px]'>
              <h3 className='font-bold text-2xl text-center'>Gram Panchayat, Khamlon</h3>
              <hr className='mt-4 mb-4' />
              <p className='md:text-[18px] md:pt-4'><strong>Email Id:</strong> nskgpkhamlon31@gmail.com</p>
              <p className='md:text-[18px] md:pt-4'><strong>LGD Code: </strong>182648</p>
              <p className='md:text-[18px] md:pt-4'><strong>Censes Code: </strong>550060</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
