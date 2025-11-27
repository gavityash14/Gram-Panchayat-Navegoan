import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext';

export default function AboutGramPanchayat() {
  const [field, setField] = useState('overview');
  const { language } = useContext(AppContext);
  const tabClass = (isActive, isFirst) => {
    const base = 'border-2 bg-cyan-300 rounded-2xl text-center py-1 px-4 hover:bg-amber-300 cursor-pointer transition';
    const spacing = isFirst ? '' : 'mt-4';
    const active = 'bg-amber-300 text-white';
    const inactive = 'bg-cyan-300 text-black';
    return `${base} ${spacing} ${isActive ? active : inactive}`;
  }
  const tabs = [
    { key: 'overview', en: 'Overview', mr: 'आढावा'},
    { key: 'demographics', en: 'Demographics', mr: 'आढावा'},
    { key: 'education', en: 'Education', mr: 'आढावा'},
    { key: 'culture', en: 'Culture', mr: 'आढावा'}
  ];

  const details = {
    overview: {
      title: "Navegoan Gram Panchayat",
      details: `Navegoan is a village located in Baglan taluka of Nashik district in the state of Maharashtra. Its Gram Panchayat is named as Navegoan Gram Panchayat. The geographical area of the village is approximately 694 hectares.<br />The village of Navegoan was included in the village panchayat. The village panchayat was established in 1974.<br />According to the 2011 census, the total population of Navegoan village is 838, out of which 442 are males and 396 are females. Total households are 182.<br /> Child Population (0-6 years): 103 (12.29% of total population).<br /> Literacy Rate: 74.29% (Male: 85.13%, Female: 62.03%).<br /> Administration: Navegaon is a Gram Panchayat and as per the Indian Constitution and the Panchayati Raj Act, the Gram Panchayat functions under the leadership of Sarpanch (elected village head).<br /> *Representation:<br />
Assembly Constituency: Baglan.<br />
Lok Sabha Constituency: Dhule.<br />
<br />
 `,
      mr_title: "नवेगाव ग्रामपंचायत",
      mr_details: `नवेगाव हे महाराष्ट्र राज्यातील नाशिक जिल्ह्यातील बागलाण तालुक्यात वसलेले एक गाव आहे. या ग्रामपंचायतीचे नाव नवेगाव ग्रामपंचायत आहे. गावाचे भौगोलिक क्षेत्रफळ अंदाजे ६९४ हेक्टर आहे.
<br />
नवेगाव ग्रामपंचायत मध्ये नवेगाव नावाचे समावेश होता ग्रामपंचायतीची स्थापना 1974.
<br />
सन 2011 च्या जनगणेनुसार खामलोन गावाचे एकूण लोकसंख्या ८३८ इतकी आहे त्यापैकी पुरुष ४४२ महिला ३९६ इतकी आहे. एकूण घरे १८२.
<br />
बाल लोकसंख्या (०-६ वर्षे): १०३ (एकूण लोकसंख्येच्या 12.29\% )
<br />
साक्षरता दर: 74.29\% (पुरुष: 85.13\%, स्त्री: 62.03\%).
<br />
प्रशासन: नवेगाव ही एक ग्रामपंचायत आहे आणि भारतीय संविधानानुसार व पंचायती राज कायद्यानुसार ग्रामपंचायतीचे कामकाज सरपंचांच्या (निवडून आलेले गावप्रमुख) नेतृत्वाखाली चालते.
<br />
*लोकप्रतिनिधित्व:
<br />
विधानसभा मतदारसंघ: बागलाण
<br />
लोकसभा मतदारसंघ: धुळे
`
    },
    demographics: {
      title: "Population and Geographic Information",
      details: `The population of the Gram Panchayat according to the 2011 census: Female-369, Male-442, Total-838.<br />
      Geographic area of the village: 694 hectares:<br />
      • Dry land area-325.00 hectares<br />
      • Irrigated area-72.10 hectares<br />
      • Forest area-0.00 hectares<br />
      • Village settlement area-3.72 hectares<br />
      • River bed-0.05 hectares<br />
      • Roads, canals, pipelines-2.32 hectares<br />
      • Area Under Cultivation-1.32 hectares<br />
      Distance from Taluka: 8 km, Distance from District: 90 km.`,
      mr_title: "लोकसंख्या आणि भौगोलिक माहिती",
      mr_details: `ग्रामपंचायतीची लोकसंख्या सन-२०११ च्या जनगणना नुसार:
<br />
स्त्री-799 पुरुष-862 एकूण 1661 एवढी आहे.
<br />
गावाचे भौगोलिक क्षेत्र 427.76 हेक्टर आहे:
<br />
• जिरायत क्षेत्र-325.00 हेक्टर
<br />
• बागायत क्षेत्र- हेक्टर
<br />
• वनक्षेत्र-0.00 हेक्टर
<br />
• गावठाण क्षेत्र-3.72 हेक्टर
<br />
• नदीपात्र-0.05 हेक्टर
<br />
• रस्ते, कॅनोल, नळमार्ग-2.32 हेक्टर
<br />
• लागवडीखालील क्षेत्र-1.32 हेक्टर
<br />
गावापासून तालुक्याचे अंतर 23 कि.मी. व जिल्ह्याचे अंतर 114 कि.मी. आहे.`,
    },
    education: {
      title: "Educational Facilities",
      details: `Educational facilities under the Gram Panchayat:<br />
      Zilla Parishad Primary Schools-1<br />
      • Navegoan (Grades 1-4): Boys-15, Girls-30<br />
      Anganwadi Centers-2<br />
      • Children aged 0-6 years: Boys-58, Girls-50<br /
      Library-1`,
      mr_title: "शैक्षणिक सुविधा",
      mr_details: `ग्रामपंचायत अंतर्गत शैक्षणिक सुविधा:
<br />
जि.प.प्राथमिक शाळा-1
<br />
• खामलोन (वर्ग 1 ते 4): मुले-15, मुली-30
<br />
अंगणवाडी केंद्र-2
<br />
• 0 ते 6 वर्ष वयोगटातील मुले-58, मुली-50
<br />
वाचनालय-१`,
    },
    culture: {
      title: "Cultural Information",
      details: `Tradition and Culture:<br />
      1) Social structure and traditions:<br />
      • The main families living in the village are Marathi-speaking agricultural families.<br />
      • The society usually has a balanced mix of different castes and classes (Marathas, Dhangars, Kolis, and tribal groups in some places).<br />
      • The tradition of family ties, neighborliness, and mutual assistance is still preserved in the village.<br />
      • The family, the young and the old, and the welcoming of guests are given special importance in the house.<br /><br />
      2) Folk Deities and Temples:<br />
        Since Navegaon is surrounded by the Sahyadri mountain range, the worship of local deities is still a religious and cultural center here.<br />
        The following types of temples are generally found in the village (according to local customs):<br />
      🔸Village Deities<br />
      • Like Marathi villages, it is common to have temples of village deities (e.g. Maruti, Bhairavnath, Kalbhairav, Khandoba, Jogeshwari, Jakhabai).<br />
      • During the Yatras, Bhajans, Ovas, Gondals, Kirtans are organized in the village.<br />
      🔸Family Deities<br />
      • Separate Family Deities are worshipped by different families in the village.<br />
      • Pujas and ceremonies are more common in the months of Shravan, Chaitra, Ashadh.<br /><br />
      3) Festivals & Rituals:<br />
       The cultural life of the Baglan region is very rich. The same festivals are celebrated with great enthusiasm in Navegaon too:<br />
      🌟 Main Festivals:<br />
      • Gudhi Padwa-Traditional New Year in the village.<br />
      • Holi/Rangpanchami-Especially enthusiastic in rural areas.<br />
      • Ashadhi Ekadashi-Warkari tradition; Tal-Mridang, Abhang.<br />
      • Navratri-Jagar Dindi, Goddess worship, Bhajani Mandals.<br />
      • Dussehra- Giving gold/Apati leaves.<br />
      • Makar Sankrant-Turmeric-Skunk, Tilgul.<br />
      • Deepavali-Bhaubij has special importance in rural areas.<br />
      🌾 Agricultural festivals:<br />
      • Pola-Bull worship, ocean music procession.<br />
      • Naag Panchami-Worship of Nag Devi in the fields.<br />
      • Varsha-Sankranti / Kadhanya Festival-Welcoming the rains.<br /><br />
      4) Folk art, music and cultural programs:<br />
      • The tradition of Kirtan, Bharud, Bhajan is strong in the village.<br />
      • Dhimma, Fugdi are played during monsoon and Shravan.<br />
      • Dhol-Tasha, Lezim, Halgi instruments are used more in religious programs.<br />
      • The influence of the Warkari sect is great in the Baglan area — the tradition of Abhang, Ovi, Gawlan songs.<br />
      • Cultural programs like Republic Day, Independence Day in schools.<br /><br />
      5) Traditional life related to agriculture:<br />
      • The cultural foundation of Navegaon is Agriculture.<br />
      • Traditional crops: Jowar, Bajra, Maize, Pulses, and in some areas Onion/Grapes/Coconut.<br />
      • The culture of working together in groups along with farm work is still alive.<br />
      • Collective activities at the village level such as Odha, wells, nala-dam construction.<br /><br />
      6) Cuisine:<br />
        The rural food culture of Baglan and Nashik districts is simple but nutritious:<br />
      • Bread: Jowar/Bajri/Nachni.<br />
      • Vegetables: Pithla, Thecha, Village Brinjal, Shevga, Boiled Pulses.<br />
      • Non-vegetarian dishes: Paiya Soup, Village Chicken, Mutton Rassa.<br />
      • Festivals: Puranpoli, Modak, Kheer.<br />
      • In winter: Gram Dal-Halal Milk, Millet Bread + Garlic Chutney.<br /><br />
      7) Social traditions and customs: <br />
      • Halgi-Lezim, Dhol, traditional Aarti in wedding ceremonies.<br />
      • Tradition of telling Katha-Katha, Ovya in village houses.<br />
      • Village meetings are organized on development works like Water, electricity, roads, schools — this is an important part of Gram Swarajya.<br />
      • Issues like Cooperation, water conservation, agricultural improvement are the core of rural social structure.<br /><br />
      8) Folklore / Traditions related to geography:<br />
        The influence of the Salher-Mulher forts in the Baghlan region is so great that many oral stories related to it are told in nearby villages like Navegaon:<br />
      • Battles related to Shivaji Maharaj's campaigns.<br />
      • Protection of the village by local temples.<br />
      • Folktales about agriculture, water and rain.<br />
      This literature still survives in the oral tradition of uncles/grandparents.<br />`,
      mr_title: "सांस्कृतिक माहिती",
      mr_details: `परंपरा आणि संस्कृती:
<br />
      1) समाजरचना व परंपरा:<br />
      • गावात राहणाऱ्या प्रमुख कुटुंबांमध्ये मराठी भाषिक शेतीप्रधान कुटुंबे आढळतात.<br />
      • समाजात सहसा विविध जाती-वर्गांचे संतुलित मिश्रण (मराठा, धनगर, कोळी, काही ठिकाणी आदिवासी समूह) असते.<br />
      • गावात कौटुंबिक नाती, शेजारीपाजारीपणा आणि परस्पर साहाय्य ही परंपरा अजूनही जपली जाते.<br />
      • घरात मोठे–लहान, पाहुण्यांचे स्वागत यांना खास महत्त्व असते.<br />
<br />
      2) लोकदेवता व देवस्थाने:
      नवेगावच्या सभोवती सह्याद्री पर्वतरांग असल्याने येथे स्थानिक देवतांची उपासना आजही धार्मिक आणि सांस्कृतिक केंद्र आहे.<br />
      गावात साधारणपणे (स्थानिक चौकश्यांनुसार) पुढील प्रकारचे देवस्थाने आढळतात:<br />
      🔸 ग्रामदेवता<br />
      • मराठी गावांप्रमाणे ग्रामदेवता (उदा. मारुती, भैरवनाथ, कालभैरव, खंडोबा, जोगेश्वरी, जाखाबाई) यांचे मंदिर असणे सामान्य.<br />
      • यात्रांच्या काळात गावात भजने, ओव्या, गोंधळ, कीर्तन यांचे आयोजन होते.<br />

      🔸 कुळदेवता<br />
      • गावातील वेगवेगळ्या कुटुंबांच्या स्वतंत्र कुळदेवतांच्या पूजा चालतात.<br />
      • श्रावण, चैत्र, आषाढ या महिन्यांत पूजा–सोहळे जास्त आढळतात.<br />
<br />

      3) सण–उत्सव (Festivals & Rituals)<br />
       बागलाण क्षेत्राचे सांस्कृतिक जीवन खूप समृद्ध आहे. नवेगावमध्येही हेच सण मोठ्या उत्साहात साजरे केले जातात:<br />
      🌟 मुख्य सण<br />
      • गुढीपाडवा-गावातील पारंपरिक नवीन वर्ष.<br />
      • होळी/रंगपंचमी-विशेषतः ग्रामीण भागात अतिशय उत्साह.<br />
      • आषाढी एकादशी-वारकरी परंपरा; टाळ–मृदंग, अभंग.<br />
      • नवरात्र-जगर दिंडी, देवीची पूजा, भजनी मंडळे.<br />
      • दसरा-सोने/आपटी पाने देणे.<br />
      • मकर संक्रांत-हळदी–कुंकू, तिळगूळ.<br />
      • दीपावली-ग्रामीण भागात भाऊबीजला विशेष महत्त्व.<br />
      🌾 शेतीसंबंधित सण<br />
      • पोळा-बैलांची पूजा, साग्रसंगीत मिरवणूक.<br />
      • नागपंचमी-शेतातील नागदेवीची पूजा.<br />
      • वर्षा-संक्रांत / कडधान्य सण-पावसाचे स्वागत.<br />
<br />
      4) लोककला, संगीत आणि सांस्कृतिक कार्यक्रम:<br />
      • गावात कीर्तन, भारुड, भजन यांची परंपरा मजबूत आहे.<br />
      • पावसाळ्यात आणि श्रावणात झिम्मा, फुगडी खेळला जातो.<br />
      • ढोल–ताशा, लेझीम, हलगी या वाद्यांचा वापर धार्मिक कार्यक्रमांत जास्त.<br />
      • वारकरी संप्रदायाचा प्रभाव बागलाण भागात मोठा — अभंग, ओवी, गवळण गाण्यांची परंपरा.<br />
      • शाळांमध्ये प्रजासत्ताक दिन, स्वातंत्र्य दिन यांसारखे सांस्कृतिक कार्यक्रम.<br />
<br />
      5) शेतीसंबंधित पारंपरिक जीवन:<br />
      नवेगावचा सांस्कृतिक पाया म्हणजे शेती.<br />
      • पारंपरिक पिके: ज्वारी, बाजरी, मका, कडधान्ये, आणि काही भागात कांदा/द्राक्ष/नारळ.<br />
      • शेतातील कामांबरोबर समूहाने एकत्र काम करण्याची संस्कृती अजून टिकून आहे.<br />
      • ओढा, विहिरी, नाला-बांध बांधणी या गाव पातळीवरील सामूहिक उपक्रम.<br />
<br />
      6) खाद्यसंस्कृती:<br />
      बागलाण व नाशिक जिल्ह्याची ग्रामीण खाद्यसंस्कृती साधी पण पौष्टिक:<br />
      • भाकरी:ज्वारी/बाजरी/नाचणी.<br />
      • भाजी:पिठलं, ठेचा, गावठी वांगी, शेवगा, उकडलेली कडधान्ये.<br />
      • मांसाहारी पदार्थ: पायाचे सूप, गावठी चिकन, मटण रस्सा.<br />
      • सणावार: पुरणपोळी, मोदक, खीर.<br />
      • हिवाळ्यात: हरभऱ्याची डाळ-हळद दूध, बाजरीची भाकरी + लसणाची चटणी.<br />
<br />
      7) सामाजिक परंपरा व लोकरीती:<br />
      • लग्नसमारंभांमध्ये हलगी–लेझीम, ढोल, पारंपरिक आरत्या.<br />
      • गावातील घरांमध्ये कथा–कहाण्या, ओव्या सांगण्याची परंपरा.<br />
      • पाणी, वीज, रस्ते, शाळा अशा विकासकामांवर गावसभा आयोजित होतात — हा ग्रामस्वराज्यातील महत्त्वाचा भाग.<br />
      • सहकार, जलसंधारण, शेती सुधार यांसारखे ग्रामीण समाजरचना केंद्रस्थानी मुद्दे.<br />
<br />
      8) लोककथा / भूगोलाशी निगडित परंपरा:<br />
      बागलाण क्षेत्रात Salher-Mulher किल्ल्यांचा प्रभाव एवढा मोठा आहे की त्याच्याशी जोडलेल्या अनेक मौखिक कथा नवेगावसारख्या आसपासच्या गावात सांगितल्या जातात:<br />
      • शिवाजी महाराजांच्या मोहिमांशी जोडलेल्या लढाया.<br />
      • स्थानिक देवस्थानांकडून गावाचे रक्षण.<br />
      • शेती, पाणी आणि पावसाबाबतच्या लोककथा.<br />
      हे साहित्य अजूनही काकाजी/आजी–आजोबा यांच्या तोंडी परंपरेत टिकून आहे.<br />`,
    }
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row bg-gray-200 px-10 gap-5 py-10 md:h-[550px] justify-center'>
        <h1 className='text-black font-bold text-4xl self-center hidden md:flex' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram <br />Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <h1 className='text-black font-bold text-4xl self-center flex md:hidden text-center' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <div className='flex-col self-center'>
          {tabs.map((tab,idx) => (
            <div
            key={tab.key}
            onClick={() => setField(tab.key)}
            className={tabClass(field === tab.key, idx === 0)}
            >
              {language === "en" ? tab.en : tab.mr}
            </div>
          ))}
        </div>

        <div className='flex max-w-[760px] flex-col bg-white rounded-2xl p-5 w-full mt-4 md:mt-0 max-h-[80vh] overflow-y-auto'>
          <h1 className='font-bold text-[18px]'>{language === "en" ? details[field].title : details[field].mr_title}</h1>
          <hr />
          <div className='mt-4' dangerouslySetInnerHTML={{ __html: (language === "en") ? details[field]?.details : details[field]?.mr_details }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
