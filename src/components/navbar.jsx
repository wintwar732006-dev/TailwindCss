import Logo from '../../public/logo.png';
import Reset from '../../public/reset.png';
import Product from '../../public/bag.png';
import User from '../../public/user.png';
import { useState } from 'react';

export default function Navbar({element, setElement}) {

    return (
        <div className='w-full sticky z-50 top-0 h-20 flex justify-center border-b border-[#fff]/20 backdrop-blur-lg'>
            <nav className="w-320 pl-3 pr-3 flex items-center justify-between">
                <div className='h-full flex items-center'>
                    <div className='w-15 h-15 overflow-hidden bg-center rounded-xl'>
                        <img src={Logo} className='w-15'/>
                    </div>
                    
                    <div className='pl-3 pr-3 text-[#fff] font-[Valley]'>
                        <div className='flex items-center gap-3'>
                            <h3  className='text-[17px] font-bold'>UI Playground</h3>
                            <span className='text-[12px] pl-3 pr-3 pt-0.5 pb-0.5 border border-[#1e3c73] rounded-3xl bg-[#111e3c] text-[#60a5fa]'>HTML & CSS</span>
                        </div>
                        <span className='text-[13px] text-[#fff]/60'>Learn layout, modern cards, hover animations & styling</span>
                    </div>
                </div>

                <div className='flex items-center h-full gap-2'>
                    <div className='flex pl-2 pr-2 pt-2  font-[Valley] pb-2 bg-[#1a2537] p-1 text-[#fff]/60 rounded-xl text-[13px]'>
                        <button onClick={() => setElement("Product")} className={`text-[#fff] pl-3 pr-3 pt-1 pb-1 rounded-md flex justify-center items-center gap-1 cursor-pointer transition duration-200 ${element === "Product" ? 'bg-blue-600' : ""}`}><img src={Product} className='w-4'/>Product</button>
                        <button onClick={() => setElement("Creator")} className={`pl-3 pr-3 pt-1 pb-1 rounded-md flex justify-center items-center gap-1 cursor-pointer transition duration-200 ${element === "Creator" ? 'bg-blue-600' : ""}`}><img src={User} className='w-4'/>Creator</button>
                    </div>

                    <button onClick={() => window.location.reload()} className='w-11 h-11 flex justify-center items-center bg-[#1a2537] rounded-xl cursor-pointer'><img src={Reset} className='w-4'/></button>
                </div>
            </nav>
        </div>
    )
}