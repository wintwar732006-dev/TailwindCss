import Watch from '../../public/watch.png';
import Bag from '../../public/bag.png';

export default function Home (){
    return (
        <div className="h-[200vh] w-full">
            <section className="flex flex-wrap justify-center items-start pt-10 pb-10 gap-3 p-10">
                <div 
                className="border items-center flex flex-col border-[#fff]/20 h-130 w-120 rounded-3xl p-3 pl-10 pr-10 bg-[linear-gradient(135deg,#081329_0%,#0B1020_55%,#1B1538_100%)]">
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
                                <button className='pt-0.5 pb-0.5 text-[13px] pl-3 pr-3 bg-blue-600 text-[#fff] rounded-md font-[Valley]'>Add To Bag</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-90 w-120 border border-[#fff]/20 rounded-3xl">

                </div>
            </section>
        </div>
    )
}