 import './index.css'

export default function Home() {
  return (
    

  <div>
    <nav className="flex items-center justify-between  mr-3 w-full h-15 relative z-50 top-0 bg-card-bg border-y border-blue-500/10 ">

      <div className="flex items-center gap-3">
    <img src="/headlogo.png" className="w-15 ml-5 rounded-xl "/>
    <h1 className="text-font text-l left-0 font-bold ">UIPlayground</h1>
    <h4 className="rounded-xl text-[0.7em] text-blue-500 font-bold bg-slate-700 w-20 h-5 flex justify-center items-center  border-x border-y">HTML & CSS</h4>
      </div>

      <div class="flex flex-row  justify-center items-center gap-3">
        <div className="flex text-[10px] font-bold text-font gap-4 rounded-xl border-x  border-y border-gray-400 py-2 px-2 bg-slate-700">
          <button className="px-3 py-1 w-fit rounded-xl bg-blue-500 text-font font-bold text-[10px]">Product</button>
          <button className="hover:text-font text-gray-500">Creator</button>
        </div>

        <div className="pr-3" ><button className="text-font font-bold text-[10px] pr-4 border-x border-y rounded-xl border-gray-400 w-fit px-3 py-3 flex justify-center items bg-slate-700 hover:text-gray-300 hover:bg-slate-500 ">Restart</button></div>
      </div>

    </nav>

    <div className="mt-5">

      <div>
        <div></div>
        <p>Live Component View</p>

        <p>Targrt Card</p><hr></hr>
      </div>

      <div>
        <img src="./watch.png"></img>
        <p>NEW RELEASE</p>
        <p>Heart</p>

        <div>
          <h4>Wearables • Pro Edition</h4>
          <p>4.9(128)</p>

          <h1>Aura HorizonXWatch</h1>
          <p>Titanium ceramic chassis with bio-tracking metrics & 7-day battery life.</p><hr></hr>
          
          <div>
            <p>PRICE</p>
            <div>
              <h1>$289 <p className="line-through">$349</p></h1>

              <button className="">Add to Bag</button>
            </div>
          </div>

          
        </div>
      </div>

    </div>




  </div>
  )}