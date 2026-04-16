
import "./Home.css"
import { Link } from "react-router-dom";

const Phone = [
  {
    title: "₦ 143,300",
    description: 'Samsung Galaxy A06 6.7" 4GB RAM/128GB ROM Android 14 - Black',
    oldprice: "₦ 152,100",
    getImageSrc: () => require("../asset/samsung.jpg"),
  },
  {
    title: "₦ 158,421",
    description: 'Infinix Hot 60i 6.78" 4GB RAM/128GB ROM Android 15',
    oldprice: "₦ 212,442",
    getImageSrc: () => require("../asset/infinix hot 60i.jpg"),
  },
  {
    title: "₦ 560,200",
    description: 'Samsung Galaxy A56 6.7" 8GB RAM/128GB ROM - Grey',
    oldprice: "₦ 588,210",
    getImageSrc: () => require("../asset/samsung galaxy a56.jpg"),
  },
  {
    title: "₦ 397,404",
    description: "Tecno Camon 40 Pro 8GB/ 256GB Android 15 - Black",
    oldprice: "₦ 424,173",
    getImageSrc: () => require("../asset/Tecno camon 40 pro.jpg"),
  },
  {
    title: "₦ 1,038,200",
    description: 'Samsung Galaxy Z Fold 5 5G - 7.6" 256GB/12GB, 1Sim +E-Sim - Blue',
    oldprice: "₦ 1,130,000",
    getImageSrc: () => require("../asset/samsung galaxy Z fold 5.jpg"),
  },
  {
    title: "₦ 108,200",
    description: "itel A100 6.75'' 90hz Bright Display IP65 5000mah 15W T7250 Octa-core 128+3GB - Star Titanium",
    oldprice: "₦ 118,280",
    getImageSrc: () => require("../asset/itel A100.jpg"),
  },
  {
    title: "₦ 2,450,999",
    description: "Apple iPhone 17 Pro Max - 256GB - Cosmic Orange",
    oldprice: "₦ 5,101,998",
    getImageSrc: () => require("../asset/Apple iphone 17 Pro Max.jpg"),
  },
  {
    title: "₦ 212,000",
    description: 'XIAOMI Redmi Pad SE 4GB RAM/128GB ROM Android 13 WiFi Only - Gray',
    oldprice: "₦ 229,310",
    getImageSrc: () => require("../asset/XIAOMI Redmi Pad SE.jpg"),
  },
  {
    title: "₦ 30,950",
    description: 'Zealot B38 Wireless BT Headphones Over Ear Noise Canceling Headset',
    oldprice: "₦ 32,900",
    getImageSrc: () => require("../asset/Zealot headphone.jpg"),
  },
  {
    title: "₦ 15,990",
    description: 'itel 20000mAh Dual Output Fast Charging Power Bank',
    oldprice: "₦ 20,000",
    getImageSrc: () => require("../asset/itel power back.jpg"),
  },
  {
    title: "₦ 1,920,999",
    description: "Apple iPhone 16 Pro Max - 8GB - 256GB -5G - Desert Titanium",
    oldprice: "₦ 3,841,998",
    getImageSrc: () => require("../asset/Apple iphone 16 pro max.jpg"),
  },
  {
    title: "₦ 198,000",
    description: 'High Teck MacPad Air S25 Ultra 10.1" Incell 16GB RAM 1TB Storage 10,000mAh Bat Android 13 FREE Keyboard, Mouse & Stylus',
    oldprice: "₦ 178,000",
    getImageSrc: () => require("../asset/High Teck MacPad Air S25 Ultra.jpg"),
  },
  {
    title: "₦ 219,999",
    description: "XIAOMI Redmi 15 6.9'' 8GBRAM/256GB ROM Android 15 - Black",
    oldprice: "₦ 233,101",
    getImageSrc: () => require("../asset/XIAOMI Redmi 15.jpg"),
  },
  {
    title: "₦ 160,000",
    description: 'Atouch Realime Pad 55 Ultra 5G Tablet With Keyboard – 10.1" – 512GB ROM – 12GB RAM – SIM – 10000mAh – Grey',
    oldprice: "₦ 150,000",
    getImageSrc: () => require("../asset/Atouch Realime Pad 55 Ultra.jpg"),
  },
  {
    title: "₦ 1,393,124",
    description: "Apple Watch Ultra 2 GPS + Cellular 49mm Smartwatch, Sports Watch with Natural Rugged Titanium Case with Tan Alpine Loop - M. Fitness Tracker, Precision GPS, Extra-Long Battery Life,Carbon Neutral",
    oldprice: "₦ 1,434,917",
    getImageSrc: () => require("../asset/Apple Watch ultra 2.jpg"),
  },
];


const Appliances = [
  {
    title: "₦ 37,548",
    description: "Home Kitchen aid citrus Juicer with Strainer Stainless Stand mixer kitchen Fruits Blender",
    oldprice: "₦ 59,600",
    getImageSrc: () => require("../asset/juice mixer.jpg"),
  },
  {
    title: "₦ 113,999",
    description: 'Nexus 50 Litres Bedside Refrigerator (NX-65) - Silver',
    oldprice: "₦ 147,059",
    getImageSrc: () => require("../asset/nexus refigerator.jpg"),
  },
  {
    title: "₦ 18,044",
    description: '1.5L Food Grinder Blender with 300ml Grinder Cup - for Frozen Fruit, Ice Crushing, Meats & Diverse Foods',
    oldprice: "₦ 37,250",
    getImageSrc: () => require("../asset/Food grinder blender.jpg"),
  },
  {
    title: "₦ 17,294",
    description: "Boscon Auto Ignition Table Top Gas Cooker-2 Burner-Black BOS-GS012",
    oldprice: "₦ 19,023",
    getImageSrc: () => require("../asset/Table Top Gas Cooker-2.jpg"),
  },
  {
    title: "₦ 47,000",
    description: "SILVER CREST 8.0Liters Extra Large Capacity Airfryer-4500W",
    oldprice: "₦ 65,000",
    getImageSrc: () => require("../asset/Silver crest.jpg"),
  },
  {
    title: "₦ 147,000",
    description: 'Hisense 5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty',
    oldprice: "₦ 189,630",
    getImageSrc: () => require("../asset/Hisense washing machine.jpg"),
  },
  {
    title: "₦ 13,999",
    description: 'Binatone Binatone Smoother Gliding Steam Iron (SI-1605) - Blue + 2 Years Warranty.',
    oldprice: "₦ 18,059",
    getImageSrc: () => require("../asset/pressing iron.jpg"),
  },
  {
    title: "₦ 79,200",
    description: 'Hisense 20 Litres Microwave (H20MOWS14) - White With 1 Year Warranty',
    oldprice: "₦ 102,168",
    getImageSrc: () => require("../asset/microwave.jpg"),
  },
  {
    title: "₦ 6,124",
    description: 'Boscon 1.8 Liters Powerful Fast Heating Electric Jug Kettle',
    oldprice: "₦ 10,124",
    getImageSrc: () => require("../asset/Electric Jug Kettle.jpg"),
  },
  {
    title: "₦ 13,550",
    description: "Goldcrown Sandwich Maker (GC-SM002/3/4) + 12 Months Warranty GC-SM002/3/4",
    oldprice: "₦ 14,905",
    getImageSrc: () => require("../asset/Sandwich maker.jpg"),
  },
  {
    title: "₦ 104,430",
    description: "Sun King Solar Fan With 20W Solar Panel",
    oldprice: "₦ 135,700",
    getImageSrc: () => require("../asset/soler fan.jpg"),
  },
  {
    title: "₦ 303,200",
    description: "Nexus 1.5HP Split Air Conditioner (NX-MSSH12000SC TL) - White + Full Kit & 2 Years Warranty",
    oldprice: "₦ 391,128",
    getImageSrc: () => require("../asset/AC.jpg"),
  },
  {
    title: "₦ 462,000",
    description: 'Maxi 60cm x 90cm 5 Burner Gas Cooker, Ignition bottom , Oven Burner Up & Down (1 knob control) Oven Lamp - WOOD (F9E50G2)',
    oldprice: "₦ 595,980",
    getImageSrc: () => require("../asset/5 Burner Gas Cooker.jpg"),
  },
  {
    title: "₦ 283,848",
    description: 'Haier Thermocool 95 Litres Double Door Fridge Silver (HRF-95BEX) - Silver + 3 Years Warranty',
    oldprice: "₦ 366,164",
    getImageSrc: () => require("../asset/Double Door Fridge.jpg"),
  },
  {
    title: "₦ 50,050",
    description: "Binatone 18 Inch Standing Fan TS-1880 - Black (MK2) + 2 Years Warranty",
    oldprice: "₦ 64,565",
    getImageSrc: () => require("../asset/Standind fan.jpg"),
  },
]


const Fashoin = [
  {
    title: "₦ 393,124",
    description: 'DS Stone Iced Men"s Wristwatch Hand Chain',
    oldprice: "₦ 434,917",
    getImageSrc: () => require("../asset/DS stone.jpg"),
  },
  {
    title: "₦ 30,124",
    description: 'Classy bodycon Long Gown for unique ladies',
    oldprice: "₦ 40,124",
    getImageSrc: () => require("../asset/Classy bodycon.jpg"),
  },
  {
    title: "₦ 20,124",
    description: "ALagzi Men's Trendy Casual Sneakers - White",
    oldprice: "₦ 34,917",
    getImageSrc: () => require("../asset/Alagzi sneakers.jpg"),
  },
  {
    title: "₦ 5,124",
    description: "Dou-color Men's Long Sleeve Plaid Shirt - Black",
    oldprice: "₦ 8,124",
    getImageSrc: () => require("../asset/Long sleeve.jpg"),
  },
  {
    title: "₦ 12,124",
    description: 'Mateamoda Women Bags Backpacks Ladies Bags Handbags School Bags',
    oldprice: "₦ 34,917",
    getImageSrc: () => require("../asset/Mateamoda bags.jpg"),
  },
  {
    title: "₦ 4,986",
    description: 'Machislet New Slim-fit, Backless Dress With Hips Party Dress Casual Dress Off-Shoulder Dress',
    oldprice: "₦ 15,124",
    getImageSrc: () => require("../asset/Machislet new slim-fit.jpg"),
  },
  {
    title: "₦ 11,124",
    description: 'Women Gown For Ladies Dinner Dresses Female Office Classic Cooperate Sexy',
    oldprice: "₦ 16,917",
    getImageSrc: () => require("../asset/Wemen Gown.jpg"),
  },
  {
    title: "₦ 5,124",
    description: 'Angel Choices The Cowardly Dog Print Round Neck Smoky Blue Hoodie',
    oldprice: "₦ 22,124",
    getImageSrc: () => require("../asset/Angel Choices.jpg"),
  },
  {
    title: "₦ 11,124",
    description: "camiwind Fashion Girl's Red Heart Shirts And Shorts Set",
    oldprice: "₦ 20,917",
    getImageSrc: () => require("../asset/camiwind fashion.jpg"),
  },
  {
    title: "₦ 30,124",
    description: "Trendyol Nude Satin Women's Classic Heeled Shoes",
    oldprice: "₦ 40,124",
    getImageSrc: () => require("../asset/Trendyol nude.jpg"),
  },
  {
    title: "₦ 43,124",
    description: "Men's steel strap three small circle watch",
    oldprice: "₦ 34,917",
    getImageSrc: () => require("../asset/Men's watch.jpg"),
  },
  {
    title: "₦ 10,124",
    description: 'Catpapa Baby Boy One-Piece Short Sleeve Romper - Yellow',
    oldprice: "₦ 15,124",
    getImageSrc: () => require("../asset/Catpapa Baby.jpg"),
  },
  {
    title: "₦ 11,124",
    description: 'Oversize Joggers',
    oldprice: "₦ 14,917",
    getImageSrc: () => require("../asset/oversize joggers.jpg"),
  },
  {
    title: "₦ 29,124",
    description: "Men's 2 In 1 Stretch Regular Fit Jeans",
    oldprice: "₦ 30,634",
    getImageSrc: () => require("../asset/Men's jeans.jpg"),
  },
  {
    title: "₦ 6,624",
    description: "Dou-color Men's Casual Embroidered Polos T-shirt - Black",
    oldprice: "₦ 10,124",
    getImageSrc: () => require("../asset/Dou-color Men's Casual.jpg"),
  },
]

const Electronics = [
  {
    title: "₦ 229,000",
    description: 'Nexus 43 Inches FHD Frameless VIDAA Smart TV -(NX-TV43FHD624B) - Black',
    oldprice: "₦ 295,410",
    getImageSrc: () => require("../asset/Nexus 43 Inches smart tv.jpg"),
  },
  {
    title: "₦ 59,800",
    description: 'Tedber Spectra 500S Soundbar with Bass subwoofer 200W Hometheater System, Bluetooth 5.2, HDMI, Adaptive Audio, Smart Surround Sound, Smart Remote Control',
    oldprice: "₦ 109,500",
    getImageSrc: () => require("../asset/Tedber Spectra 500S Soundbar.jpg"),
  },
  {
    title: "₦ 439,999",
    description: "TCL 55 Inches UHD 4k Google Smart TV (55V6B) + 1 Year Warranty",
    oldprice: "₦ 550,000",
    getImageSrc: () => require("../asset/TCL 55 Inches tv.jpg"),
  },
  {
    title: "₦ 48,305",
    description: "T95Z Plus Android 12.0 Smart TV Box Allwinner H618 4GB+64GB",
    oldprice: "₦ 120,121",
    getImageSrc: () => require("../asset/T95Z Plus Android tv box.jpg"),
  },
  {
    title: "₦ 84,161",
    description: 'Tedber Bolan 900D Series.2.1 ch Surround Soundbar Home cinema with immersive Technology + BigSound Subwoofer and Upfiring inbuilt speakers',
    oldprice: "₦ 135,000",
    getImageSrc: () => require("../asset/Tedber Bolan 900D soundbar.jpg"),
  },
  {
    title: "₦ 3,490",
    description: 'DMarc Wall Bracket For TV / Television Shelf - 15-32-39-40-42- TV / WALL Hanger/bracket/ 0028',
    oldprice: "₦ 9,000",
    getImageSrc: () => require("../asset/DMarc Wall Bracket.jpg"),
  },
  {
    title: "₦ 469,990",
    description: 'LG CJ87 Mini HiFi System With Bluetooth',
    oldprice: "₦ 540,000",
    getImageSrc: () => require("../asset/LG CJ87 bluetooth.jpg"),
  },
  {
    title: "₦ 918,900",
    description: 'LG 65" Ai Smart UHD 4K Satellite TV+Netflix,Youtube,AppleAiplay',
    oldprice: "₦ 1,779,999",
    getImageSrc: () => require("../asset/LG 65''Ai Smart tv.jpg"),
  },
  {
    title: "₦ 219,999",
    description: "Royal 43' Inches Google Smart + Bluetooth TV (RTV43M10P) + 12 MONTHS WARRANTY",
    oldprice: "₦ 350,000",
    getImageSrc: () => require("../asset/Royal 43 Inches tv.jpg"),
  },
  {
    title: "₦ 282,999",
    description: "TCL 43' Inches QLED Google Smart TV - 2025 Edition + 12 MONTHS WARRANTY (43S5K)",
    oldprice: "₦ 327,816",
    getImageSrc: () => require("../asset/TCL 43 Inches tv.jpg"),
  },
  {
    title: "₦ 533,000",
    description: "Hisense 55' Inches UHD 4K SMART TV (55A6N /55A6Q) - Black + 1 Year Warranty",
    oldprice: "₦ 600,000",
    getImageSrc: () => require("../asset/Hisense 55 Inches tv.jpg"),
  },
  {
    title: "₦ 297,093",
    description: 'Mi+ (MiJ) 50” Digital Satellite FHD Smart LED TV – Android 14 OS (1G+8G), Bluetooth, HDR, HDMI x2, USB x2, Resolution: 1920*1080, + 12 MONTHS WARRANTY (MIJ- D5030A)',
    oldprice: "₦ 326,802",
    getImageSrc: () => require("../asset/Mi+ (MiJ) 50 tv.jpg"),
  },
  {
    title: "₦ 46,935",
    description: 'Wooden subwoofer, 36W, remote, Bluetooth ,AC/DC,USB,SD and AUX Home Theater Speaker System',
    oldprice: "₦ 147,510",
    getImageSrc: () => require("../asset/Wooden subwoofer.jpg"),
  },
  {
    title: "₦ 709,999",
    description: "TCL 65' Inches QLED Google Smart TV - Black + 1 Year Warranty 65P7K",
    oldprice: "₦ 850,000",
    getImageSrc: () => require("../asset/TCL 65 Inches.jpg"),
  },
  {
    title: "₦ 64,904",
    description: "Sound Bar Wooden Subwoofer Power Life Style Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI ,36W, remote, Home Theater Speaker System",
    oldprice: "₦ 178,800",
    getImageSrc: () => require("../asset/Sound Bar Wooden Subwoofer.jpg"),
  },
]



function Home () {
    return(
      <>
        <section>
          <div className="product-container-1">
            <div className="product-bar">
              <div><h4>Phone deals</h4></div>
              <div><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></div>
            </div>
            <div className="projects">
              {Phone.map((phone) => (
                <div className="card" key={phone.title}>
                  <img className="card-image" src={phone.getImageSrc()} alt={phone.description} />
                  <div className="card-body">
                    <p>{phone.description}</p>
                    <h5>{phone.title}</h5>
                    <h6 className="cabo-h5">{phone.oldprice}</h6>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="product-container-1">
            <div className="product-bar">
              <div><h4>Fashion deals</h4></div>
              <div><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></div>
            </div>
            <div className="projects">
              {Fashoin.map((Fashoin) => (
                <div className="card" key={Fashoin.title}>
                  <img className="card-image" src={Fashoin.getImageSrc()} alt={Fashoin.description} />
                  <div className="card-body">
                    <p>{Fashoin.description}</p>
                    <h5>{Fashoin.title}</h5>
                    <h6 className="cabo-h5">{Fashoin.oldprice}</h6>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="product-container-1">
            <div className="product-bar">
              <div><h4>Appliances deals</h4></div>
              <div><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></div>
            </div>
            <div className="projects">
              {Appliances.map((Appliances) => (
                <div className="card" key={Appliances.title}>
                  <img className="card-image" src={Appliances.getImageSrc()} alt={Appliances.description} />
                  <div className="card-body">
                    <p>{Appliances.description}</p>
                    <h5>{Appliances.title}</h5>
                    <h6 className="cabo-h5">{Appliances.oldprice}</h6>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="product-container-1">
            <div className="product-bar">
              <div><h4>Electronics deals</h4></div>
              <div><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></div>
            </div>
            <div className="projects">
              {Electronics.map((Electronics) => (
                <div className="card" key={Electronics.title}>
                  <img className="card-image" src={Electronics.getImageSrc()} alt={Electronics.description} />
                  <div className="card-body">
                    <p>{Electronics.description}</p>
                    <h5>{Electronics.title}</h5>
                    <h6 className="cabo-h5">{Electronics.oldprice}</h6>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="product-container-1">
            <div className="product-bar">
              <div><h4>Appliances deals</h4></div>
              <div><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></div>
            </div>
            <div className="projects">
              {Phone.map((Phone) => (
                <Link
                  key={Phone.id}
                  to={`/Phone/${Phone.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="card">
                    <img className="card-image" src={Phone.getImageSrc()} alt={Phone.description} width="200" />
                    <div className="card-body">
                      <p>{Phone.description}</p>
                      <h5>{Phone.title}</h5>
                      <h6 className="cabo-h5">{Phone.oldprice}</h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    )
}

export default Home