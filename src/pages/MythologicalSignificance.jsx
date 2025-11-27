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
        
          <h2 className='font-bold'>{language === "en" ? "Historical events of Navegoan village.":"नवेगाव गावातील ऐतिहासिक घटना."}</h2>
          {language === "en" ?
            (
          <ol className='list-decimal md:mt-4'>
            
          <li>Association with Parashuram:</li>
            <ul className='list-disc md:pl-4'>
              <li>The highest fort in Maharashtra, Salher Fort, located in Baglan taluka, is associated with Lord Parashuram, the sixth avatar of Vishnu.</li>
              <li>Local Belief:</li>
              <li>Parashuram performed tapasya (penance) on Salher.</li>
              <li>Some legends claim that after reclaiming land from the sea, Parashuram stayed in the Baglan hills and meditated here.</li>
              <li>Since Navegaon lies within the same mountain belt, local oral tradition often includes this larger mythological association.</li>
            </ul>

          <li>Ancient “Dakshinapath” Trade Route – Mention in Puranic Geography:</li>
            <ul className='list-disc md:pl-4'>
              <li>Baglan lies along the ancient north–south trade corridor, historically believed to be part of the Dakshinapath route, which is mentioned in: Skanda Purana, Padma Purana, Brahmanda Purana.</li>
              <li>This corridor linked northern and southern sacred regions. Villages along this belt—including Navegaon—are therefore indirectly part of Purāṇic geography.</li>
            </ul>

          <li>Hill Deities & Local Kuldevata Traditions:</li>
            <ul className='list-disc md:pl-4'>
              <li>Villages in Baglan, including Navegaon, typically worship: Khandoba, Kalika Mata, Grāmdevatā / Grāma Devī, Local guardian deities of the hills (Waghoba, Dongar Dev).</li>
              <li>These are part of Maharashtra’s ancient animistic and later Shaiva–Shakta traditions, giving the village cultural-mythological depth even if not tied to a major epic event.</li>
            </ul>

          <li> Connection to Fort Network with Deep Cultural Roots:</li>
            <ul className='list-disc md:pl-4'>
              <li>The Baglan forts — Salher, Mulher, Mora, Salota, Hargad — contain: Ancient rock-cut cisterns, Temples dating back centuries, Carvings and motifs linked to early Shaiva worship</li>
              <li>These archaeological and mythic layers form the historical-religious environment around villages such as Navegaon.</li>
            </ul>

             <li>Local Oral Mythology</li>
             <ul className='list-disc md:pl-4'>
              <li>Most Baglan villages maintain oral stories about:Ancient sages (Rishis) who once meditated in nearby hills.</li>
              <li> Yakshas and village guardian spirits.</li>
              <li>Sacred groves (Devrai) in or near the forest areas.</li>
             </ul>
      
      </ol>)
      : (
        <ol className='list-decimal md:mt-4'>
          <li>परशुरामांशी संबंध:</li>
            <ul className='list-disc md:pl-4'>
              <li>बागलाण तालुक्यात असलेला महाराष्ट्रातील सर्वात उंच किल्ला, साल्हेर किल्ला, विष्णूचा सहावा अवतार भगवान परशुराम यांच्याशी संबंधित आहे.</li>
              <li>स्थानिक श्रद्धा:</li>
              <li>परशुरामांनी साल्हेरवर तपस्या केली.</li>
              <li>काही आख्यायिका असा दावा करतात की समुद्रातून जमीन परत मिळवल्यानंतर, परशुराम बागलाण टेकड्यांमध्ये राहिले आणि येथे ध्यान केले.</li>
              <li>नवेगाव त्याच पर्वतीय पट्ट्यात असल्याने, स्थानिक मौखिक परंपरेत अनेकदा या मोठ्या पौराणिक संबंधाचा समावेश होतो.</li>
            </ul>

          <li>प्राचीन "दक्षिणापथ" व्यापार मार्ग - पौराणिक भूगोलात उल्लेख:</li>
            <ul className='list-disc md:pl-4'>
              <li>बागलाण प्राचीन उत्तर-दक्षिण व्यापार मार्गाच्या बाजूने आहे, ऐतिहासिकदृष्ट्या दक्षिणापथ मार्गाचा भाग असल्याचे मानले जाते, ज्याचा उल्लेख स्कंद पुराण, पद्म पुराण, ब्रह्मांड पुराणात आहे.</li>
              <li>हा मार्ग उत्तर आणि दक्षिण पवित्र प्रदेशांना जोडतो. या पट्ट्यातील गावे - नवेगावसह - अप्रत्यक्षपणे पुराणिक भूगोलाचा भाग आहेत.</li>
            </ul>

          <li>टेकडी देवता आणि स्थानिक कुलदेवता परंपरा:</li>
            <ul className='list-disc md:pl-4'>
              <li>नवेगावसह बागलाणमधील गावे सामान्यतः पूजा करतात: खंडोबा, कालिका माता, ग्रामदेवता / ग्रामदेवी, डोंगरांच्या स्थानिक रक्षक देवता (वाघोबा, डोंगर देव).</li>
              <li>हे महाराष्ट्राच्या प्राचीन शैव-शक्ती परंपरांचा भाग आहेत, जे गावाला सांस्कृतिक-पौराणिक खोली देतात, जरी ते एखाद्या मोठ्या महाकाव्याशी जोडलेले नसले तरी.</li>
            </ul>

           <li>किल्ल्यांचे नेटवर्क खोल सांस्कृतिक मुळांशी जोडलेले आहे:</li>
            <ul className='list-disc md:pl-4'>
              <li>बागलाण किल्ले - साल्हेर, मुल्हेर, मोरा, सालोटा, हरगड - मध्ये हे समाविष्ट आहे: प्राचीन दगडात कोरलेले टाके, शतकानुशतके जुनी मंदिरे, सुरुवातीच्या शैव पूजेशी जोडलेले कोरीवकाम आणि आकृतिबंध</li>
              <li>हे पुरातत्वीय आणि पौराणिक थर नवेगावसारख्या गावांभोवती ऐतिहासिक-धार्मिक वातावरण तयार करतात.</li>
            </ul>

            <li>स्थानिक मौखिक पौराणिक कथा:</li>
            <ul className='list-disc md:pl-4'>
              <li>बहुतेक बागलाण गावांमध्ये मौखिक कथा आहेत: जवळच्या टेकड्यांमध्ये एकेकाळी ध्यान करणारे प्राचीन ऋषी (ऋषी).</li>
              <li>यक्ष आणि गावाचे रक्षक आत्मे.</li>
              <li>वनक्षेत्रात किंवा जवळील पवित्र उपवन (देवराई).</li>
            </ul>
            
        </ol>
      )}
          
      </div>
      <Footer />
    </div>
  )
}
