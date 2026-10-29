 import './index.css'

export default function Home() {
  return (
    <div className="bg-main-bg">

      <nav   className="flex justify-between bg-opacity-9 bg-[#10182B] h-17  w-full items-center">
      <div className="flex justify-center items-center">
            <img src="./headlogo.png" className="w-10 h-10 m-3 mr-0"></img>
            <h1 className="font-bold text-white ml-1">UIPlayground</h1>
            <p className="bg-[#1B2947] border-[#60A5FA] text-[#60A5FA] font-bold border rounded-xl text-[0.65em] px-2 py-0.9 mx-2 ">HTML & CSS</p>
          </div>

          <div className="flex justify-center  mx-3 ">

           <div className="flex  items-center bg-[#1D2839] w-full px-1 rounded-xl my-3 mx-5 justify-center border border-border gap-3">
           <div className="flex gap-1 justify-center items-center w-full rounded-xl bg-[#2563EB]  mr-2 left-0 px-2 py-2 my-1" >
            <img src="./shopping.png" className="bg-[#2563EB] w-3 h-3 "></img>
            <p className='font-medium text-white text-[0.8rem]'>Product</p>
            </div>

            <div className="flex justify-center items-center gap-1">
              <img src="./creator.png" className="bg-[#1D2839] w-3 h-3">
            </img>
            <p className="font-medium text-white text-[0.8rem] mr-4">Creator</p>
            </div>
           </div>

           <div className="flex justify-center border border-border my-3 px-3 rounded-2xl bg-[#1D2839]">
            <button><img src="./restart.png" className="w-5 h-4 border border-border "></img></button>
           </div>


          </div>
      </nav>


<div className="grid grid-cols-1 md:grid-cols-2 ">

  <div class="halfClock">
    <div className="border border-border m-5 rounded-3xl p-6  bg-card-bg">

    <div class='flex justify-between items-center'>
      <div>
   <span className="w-5 h-5 rounded-2xl bg-black "></span>
   <p className="font-medium text-[0.8rem] text-[#7e88a7]">Live Component View</p>
      </div>

      <div className>
        <p className="font-mono text-[0.8rem] font-medium text-[#7e88a7] rounded-xl  px-3 py-1 bg-[#1e293b] justify-center items-center flex border border-border">Target Card</p>
      </div>
    </div>
    <hr className="mt-6 text-border/70 w-ful mr-3"/>

    <div class="px-25 h-[80%]">
     
     <div className=" relative">
       <img src="./watch.png" alt="watch picture" className=" object-cover mt-6  rounded-4xl"></img>
      <div className="flex justify-between">
        <div className="bg-[#2563eb] w-10 flex justify-start items-start">
        <h4 className="absolute top-3 bg-[#2563eb] font-bold  text-white text-[0.8rem] rounded-xl px-3 py-1 ml-4">NEW RELEASE</h4>
        </div>

        <img src="./heart.png " alt="heart icon" className="absolute top-3  right-30 w-5 h-5 bg-[#666666] rounded-3xl "/>
      </div>
     </div>

     <div className="border border-border ">
      
      <div>
        <p>WEARABLES PRO EDITION</p>
      <p>4.9(128)</p>
      </div>

      <div>
        <h2>Aura Horizon X Watch</h2>
        <p>Titanium ceramic chassis with bio-tracking metrics & 7-day battery life.</p>
      </div> <hr></hr>

      <div>
        <div>
          <p>PRICE</p>
        <h3>$289</h3><p>$349</p>
        </div>

        <div>
          <img src=""></img>
          <p>Add to Bag</p>
        </div>
      </div>
     </div>

    </div>

    </div>

    <div className="border border-[#000000] m-5 p-5 rounded-2xl " >
    <div>

      <div><img src="./adjust.png" alt="adjust icon"  className="w-3 h-3"></img>
      <p>Interactive CSS Property Sandbox</p>
      </div>

      <div> 
        <p>Tweak & See live results</p>
      </div>

    </div>

    <div>
      <div>
        <label>border-radius</label>
        <p>Px</p>
      </div>
      <div>
        <input type="range" className="w-full"></input>
      </div>
    </div>

     <div>
      <div>
        <label>box-shadow</label>
        <p>Medium eg.</p>
      </div>
      <select className="w-full">
        <option>None (0px)</option>
        <option>Soft Subtle</option>
        <optoin>Floating Drop Shadow</optoin>
        <option>Neon Color Glow</option>
      </select>
     </div>

     <div>
      <div>
        <label>background-mod</label>
        <p>Dark Slate eg.</p>
      </div>
      <select className="w-full">
        <option>Deep Dark Slate</option>
        <option>Glassmorphism(Frosted)</option>
        <option>Clean Light Theme</option>
      </select>
     </div>

    </div>

  </div>

  <div class="halfCode">
      
      <div>

        <div className="border border-[#1e293b] p-5 m-5 rounded-xl">
  <div>

    <div>

      <div>
        <img src="./HTML.png" alt="HTML icon" className="w-3 h-3"></img>
      <p>HTML</p>
      </div>
      <div>
        <img src="./css.png" alt="CSS icon" className="w-3 h-3"></img>
        <p>CSS(Vanilla)</p>
      </div>
      <div>
        <img src="./tailWind.png" alt="Tailwind CSS icon" className="w-3 h-3"/>    
        <p>Tailwind Classes</p>
      </div>

      <div>
        <img src="./copy.png" alt="copy icon" className="w-3 h-3"></img>
        <p>Copy Code</p>
      </div>

    </div>

    <div className="w-fill h-[80%]">  
      <p className="w-fill h-[80%]"></p>        </div>

    <div>
      <img src="./i.png" alt="to note" className="w-3 h-3"/>
      <p>Tip: Clean, accessible semantic elements ( article, figure )</p>
      <p>UTF-8  Standard CSS3</p>
    </div>

  </div>
  

        </div>

       <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">

        <div className="border border-[#1e293b] m-5 p-5 rounded-xl"> 
  <div>
    <img src="./expand.png" alt="expand icon" className="w-3 h-3"/>
  <h4>Flexbox Layout</h4>
  </div>
    <div>
      <p>Used for 1-dimensional positioning(Header badge roe, price & button distribution) with 
        <p>display: flex; justify-content: space-between;.</p>
      </p>
    </div>
        </div>

        <div  className="border border-[#1e293b] m-5 p-5 rounded-xl"> 
  <div>
    <img src="./magic.png" alt="magic icon" className="w-3 h-3"/>
  <h4>Micro-Hover Effects</h4>
  </div>
    <div>
      <p>Combing <p>transofrm: translateY(-6px)</p>  with smooth bezier timing
      to create tactile, floating dapth without jarring shifts.</p>
    </div>
        </div>


      <div  className="border border-[#1e293b] m-5 p-5 rounded-xl"> 
  <div>
    <img src="./photo.png" alt="photo icon" className="w-3 h-3"/>
  <h4>Responsive Images</h4>
  </div>
    <div>
      <p>Prevent layout shifts using modern <p>aspect-ratio: 4/3; </p> along with <p>object-fit: cover; </p> so 
      photos never stretch</p>
    </div>
        </div>


        <div  className="border border-[#1e293b] m-5 p-5 rounded-xl"> 
  <div>
    <img src="./layer.png" alt="layer icon" className="w-3 h-3"/>
  <h4> Modern Shadows</h4>
  </div>
    <div>
      <p>Natural depth is created with soft colored shadows using low opacity:
        <p>box-shadow: 0 20px 25px -5px rgba(...)</p>
      </p>
    </div>
        </div>

      




      





       </div>
      </div>

  </div>

</div>
    </div>
  )} 