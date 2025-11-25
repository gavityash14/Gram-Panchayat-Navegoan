import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function MythologicalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className="text-black font-bold text-4xl">{language === "en" ? "Mythological Significance" : "पौराणिक महत्व"} </h1>
        <hr className='mt-5 mb-5' />
        
          <h2 className='font-bold'>{language === "en" ? "Historical events of Khamlon village.":"खामलोन गावातील ऐतिहासिक घटना."}</h2>
          {language === "en" ?
            (
          <ol className='list-decimal md:mt-4'>
            
          <li>Maratha-Mughal conflict in Baghlan province (17th century).</li>
            <ul className='list-disc md:pl-4'>
              <li>Khamlon village was located in the vicinity of Salher-Mulher forts, so during that time, there were movements of Maratha and Mughal armies here.</li>
              <li>The Battle of Salher in 1672 was an important event during the Shivaji era. In this battle, Shivaji Maharaj's army defeated the Mughals.</li>
              <li>During this battle, it is mentioned in some local folklore that people from the surrounding villages (including Khamlon) helped the Maratha army by providing food, grains, and local information.</li>
            </ul>

          <li>Peshwa and Baglan Administration Period (18th Century).</li>
            <ul className='list-disc md:pl-4'>
              <li>During the Peshwa period, Khamlon village was part of the revenue collection and agricultural system of Baglan province.</li>
              <li>During that period, the villagers in the village came together and built wells, ponds and temples, which increased agricultural production.</li>
              <li>Some old inscriptions and remains of stone construction are found in the village, which are examples of the craftsmanship of that period.</li>
            </ul>

          <li>British rule (19th century).</li>
            <ul className='list-disc md:pl-4'>
              <li>During the British period, the villagers of Khamlon experienced changes in taxation and land revenue system.</li>
              <li>Many became aware of the freedom movement; some, according to elders, participated in the non-cooperation movement at the local level.</li>
              <li>During that period, schools and the village panchayat system were established in the village, which remains the basis of administration even today.</li>
            </ul>

          <li>Post-Independence Period (After 1947).</li>
            <ul className='list-disc md:pl-4'>
              <li>After the independence of India, agricultural reforms, irrigation schemes and cooperative societies were developed in Khamlon village.</li>
              <li>The Gram Panchayat system was established and the socio-economic development of the village took place rapidly.</li>
              <li>The village made progress in the fields of agriculture, education and culture.</li>
            </ul>
      
      </ol>)
      : (
        <ol className='list-decimal md:mt-4'>
          <li>बागलाण प्रांतातील मराठा-मुघल संघर्ष (१७व्या शतकात).</li>
            <ul className='list-disc md:pl-4'>
              <li>खामलोन गाव साल्हेर-मुल्हेर किल्ल्यांच्या परिसरात असल्यामुळे त्या काळात येथे मराठे आणि मुघल सैन्यांच्या हालचाली होत असत.</li>
              <li>सन १६७२ मध्ये झालेली साल्हेरची लढाई ही शिवकालीन महत्त्वाची घटना होती. या लढाईत शिवाजी महाराजांच्या सेनेने मुघलांना पराभूत केले.</li>
              <li>या लढाईच्या वेळी आजूबाजूच्या गावांमधील (खामलोनसह) लोकांनी अन्न, धान्य, आणि स्थानिक माहिती पुरवून मराठा सेनेला मदत केल्याचा उल्लेख काही स्थानिक लोककथांमध्ये आढळतो.</li>
            </ul>

          <li>पेशवे आणि बागलाण प्रशासन काळ (१८व्या शतकात)</li>
            <ul className='list-disc md:pl-4'>
              <li>पेशवे काळात खामलोन गाव बागलाण प्रांतातील राजस्व वसुली आणि शेती व्यवस्थेचा भाग होते.</li>
              <li>त्या काळात गावात ग्रामस्थांनी एकत्र येऊन विहिरी, तळे आणि देवस्थाने बांधली, ज्यामुळे शेती उत्पादन वाढले.</li>
              <li>काही जुने शिलालेख आणि दगडी बांधकामाचे अवशेष गावात आढळतात, जे त्या काळाच्या कारागिरीचे उदाहरण आहेत.</li>
            </ul>

          <li>ब्रिटिश राजवटीचा काळ (१९व्या शतकाळ)</li>
            <ul className='list-disc md:pl-4'>
              <li>ब्रिटिश काळात खामलोन ग्रामस्थांनी करप्रथा आणि जमीन महसूल व्यवस्थेत बदल अनुभवले.</li>
              <li>अनेकांनी स्वातंत्र्य चळवळीबद्दल जागृती केली; काहींनी स्थानिक स्तरावर असहकार आंदोलनात सहभाग घेतल्याचे वयोवृद्ध सांगतात.</li>
              <li>गावात त्या काळात शाळा आणि ग्रामपंचायत रचना सुरु झाली, जी आजही प्रशासनाचा पाया आहे.</li>
            </ul>

           <li>स्वातंत्र्योत्तर काळ (१९४७ नंतर)</li>
            <ul className='list-disc md:pl-4'>
              <li>भारत स्वातंत्र्यानंतर खामलोन गावात शेती सुधारणा, सिंचन योजना आणि सहकारी संस्था यांचा विकास झाला.</li>
              <li>ग्रामपंचायत प्रणाली स्थापन झाली आणि गावाचा सामाजिक-आर्थिक विकास वेगाने झाला.</li>
              <li>शेती, शिक्षण आणि संस्कृती क्षेत्रात गावाने प्रगती साधली.</li>
            </ul>
        </ol>
      )}
          
      </div>
      <Footer />
    </div>
  )
}
