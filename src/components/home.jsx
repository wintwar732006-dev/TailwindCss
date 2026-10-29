import Watch from '../../public/watch.png';
import Bag from '../../public/bag.png';
import Copy from '../../public/copy.png';
import { useState } from 'react';
import Mi from '../../public/mi.jpg';

const ExampleText = [
    {
        "title" : "Flexbox Layout",
        "pargarph" : "Used for 1-dimensional positioning (Header badge row, price & button distribution) with display: flex; justify-content: space-between;.",
        "color" : "blue-600"
    },

    {
        "title" : "Micro-Hover Effects",
        "pargarph" : "Combine transform: translateY(-6px) with smooth bezier timing to create tactile, floating depth without jarring shifts.",
        "color" : "purple-600"
    },

    {
        "title" : "Responsive Images",
        "pargarph" : "Prevent layout shifts using modern aspect-ratio: 4/3; along with object-fit: cover; so photos never stretch.",
        "color" : "green-600"
    },

    {
        "title" : "Modern Shadows",
        "pargarph" : "Natural depth is created with soft colored shadows using low opacity: box-shadow: 0 20px 25px -5px rgba(...).",
        "color" : "orange-600"
    }
]

const shadowOptions = {
  None: "none",
  Soft: "0 4px 12px rgba(0, 0, 0, 0.15)",
  Medium: "0 8px 24px rgba(0, 0, 0, 0.25)",
  Strong: "0 12px 32px rgba(0, 0, 0, 0.4)",
};

const backgroundOptions = {
  Dark: "#111827",
  Coffee: "#6F4E37",
  Blue: "#1e3a8a",
  Purple: "#581c87",
};

const Experience = [
    {
        "title" : "PROJECTS",
        "count" : "24+",
        "line" : true
    },

    {
        "title" : "FOLLOWERS",
        "count" : "1.2k",
        "line" : true
    },

    {
        "title" : "SCORE",
        "count" : "99%",
        "line" : false
    }
]

const ExampleHTMLText = `
<!-- Modern Product Card Component -->
<article class="product-card">
  <!-- Media Container with Badges -->
  <div class="card-media">
    <img src="smartwatch.jpg" alt="Aura Horizon X Watch" class="card-img" />
    <span class="badge badge-primary">⚡ New Release</span>
    <button class="wishlist-btn" aria-label="Add to wishlist">♥</button>
  </div>

  <!-- Content Section -->
  <div class="card-body">
    <div class="card-meta">
      <span class="category">Wearables • Pro Edition</span>
      <div class="rating">★ 4.9 <small>(128)</small></div>
    </div>

    <h3 class="card-title">Aura Horizon X Watch</h3>
    <p class="card-description">
      Titanium ceramic chassis with bio-tracking metrics & 7-day battery life.
    </p>

    <!-- Pricing and Call to Action -->
    <div class="card-footer">
      <div class="price-box">
        <span class="price-label">Price</span>
        <div class="prices">
          <span class="current-price">$289</span>
          <span class="original-price">$349</span>
        </div>
      </div>
      <button class="btn-primary">Add to Bag</button>
    </div>
  </div>
</article>
`;

let footerText = "Tip: Clean, accessible semantic elements ( <article>, <figure> ) UTF-8 • Standard CSS3";

export default function Home ({element}){

    const [borderRadius, setBorderRadius] = useState(24);
    const [shadow, setShadow] = useState("Medium");
    const [background, setBackground] = useState("Dark");

    const handleRadius = (e) => {
        setBorderRadius(Number(e.target.value))
    }

    return (
        <div className="w-full">
            <section className="flex flex-wrap justify-center items-start pt-10 pb-10 gap-3 p-10">
                <div className='flex flex-col gap-3'>
                    <div 
                    className="border items-center flex flex-col border-[#fff]/20 h-140 w-130 rounded-3xl p-3 pl-10 pr-10 bg-[linear-gradient(135deg,#081329_0%,#0B1020_55%,#1B1538_100%)]">
                        <header className="flex w-full border-b border-[#fff]/20 h-15 items-center justify-between pl-3 pr-3 text-[#fff]/60 font-[Valley] text-[12px]">
                            <h3>Live Component View</h3>
                            <span className="pl-4 pr-4 pt-0.5 pb-0.5 bg-[#1e293b] rounded-md">Target Card</span>
                        </header>

                        {
                           element === "Product" ? (
                                <div 
                                style={{ borderRadius: `${borderRadius}px`, boxShadow: shadowOptions[shadow], background: backgroundOptions[background]}}
                                className="border border-[#fff]/20 mt-5 w-80 h-100 overflow-hidden backdrop-blur-xl hover:scale-[1.03] transition duration-200">
                                    <div 
                                    style={{ backgroundImage: `url(${Watch})`}}
                                    className="h-[50%] w-full bg-cover bg-center">
                                    </div>

                                    <div className='h-[30%] font-[Valley] m-3 border-b border-[#fff]/20'>
                                        <span className='text-blue-400 text-[12px]'>WEARABLES · PRO EDITION</span>

                                        <h3 className='mt-3 text-[17px] text-[#fff]'>Aura HorizonX Watch</h3>
                                        <p className='text-[11px] text-[#fff]/60'>Titanium ceramic chassis with bio-tracking metrics & 7-day battery life.</p>
                                    </div>

                                    <div className='h-[20%] pl-3 flex justify-between pr-3'>
                                        <div className='flex flex-col h-full'>
                                            <h3 className='font-[Valley] text-[#fff] text-[12px] text-[#fff]/60'>PRICE</h3>
                                            <div className='flex gap-1 items-center w-fit h-7'>
                                                <span className='text-[16px] font-bold font-[Valley] text-[#fff]'>$289</span>
                                                <span className='text-[13px] text-[#fff]/60 line-through'>$389</span>
                                            </div>
                                        </div>

                                        <div className='pt-3'>
                                            <button className='pt-0.5 pb-0.5 text-[11px] pl-3 pr-3 bg-blue-600 text-[#fff] rounded-md font-[Valley]'>Add To Bag</button>
                                        </div>
                                    </div>
                                </div>
                           ) : (
                                <div 
                                style={{ borderRadius: `${borderRadius}px`, boxShadow: shadowOptions[shadow], background: backgroundOptions[background]}}
                                className="border border-[#fff]/20 mt-5 w-80 h-100 overflow-hidden backdrop-blur-xl hover:scale-[1.03] transition duration-200 relative">
                                    <div className='h-[25%] bg-[linear-gradient(110deg,#7938EB_0%,#593FEA_48%,#347FF5_100%)] flex justify-end items-start p-3'>
                                        <span className='text-green-400 pl-4 pr-4 pt-0.5 pb-0.5 rounded-3xl font-[Valley] text-[11px] bg-[#254992]'>Available</span>
                                    </div>
                                    <div className='justify-center flex absolute w-full top-[15%]'>
                                        <div style={{backgroundImage: `url(${Mi})`}} className='border-3 border-[#0f172a] overflow-hidden w-20 h-20 rounded-[50%] bg-cover bg-center'></div>
                                    </div>

                                    <h3 className='mt-13 text-[#fff] font-[Valley] text-[15px] w-full flex justify-center items-center'>Hsu Wint War Htet</h3>
                                    <span className='text-blue-400 text-[12px] font-[Valley] flex w-full justify-center'>Junior UI/UX & Frontend Developer</span>

                                    <p className='font-[Valley] text-[#fff]/60 text-[12px] w-full text-center mt-2'>Crafting responsive web designs, interactive design systems, and frontend experiences.</p>

                                    <div className='flex bg-[#151e31] ml-5 mr-5 pt-3 pb-3 mt-3 justify-between rounded-xl mt-5'>
                                        {
                                            Experience.map((element, index) => {
                                                return (
                                                    <li key={index} className={`list-none w-[35%] flex flex-col items-center ${element.line === true ? "border-r border-[#fff]/20" : ""}`}>
                                                        <span className='text-[#fff] font-[Valley] text-[15px]'>{element.count}</span>
                                                        <h3 className='text-[#fff]/60 text-[8px] font-[Valley]'>{element.title}</h3>
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='flex justify-start pl-5 mt-3 gap-3'>
                                        <button className='bg-[#3f75f2] h-10 w-[75%] rounded-xl text-[13px] font-[Valley] text-[#fff]'>Follow +</button>
                                        <button className='w-10 h-10 bg-[#151e31] rounded-xl'></button>
                                    </div>
                                </div>
                           )
                        }
                    </div>

                    <div className='border border-[#fff]/20 h-37 rounded-3xl bg-[#0c1326]'>
                        <header className='flex text-[13px] font-[Valley] justify-between pl-3 pr-3 h-10 items-center'>
                            <h3 className='text-[#fff]'>Interactive CSS Property Sandbox</h3>
                            <span className='text-[#fff]/60'>Tweak & see live results</span>
                        </header>

                        <div className='flex gap-1 pl-2.5 pr-2.5 justify-center mt-3'>
                            <div className='w-[30%] p-2 flex flex-col gap-2 justify-between'>
                                <div className='flex justify-between font-[Valley] text-[11px]'>
                                    <h3 className='text-[#fff]/60'>border-radius</h3>
                                    <span className='text-blue-400'>{borderRadius}px</span>
                                </div>
                                <input onChange={(e) => handleRadius(e)} type="range" className='w-full'/>
                            </div>

                            <div className='w-[30%] p-2 flex flex-col gap-2 justify-between'>
                                <div className='flex justify-between font-[Valley] text-[11px]'>
                                    <h3 className='text-[#fff]/60'>box-shadow</h3>
                                    <span className='text-blue-400'>{shadow}</span>
                                </div>
                                <select value={shadow} onChange={(e) => setShadow(e.target.value)} className='bg-[#fff] pl-2 text-[13px] h-7 rounded-md font-[Valley] bg-gray-600 text-[#fff]'>
                                    <option value="None">None</option>
                                    <option value="Soft">Soft</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Strong">Strog</option>
                                </select>
                            </div>
                            
                            <div className='w-[30%] p-2 flex flex-col gap-2 justify-between'>
                                <div className='flex justify-between font-[Valley] text-[11px]'>
                                    <h3 className='text-[#fff]/60'>background</h3>
                                    <span className='text-blue-400'>{background}</span>
                                </div>
                                <select value={background} onChange={(e) => setBackground(e.target.value)} className='bg-[#fff] pl-2 text-[13px] font-[Valley] h-7 rounded-md bg-gray-600 text-[#fff]'>
                                    <option value="Dark">None</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Coffee">Coffee</option>
                                    <option value="Blue">Blue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='w-130 border border-[#fff]/20 h-110 rounded-3xl pt-3 flex flex-col justify-between overflow-hidden'>
                        <header className='w-full border-b border-[#fff]/20 h-13 justify-end flex pr-3 items-center'>
                            <span className='text-[#fff]/80 bg-[#1e293b] pl-3 pr-3 pt-1 pb-1 font-[Valley] text-[13px] rounded-md cursor-pointer flex items-center gap-1'><img src={Copy} className='w-3.5 h-3.5'/>Copy Code</span>
                        </header>

                        <div className="main-text-container h-84 overflow-auto p-4">
                            <pre className="whitespace-pre font-mono text-[13px] leading-6 text-blue-100">
                                <code>{ExampleHTMLText}</code>
                            </pre>
                        </div>

                        <footer className='border-t border-[#fff]/20 h-13 pl-3 pr-3 flex justify-center items-center'>
                            <span className='text-[#fff]/60 font-[Valley] text-[11px]'>
                                {footerText}
                            </span>
                        </footer>
                    </div>

                    <div className='w-130 h-60 flex flex-wrap gap-3 justify-center'>
                        {
                            ExampleText.map((element, index) => {
                                return (
                                    <li key={index} className='list-none text-[#fff] w-63 rounded-xl p-3 bg-[#0c1326] font-[Valley] border border-[#fff]/20'>
                                        <h3 className='text-[14px]'>{element.title}</h3>
                                        <p className='text-[12px] mt-2 text-[#fff]/60'>{element.pargarph}</p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}