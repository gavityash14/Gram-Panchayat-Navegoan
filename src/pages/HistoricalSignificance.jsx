import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function HistoricalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className='text-black font-bold text-4xl' >{(language === "en" )? "Historical Significance" : "ग्रामपंचायतीचे ऐतिहासिक महत्व"}</h1>
        <hr className='mt-5 mb-5' />
        <h2 className='md:mb-4'>{(language === "en")? `Navegoan is a village located in Taluka Baglan, District Nashik (Maharashtra). The village has been inhabited since ancient times and has been linked to agriculture, culture and society for generations.`:"नवेगाव हे नाशिक जिल्ह्यातील बागलाण तालुक्यात वसलेले एक गाव आहे. हे गाव प्राचीन काळापासून वसलेले आहे आणि पिढ्यानपिढ्या शेती, संस्कृती आणि समाजाशी जोडलेले आहे."}</h2>
        {(language === "en")?

        (<ol className='list-decimal'>
          <li >Belongs to Baglan / Baglana Region.</li>
          <ul className='list-disc md:pl-4'>
          <li>Navegaon is part of Baglan Taluka in Nashik district.</li>
          <li>Historically, Baglan (sometimes spelled Baglana) was a strategically important region.</li>
          <li>It lay along a major trade route: the Burhanpur–Surat ancient commercial road passed through the two parallel hill ranges (Selbari and Dolbari) in Baglan.</li>
          </ul>
          <li> Military / Strategic Importance</li>
          <ul className='list-disc md:pl-4'>
          <li>The Selbari-Dolbari hill ranges (in Baglan) have a series of forts: Salher, Salota, Mulher, Hargad, Mora etc.</li>
          <li>These forts were not just defensive: they were used by the Marathas as halting and storage points on their way back from loot raids (especially after attacking Surat).</li>
          <li>The Battle of Salher (1672) was fought nearby — this was a major Maratha victory over the Mughals, notable because it was one of their first pitched open-field victories.</li>
          <li>After Salher, control of Mulher fort (in Baglan) helped the Marathas consolidate their hold in the region.</li>
          </ul>
          <li>Earlier Polities</li>
          <ul className='list-disc md:pl-4'>
          <li>Baglan was once ruled by the Bagul (Baglana) kingdom — roughly from 1308 to 1619.</li>
          <li>According to local tradition and historical sources, the region (including forts) saw control by various powers: Yadavas, Gawli (Ahir) kings, Bagul rulers, and later the Mughals.</li>
          <li>In Ain-i-Akbari (Mughal-era chronicle), Baglana (Baglan) is mentioned for its strong forts (Salher and Mulher).</li>
          </ul>
          <li>Cultural / Mythological Aspects</li>
          <ul className='list-disc md:pl-4'>
          <li>There’s a legend that Parashuram performed penance on Salher fort; locals attribute mythological significance to the hill.</li>
          <li>The forts in this region also have rock-cut cisterns and caves, suggesting long habitation or at least use for retreats / military logistics.</li>
          </ul>
          <li>Modern Recognition</li>
          <ul className='list-disc md:pl-4'>
          <li>The Salher Fort (in Baglan) has been nominated for UNESCO World Heritage under “Maratha Military Landscapes.”</li>
          <li>Conservation efforts are underway for forts in the ~25 km radius around Salher, which includes the fort network in Baglan.</li>
          </ul>
       </ol>):
       (<ol className='list-decimal'>
          <li>बागलाण / बागलाणा प्रदेशाशी संबंधित</li>
          <ul className='list-disc md:pl-4'>
            <li>नवेगाव हे नाशिक जिल्ह्यातील बागलाण तालुक्याचा भाग आहे.</li>
            <li>ऐतिहासिकदृष्ट्या, बागलाण (कधीकधी बागलाणा असे लिहिले जाते) हा एक धोरणात्मकदृष्ट्या महत्त्वाचा प्रदेश होता.</li>
            <li>हे एका प्रमुख व्यापारी मार्गावर होते: बुरहानपूर-सुरत प्राचीन व्यावसायिक रस्ता बागलाणमधील दोन समांतर पर्वतरांगांमधून (सेलबारी आणि डोलबारी) जात असे.</li>
          </ul>
           <li>सैन्य / सामरिक महत्त्व</li>
           <ul className='list-disc md:pl-4'>
            <li>बागलाणमधील सेलबारी-डोलबारी पर्वतरांगांमध्ये किल्ल्यांची मालिका आहे: साल्हेर, सालोटा, मुल्हेर, हरगड, मोरा इ.</li>
            <li>हे किल्ले केवळ बचावात्मक नव्हते: मराठ्यांनी लुटीच्या हल्ल्यांवरून (विशेषतः सुरतवर हल्ला केल्यानंतर) परत येताना थांबा आणि साठवणुकीची ठिकाणे म्हणून त्यांचा वापर केला.</li>
            <li>साल्हेरची लढाई (१६७२) जवळच लढली गेली - हा मुघलांवरचा एक मोठा मराठ्यांचा विजय होता, कारण तो त्यांच्या पहिल्या खुल्या मैदानी विजयांपैकी एक होता.</li>
            <li>साल्हेरनंतर, मुल्हेर किल्ल्यावरील (बागलाणमधील) नियंत्रणामुळे मराठ्यांना या प्रदेशात त्यांची पकड मजबूत करण्यास मदत झाली.</li>
           </ul>
           <li>पूर्वीचे राज्य</li>
           <ul className='list-disc md:pl-4'>
            <li>बागलाणवर बागुल (बागलाण) राज्य होते - साधारणपणे १३०८ ते १६१९ पर्यंत.</li>
            <li>स्थानिक परंपरा आणि ऐतिहासिक स्त्रोतांनुसार, या प्रदेशावर (किल्ल्यांसह) विविध शक्तींचे नियंत्रण होते: यादव, गवळी (अहिर) राजे, बागुल शासक आणि नंतर मुघल.</li>
            <li>ऐन-ए-अकबरी (मुघलकालीन इतिहास) मध्ये, बागलाणा (बागलाण) त्याच्या मजबूत किल्ल्यांसाठी (साल्हेर आणि मुल्हेर) उल्लेख केला आहे.</li>
           </ul>
           <li>सांस्कृतिक / पौराणिक पैलू</li>
            <ul className='list-disc md:pl-4'>
            <li>परशुरामांनी साल्हेर किल्ल्यावर तपश्चर्या केल्याची एक आख्यायिका आहे; स्थानिक लोक टेकडीला पौराणिक महत्त्व देतात.</li>
            <li>या प्रदेशातील किल्ल्यांमध्ये दगडात कोरलेले टाके आणि गुहा देखील आहेत, जे दीर्घकाळ वस्ती किंवा किमान निवासस्थाने / लष्करी रसद यासाठी वापरल्याचे सूचित करतात.</li>
            </ul>
            <li>आधुनिक मान्यता</li>
            <ul className='list-disc md:pl-4'>
            <li>बागलाणमधील साल्हेर किल्ला (बागलाणमधील) युनेस्कोच्या जागतिक वारसा स्थळासाठी "मराठा लष्करी भूदृश्ये" अंतर्गत नामांकित करण्यात आला आहे.</li>
            <li>साल्हेरभोवती सुमारे २५ किमी त्रिज्येतील किल्ल्यांचे संवर्धन करण्याचे प्रयत्न सुरू आहेत, ज्यामध्ये बागलाणमधील किल्ल्यांचे जाळे समाविष्ट आहे.</li>
            </ul>
       </ol>)}
      </div>
      <Footer />
    </div>
  )
}
