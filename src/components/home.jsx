import Watch from '../../public/watch.png';
import Bag from '../../public/bag.png';
import Copy from '../../public/copy.png';

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

let footerText = "Tip: Clean, accessible semantic elements ( <article>, <figure> ) UTF-8 • Standard CSS3";

export default function Home (){
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

                        <div className="border border-[#fff]/20 mt-5 w-70 h-100 rounded-3xl overflow-hidden backdrop-blur-xl">
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
                                    <span className='text-blue-400'>00px</span>
                                </div>
                                <input type="range" className='w-full'/>
                            </div>

                            <div className='w-[30%] p-2 flex flex-col gap-2 justify-between'>
                                <div className='flex justify-between font-[Valley] text-[11px]'>
                                    <h3 className='text-[#fff]/60'>box-shadow</h3>
                                    <span className='text-blue-400'>None</span>
                                </div>
                                <select className='bg-[#fff] pl-2 text-[13px] h-7 rounded-md font-[Valley] bg-gray-600 text-[#fff]'>
                                    <option value="">None</option>
                                    <option value="">Small</option>
                                    <option value="">Medium</option>
                                    <option value="">Extra Large</option>
                                </select>
                            </div>
                            
                            <div className='w-[30%] p-2 flex flex-col gap-2 justify-between'>
                                <div className='flex justify-between font-[Valley] text-[11px]'>
                                    <h3 className='text-[#fff]/60'>background</h3>
                                    <span className='text-blue-400'>None</span>
                                </div>
                                <select className='bg-[#fff] pl-2 text-[13px] font-[Valley] h-7 rounded-md bg-gray-600 text-[#fff]'>
                                    <option value="">None</option>
                                    <option value="">Dark</option>
                                    <option value="">White</option>
                                    <option value="">Blue</option>
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

                        <div className='main-text-container h-84 overflow-y-auto text-[#fff]/60'>
                            
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