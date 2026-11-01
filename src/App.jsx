 import './index.css'
 import { useEffect } from 'react'; 
 import Watch from '../public/watch.png';
 import BgImage from '../public/bg.png';

export default function Home() {

      const productButton = document.getElementById('productButton'); 
      const creatorButton = document.getElementById('creatorButton'); 

      const handleToggle = () => {
        productButton.addEventListener("click", ())
      }

      useEffect(() => {


        
        const restart = document.getElementById('restart');
        const addBag = document.getElementById('addBag'); 
        const range = document.getElementById('range'); 
        const radiusText = document.getElementById('radiusText'); 
        const shadowSelect = document.getElementById('shadowSelect'); 
        const card = document.getElementById('card'); 
        const bgSelect = document.getElementById('bgSelect'); 
        const copy = document.getElementById('copy'); 
        const a289 = document.getElementById('289'); 
        const aura = document.getElementById('aura');
        const creatorCard = document.getElementById('creatorCard'); 
        const followBtn = document.getElementById('followBtn'); 
        const codeSnippet1 = document.getElementById('codeSnippet'); 
        const codeSnippet2 = document.getElementById('codeSnippet2'); 
        const pre1 = document.getElementById('pre1'); 
        const pre2 = document.getElementById('pre2'); 
        const profileCard = document.getElementById('profileCard'); 
        const name = document.getElementById('name'); 
        const bg =  document.getElementById('bg'); 
        const h = document.getElementById('h'); 
        const p = document.getElementById('p'); 
        const watchCard = document.getElementById('watchCard'); 
       
   // Button element များကို ဆွဲထုတ်ခြင်း

// Active နှင့် Inactive အတွက် class များ
const activeClasses = ["bg-blue-600", "text-white", "font-medium", "shadow"];
const inactiveClasses = ["text-gray-400", "hover:text-white"];

function setActiveTab(selectedBtn, otherBtn) {
  // နှိပ်လိုက်သည့် button ကို active class ထည့်ပြီး inactive class ဖယ်ထုတ်ခြင်း
  selectedBtn.classList.remove(...inactiveClasses);
  selectedBtn.classList.add(...activeClasses);

  // ကျန်သည့် button ကို inactive class ထည့်ပြီး active class ဖယ်ထုတ်ခြင်း
  otherBtn.classList.remove(...activeClasses);
  otherBtn.classList.add(...inactiveClasses);
}

       
        const sampleCode2 = `<!-- Modern Creator Profile Card -->
<article class="profile-card">
  <!-- Banner Backdrop -->
  <div class="banner">
    <span class="status-pill">Available for hire</span>
  </div>

  <!-- Profile Details -->
  <div class="profile-content">
    <div class="avatar-wrap">
      <img src="avatar.jpg" alt="Thura Aung" class="avatar-img" />
      <span class="verified-badge">✓</span>
    </div>

    <h3 class="profile-name">Thura Aung</h3>
    <p class="profile-role">Senior UI/UX & Creative Developer</p>
    <p class="profile-bio">
      Crafting responsive web designs, interactive design systems, and frontend experiences.
    </p>

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat"><span class="num">48+</span><span class="label">Projects</span></div>
      <div class="stat"><span class="num">14.2k</span><span class="label">Followers</span></div>
      <div class="stat"><span class="num">99%</span><span class="label">Score</span></div>
    </div>

    <!-- Actions -->
    <div class="action-row">
      <button class="btn-follow">Follow +</button>
      <button class="btn-icon" aria-label="Send message">✉</button>
    </div>
  </div>
</article>`; 

codeSnippet2.textContent = sampleCode2; 

        const sampleCode = `<!-- Modern Product Card Component -->
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
  </div>`; 

  codeSnippet1.textContent  = sampleCode; 

  // CopyCode Button Function
  copy.addEventListener("click", async() => {
    await navigator.clipboard.writeText(sampleCode); 
    copyBtn.textContent = "Copied!"; 
    setTimeout(() => {
      copyBtn.textContent = "Copy"; 
    }, 2000); 
  }); 
        
      //  creatorButton.addEventListener("click", () => {
      //   creatorCard.style.display = "block"; 
      //   card.style.display = "none"; 
      //   pre1.style.display = "none"; 
      //   pre2.style.display = "block"; 
        
      //  }); 
      //  productButton.addEventListener("click", () => {
      //   creatorCard.style.display = "none"; 
      //   card.style.display = "block"; 
      //    pre1.style.display = "block"; 
      //   pre2.style.display = "none"; 
      //  })

        let active = "product";
        // Track Toogle Button
        productButton.addEventListener("click", () => {
          active = "product";
          // console.log(active)

          creatorCard.style.display = "none";
          watchCard.style.display = "block";
        })
        creatorButton.addEventListener("click", () => {
          active = "creator";
          // console.log(active)
          if(active === "creator"){
            creatorCard.style.display = "block";
            watchCard.style.display = "none";
          }
        })
        

        function updateRadius(){
          const val = range.value; 
          radiusText.textContent = `${val}Px`; 
          
          if(watchCard) {
            console.log("I'm working")
          }
        };
        
        range.addEventListener("change", updateRadius); 
      
        // function updateRadius(){
        //     let val = range.value; 
        //     radiusText.textContent = `${val}Px`; 
        //     if(profileCard){
        //    profileCard.style.borderRadius = `${val}Px`; 
        // }; 
        // }; 

       



        function refresh(){
          window.location.reload(); 
        }; 


        restart.addEventListener("click", refresh); 

       
/*
      shadowSelect.addEventListener("change", (e) =>{
        const value = e.target.value; 
         if(value === "floating"){
          watchCard.style.boxShadow = "0 0 15px #1c1c1c59, 0 25px 25px #1c1c1c59"; 

         }
         else if(value === "soft"){
           watchCard.style.boxShadow = "0 0 3px #ffffff59, 0 3px 3px #ffffff59"; 
         }
          else if(value === "neon"){
                       watchCard.style.boxShadow = "0 0 10px #3b82f659, 0 15px 25px #1d4ed859";         
          }
          else if(value === "none"){
              watchCard.style.boxShadow = ""; 
          }
          shadowText.textContent = `${value}`; 
       }); 
      
       */

      //  function updateShadow1(){
      //   shadowSelect.addEventListener("change", (e) =>{
      //     const value = e.target.value; 
      //     if(value === "floating"){
      //       watchCard.style.boxShadow = "0 0 15px #1c1c1c59, 0 25px 25px #1c1c1c59";
      //     }
      //     else if(value === "soft"){
      //       watchCard.style.boxShadow = "0 0 3px #ffffff59, 0 3px 3px #ffffff59";
      //     }
      //     else if(value === "neon"){
      //       watchCard.style.boxShadow = "0 0 10px #3b82f659, 0 15px 25px #1d4ed859";
      //     }
      //     else if(value === "none"){
      //       watchCard.style.boxShadow = "";
      //     }
      //     shadowText.textContent = `${value}`;
      //   })
      //  }; 
      //  updateShadow1();
  
      //  /*
      //  shadowSelect.addEventListener("change", (e) =>{
      //   const value = e.target.value; 
      //    if(value === "floating"){
      //     profileCard.style.boxShadow = "0 0 15px #1c1c1c59, 0 25px 25px #1c1c1c59"; 
          

      //    }
      //    else if(value === "soft"){
      //      profileCard.style.boxShadow = "0 0 3px #ffffff59, 0 3px 3px #ffffff59"; 
      //    }
      //     else if(value === "neon"){
      //       profileCard.style.boxShadow = "0 0 10px #3b82f659, 0 15px 25px #1d4ed859";         
      //     }
      //     else if(value === "none"){
      //         profileCard.style.boxShadow = ""; 
      //     }
      //     shadowText.textContent = `${value}`; 
      //  }); 

      //  */

      //   function updateShadow2(){
      //   shadowSelect.addEventListener("change", (e) =>{
      //     const value = e.target.value; 
      //     if(value === "floating"){
      //       profileCard.style.boxShadow = "0 0 15px #1c1c1c59, 0 25px 25px #1c1c1c59";
      //     }
      //     else if(value === "soft"){
      //       profileCard.style.boxShadow = "0 0 3px #ffffff59, 0 3px 3px #ffffff59";
      //     }
      //     else if(value === "neon"){
      //       profileCard.style.boxShadow = "0 0 10px #3b82f659, 0 15px 25px #1d4ed859";
      //     }
      //     else if(value === "none"){
      //       profileCard.style.boxShadow = "";
      //     }
      //     shadowText.textContent = `${value}`;
      //   })
      //  }; 
      //  updateShadow2();

       /*
       bgSelect.addEventListener("change", (e) => {
        const value = e.target.value; 
        if(value ==="Dark" ){
          profileCard.style.backgroundColor = "linear-gradient(180deg, #0b1329 0%, #060913 100% )"; 
        }
        else if(value === "Light"){
          profileCard.style.backgroundColor = "#ffffff"; 
          name.style.color = "darkBlue";
          name.style.fontWeight = "bold";  
          bg.style.backgroundColor = "#efefef"; 
        }
        else{
          profileCard.style.backgroundColor = "#0f172a"; 
          a289.style.color = "white"; 
          aura.style.color = "white"; 
        }
                bgText.textContent = `${value}`;
       });
*/
// function themeUpdate2(){
//   bgSelect.addEventListener("change", (e) => {
//     const value = e.target.value; 
//     if(value ==="Dark" ){
//       profileCard.style.backgroundColor = "black";
//     }
//     else if(value === "Light"){
//       profileCard.style.backgroundColor = "#ffffff"; 
//       name.style.color = "darkBlue";
//       name.style.fontWeight = "bold";  
//       bg.style.backgroundColor = "#efefef"; 
//     }
//     else{
//       profileCard.style.backgroundColor = "#0f172a"; 
//       a289.style.color = "white"; 
//       aura.style.color = "white"; 
//     }
//             bgText.textContent = `${value}`;
//   })
// }; 
// themeUpdate2(); 

//  function themeUpdate1(){
//   bgSelect.addEventListener("change", (e) => {
//     const value = e.target.value; 
//     if(value === "Dark"){
//     profileCard.style.backgroundColor = "black"; 
//     }
//     else if(value === ""){
//           profileCard.style.backgroundColor = "black"; 

//     }
//   })
//  }; 
//  themeUpdate1(); 
      
      
      const addToastBtn = document.getElementById('addToastBtn'); 
      const toast = document.getElementById('toast'); 
      let toastTimeout;

      addToastBtn.addEventListener("click", () => {
        clearTimeout(toastTimeout); 
      
        toast.classList.remove("hidden"); 

        setTimeout(() => {
          toast.classList.remove("opacity-0", "translate-y-5"); 
          toast.classList.add("opacity-100", "translate-y-0"); 
        }, 10); 

        toastTimeout = setTimeOut(() => {
          toast.classList.remove("opacity-100", "translate-y-0"); 
          toast.classList.add("opacity-0", "translate-y-5"); 

          setTimeout(() => {
            toast.classList.add("hidden"); 
          }, 300); 
        }, 3000); 
      }); 
         
        

      })
  return (
    <div className="bg-main">

      <nav   className="flex justify-between  bg-[#10182B]/80 backdrop-blur-md h-17  w-full items-center top-0 sticky  z-50">
      <div className="flex justify-center items-center">
            <img src="/headlogo.png" className="w-10 h-10 m-3 mr-0"></img>
            <h1 className="font-bold text-white ml-1">UIPlayground</h1>
            <p className="bg-[#1B2947] border-[#60A5FA] text-[#60A5FA] font-bold border rounded-xl text-[0.65em] px-2 py-0.9 mx-2 ">HTML & CSS</p>
          </div>

          <div className="flex justify-center  mx-3 ">

           <div className="flex  items-center bg-[#1D2839] w-full px-1 rounded-xl my-3 mx-5 justify-center border border-border gap-3">
           <button id="productButton" className="flex gap-1 justify-center items-center w-full rounded-xl  mr-2 left-0 px-2 py-2 my-1" >
            <img src="/shopping.png" className=" w-3 h-3 "></img>
            <p className='font-medium text-white text-[0.8rem]' >Product</p>
            </button>

            <div className="flex items-center">
              <div className="flex justify-center items-center gap-1 text-gray-400 hover:text-white px-2">
              <button id="creatorButton" className="flex items-center gap-1 3 rounded-xl px-2 py-2 my-1 ">
                <img src="/creator.png" className="bg-none w-3 h-3 flex">
            </img>
            <p className="font-medium text-gray-400 text-[0.8rem] mr-4 hover:text-white cursor-pointer flex" >Creator</p>
              </button>
            </div>
            </div>
            
           </div>

           <div className="flex justify-center border-2 hover:bg-[#324054] border-border my-3 px-3 rounded-2xl bg-[#1D2839]">
            <button><img src="/restart.png" className="w-5 h-4 border border-border " id="restart"></img></button>
           </div>


          </div>
      </nav>


<div className="z-500 grid grid-cols-1 md:grid-cols-2 ">

  <div >
    <div className="border border-border m-5 rounded-3xl p-6  bg-card-bg" id="card">

    <div className='flex justify-between items-center'>
      <div>
   <span className="w-5 h-5 rounded-2xl bg-black "></span>
   <p className="font-medium text-[0.8rem] text-[#7e88a7]">Live Component View</p>
      </div>

      <div className="">
        <p className="font-mono text-[0.8rem] font-medium text-[#7e88a7] rounded-xl  px-3 py-1 bg-card-bg justify-center items-center flex border border-border">Target Card</p>
      </div>
    </div>
    <hr className="mt-6 text-border/70 w-ful mr-3"/>

    <div className="px-25 h-[80%] pt-3 group"> 
     
      <div className=" relative rounded-3xl mt-3 h-110 border border-white/20 overflow-hidden hover:-translate-y-3 hover:shadow-xl transition-all duration-500 ease-out" id="profileCard"> {/* Card Container */}
          {/* Card Cover Image  */}
          <div 
          style={{ backgroundImage: `url(${Watch})`}}
          className='w-full h-[50%] bg-cover bg-center duration-500 ease-in-out group-hover:scale-110'></div>

          {/* Card Description */}
         <div className="p-4">

           <div className="flex justify-between">
            <p className="text-blue-400 font-medium text-[0.8rem] ">WEARABLES PRO EDITION</p>
            <p className="text-white font-medium text-[0.8rem] flex  ">4.9<span className="font-thin text-gray-400 ml-1 ">(128)</span></p>
          </div>

          <div>
            <h2 className="text-white mt-3 font-medium text-[1.2rem] " id="aura">Aura Horizon X Watch</h2>
            <p className=" text-[0.9rem] text-gray-600 ">Titanium ceramic chassis with bio-tracking metrics & 7-day battery life.</p>
          </div> <hr className="border border-border mt-4 "/>

          <div className=" flex justify-between items-center ">
            <div className=" ">
              <p className=" text-[0.7rem] font-semibold text-gray-600">PRICE</p>
              <div className="flex items-center gap-2">
                            <h3 className="text-white font-bold text-[1.5em]  " id="289">$289</h3><p className=" text-[0.8rem] font-bold text-gray-600 line-through">$349</p>

              </div>
            </div>

            <div className="flex gap-1 w-fit bg-[linear-gradient(110deg,#5e68f1_0%,#5f68f1_30%,#3e80f6_70%)] hover:bg-[linear-gradient(110deg,#5e68f1_0%,#5f68f1_30%,#3e80f6_90%)] px-3 py-1 justify-center items-center rounded-xl mt-3 cursor-pointer" id="addBag">
              <button className='flex items-center justify-center cursor-pointer ' id="addToastBtn"><img src="/cart.png" alt="cart icon" className="w-4 h-4"></img>
              <p className="text-white font-medium text-[0.9rem] p-1 ">Add to Bag</p>
              </button>
            </div>

            
<div  className=" hidden opacity-0 transition-all duration-300  bg-green-600 text-white font-medium  px-3 py-2 rounded-xl fixed bottom-6 right-4 " id="toast">
              <span >Added "AuraHorizonX" to your Cart!</span>
            </div>
          </div>

         </div>

      </div>


    </div>

    </div>
/////
   
    <div className="hidden border border-border m-5 rounded-3xl p-6  bg-card-bg" id="creatorCard">

           <div className='flex justify-between items-center'>
      <div>
   <span className="w-5 h-5 rounded-2xl bg-black "></span>
   <p className="font-medium text-[0.8rem] text-[#7e88a7]">Live Component View</p>
      </div>

      <div className="">
        <p className="font-mono text-[0.8rem] font-medium text-[#7e88a7] rounded-xl  px-3 py-1 bg-card-bg justify-center items-center flex border border-border">Target Card</p>
      </div>
    </div>
    <hr className="mt-6 text-border/70 w-ful mr-3"/>
    ///

   <div className="px-25 rounded-xl" >

     <div className="overflow-hidden text-white     border border-border rounded-4xl" id="profileCard" >

         <div className="mt-0" >

          <div style={{ backgroundImage: `url(${BgImage})`}} className="h-25 bg-cover bg-center p-3 flex justify-end items-start">
            <span className="text-[#34d399] p-1 text-[10px] font-medium mx-3 border pl-4 pr-4 pt-1 pb-1 border-[#fff]/20 rounded-xl">Available</span>
          </div>

   <div className="flex justify-center">
              <img src="/profile.png" className="rounded-[100%] w-20 h-20 bg-bottom  -mt-10 absolute  border-4 border-card-bg mx-auto block"/>

   </div>

         <div className="flex items-center flex-col text-center mt-15">
          <h1 className="font-medium text-xl" id="name">HWWH</h1>
          <h4 className="text-[0.8rem] font-sans text-[#5c9ef0] ">Junior UI/UX & Creative Developer</h4>

          <p className="mt-1 px-3 font-sans text-[0.8rem] text-[#758397]">Crafting responsive web designs, interactive design systems, and frontend experiences.</p>
          </div>    

          <div className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/40  py-3 m-6" id="bg">

  <div className
  ="flex flex-1 flex-col items-center">
    <span className="text-xl font-bold text-white tracking-wide" id="h">2</span>
    <span className="mt-1 text-xs font-semibold tracking-wider text-slate-800" id="p">PROJECTS</span>
  </div>

  <div className="h-10 w-px bg-slate-800"></div>

  <div className="flex flex-1 flex-col items-center">
    <span className="text-xl font-bold text-white tracking-wide" id="h">5</span>
    <span className="mt-1 text-xs font-semibold tracking-wider text-slate-800" id="p">FOLLOWERS</span>
  </div>

  <div className="h-10 w-px bg-slate-800"></div>

  <div className="flex flex-1 flex-col items-center">
    <span className="text-xl font-bold text-white tracking-wide" id="h">80%</span>
    <span className="mt-1 text-xs font-semibold tracking-wider text-slate-800" id="p">SCORE</span>
  </div>
</div>

         <div className="flex gap-2 items-center justify-between px-7">
          <div className="bg-linear-[135deg,#2563eb_0%,#3b82f6_59%,#4d47e5_100%] w-full mb-3 py-2 rounded-xl  flex justify-center items-center cursor:pointer" id="followBtn">
            <button className="font-medium font-sans text-[0.8rem] ">Follow+</button>
          </div>

         <a href="http://t.me/itzMe_HwwH" target="_blank" rel="noopener noreferrir">
          <div className="border-2 mb-3 border-border bg-[#1b2638]  px-4 py-2.5 flex items-center justify-center rounded-xl hover:bg-[#334155] cursor:pointer" id="teleBtn">
            <img src="/telegram.png" className="w-4 h-3.5"/>
          </div>
         </a>
         </div>

         </div>





    </div>



   </div>
    </div>




    <div className="border border-[#000000] m-5 p-5 rounded-2xl bg-[#d9dadc] " >
    <div className="flex justify-between">

      <div className="flex items-center"><img src="./adjust.png" alt="adjust icon"  className="w-3 h-3 flex"></img>
      <p className="flex items-center font-extrabold text-white ml-2 text-[0.8rem]">Interactive CSS Property Sandbox</p>
      </div>

      <div> 
        <p className="font-medium text-[0.8rem] text-gray-400">Tweak & See live results</p>
      </div>

    </div>

    <div>
      <div className="flex justify-between">
        <label className="font-medium text-[0.8rem] text-gray-400 mt-3">border-radius</label>
        <p id="radiusText" className="font-mono text-[0.8rem] mt-3 text-blue-500 ">Px</p>
      </div>
      <div>
        <input type="range" className="w-full" id="range" min="0" max="100" defaultValue="20"></input>
      </div>
    </div>

     <div>
      <div className="flex justify-between">
        <label className="font-medium text-[0.8rem] text-gray-400 mt-3">box-shadow</label>
        <p id="shadowText" className="font-mono text-[0.8rem] mt-3 text-blue-500 "></p>
      </div>
      <select id="shadowSelect" className="w-full bg-border text-white px-3 py-2 rounded-xl  mt-1 text-[0.8rem] font-sans">
        <option value="none">None (0px)</option>
        <option value="soft">Soft Subtle</option>
        <option value="floating">Floating Drop Shadow</option>
        <option value="neon">Neon Color Glow</option>
      </select>
     </div>

     <div>
      <div className="flex justify-between mt-3">
        <label className="font-medium text-[0.8rem] text-gray-400 mt-3">background-mode</label>
        <p id="bgText" className="font-mono text-[0.8rem] mt-3 text-blue-500 ">Dark Slate eg.</p>
      </div>
      <select id="bgSelect" className="w-full bg-border text-white px-3 py-2 rounded-xl  mt-1 text-[0.8rem] font-sans">
        <option value="Dark">Deep Dark Slate</option>
        <option value="Glassmprphism">Glassmorphism(Frosted)</option>
        <option value="Light">Clean Light Theme</option>
      </select>
     </div>

    </div>

  </div>

  <div className="halfCode">
      
      <div>

        <div className="border border-border p-5 m-5 rounded-xl">
  <div  className=" text-white">

    <div className="flex justify-between ">

     <div className="flex  gap-6 w-fit px-2 py-1 border border-border  rounded-xl bg-[#182134]">
       <div className="flex items-center justify-center gap-2 w-fit px-2 py-1 bg-blue-500 rounded-xl -mr-3  ">
        <img src="/HTML.png" alt="HTML icon" className="w-2.5 h-2.5"></img>
      <p className="font-normal text-[0.8rem]">HTML</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="/css.png" alt="CSS icon" className="w-2.5 h-2.5"></img>
        <p className="font-normal text-[0.8rem] text-gray-400 hover:text-white cursor-pointer">CSS(Vanilla)</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="/tailWind.png" alt="Tailwind CSS icon" className="w-2.5 h-2.5"/>    
        <p className="font-normal text-[0.8rem] text-gray-400 hover:text-white cursor-pointer">Tailwind Classes</p>
      </div>
     </div>

      <div className="flex items-center gap-2 w-fit border border-border  px-4 py-2 rounded-xl bg-[#303845] hover:bg-[#5b5f87] cursor-pointer" id="copy">
        <img src="/copy.png" alt="copy icon" className="w-2.5 h-2.5"/>
        <p className="font-normal text-[0.8rem] border-border">Copy Code</p>
      </div>

    </div>

    <div className="w-fill h-[80%]" >  
      <pre className="w-fill h-100 overflow-scroll scroll-contain" id="pre1">
        <code id="codeSnippet" className="font-mono text-[0.9rem] px-10 py-10 mt-5 text-gray-400">
        </code>
        </pre>   
        
        <pre className=" hidden w-fill h-100 overflow-scroll scroll-contain" id="pre2">
        <code id="codeSnippet2" className="font-mono text-[0.9rem] px-10 py-10 mt-5 text-gray-400">
        </code>
        </pre>   
        
             </div>

             

    <div className="flex items-center justify-between border-t border-border mt-5  ">
      <div className="flex mt-10 bg-[#0f172a]">
        <img src="/i.png" alt="to note" className="w-3 h-3 mt-1"/>
      <span className="font-normal text-[0.8rem] text-gray-500 ml-2">Tip: Clean, accessible semantic elements <span className="font-mono">( article, figure )</span></span>
      </div>

      <div className="flex justify-center items-center mt-4 font-normal text-[0.8rem] text-gray-500 ml-2]"><p>UTF-8  Standard CSS3</p></div>
    </div>

    

  </div>
  
  


        </div  >

        

       <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 text-white">

        <div className="border border-border m-5 p-5 rounded-xl bg-[#0c1327] hover:border-[#244b8e] transition-colors duration-300 ease-out"> 
  <div className="flex items-center  gap-2">
    <img src="/expand.png" alt="expand icon" className="w-7 h-7 rounded-[5px]  px-1 py-1 bg-[#111e3c]"/>
  <h4 className="font-medium ">Flexbox Layout</h4>
  </div>
    <div>
      <p className="font-normal text-[0.8rem] text-gray-500 mt-2">Used for 1-dimensional positioning(Header badge roe, price & button distribution) with 
        <span className=" ml-2 font-mono text-[#93c5fd] bg-border">display: flex; justify-content: space-between;.</span>
      </p>
    </div>
        </div>

        <div className="border border-border m-5 p-5 rounded-xl bg-[#0c1327] hover:border-[#5a358f]  transition-colors duration-300 ease-out"> 
  <div className="flex items-center  gap-2">
    <img src="/magic.png" alt="magic icon" className="w-7 h-7 rounded-[5px]  px-1 py-1 bg-[#1c1a3c]"/>
  <h4 className="font-medium">Micro-Hover Effects</h4>
  </div>
    <div>
      <p className="font-normal text-[0.8rem] text-gray-500 mt-2">Combine <span className=" ml-2 font-mono text-[#c084fc] bg-border">transofrm: translateY(-6px)</span>  with smooth bezier timing
      to create tactile, floating dapth without jarring shifts.</p>
    </div>
        </div>


        <div className="border border-border m-5 p-5 rounded-xl bg-[#0c1327] hover:border-[#0e6754]  transition-colors duration-300 ease-out"> 
  <div className="flex items-center  gap-2">
    <img src="/photo.png" alt="photo icon" className="w-7 h-7 rounded-[5px]  px-2 py-2 bg-[#0d2430]"/>
  <h4 className="font-medium">Responsive Images</h4>
  </div>
    <div className="flex ">
      <p className="font-normal text-[0.8rem] text-gray-500 mt-2">Prevent layout shifts using modern <code className=" ml-2 font-mono text-[#64e7b7] bg-[#0d2430]">aspect-ratio: 4/3; </code> along with <code className="ml-2 font-mono text-[#64e7b7] bg-[#0d2430]">object-fit: cover; </code> so photos never stretch</p>
    </div>
        </div>


        <div className="border border-border m-5 p-5 rounded-xl bg-[#0c1327] hover:border-[#815919]   transition-colors duration-300 ease-out"> 
  <div className="flex items-center  gap-2">
    <img src="/layer.png" alt="layer icon" className="w-7 h-7 rounded-[5px]  px-2 py-2 bg-[#242124]"/>
  <h4 className="font-medium"> Modern Shadows</h4>
  </div>
    <div>
      <p className="font-normal text-[0.8rem] text-gray-500 mt-2">Natural depth is created with soft colored shadows using low opacity:
        <code className="ml-2 font-mono text-[#fbbf24] bg-[#242124] ">box-shadow: 0 20px 25px -5px rgba(...)</code>
      </p>
    </div>
        </div>

      




      





       </div>
      </div>

  </div>

</div>
    </div>
  )} 