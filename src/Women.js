import React from 'react'
import Buy1 from './Buy1';
import shoes4 from "./images/shoes1.png"
import shoes5 from "./images/shoes2.png"
import shoes6 from "./images/shoes3.png"

function Women() {
  return (
    <>
        <h1 name="Men" className='mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 text-4xl md:text-8xl items-center justify-center'>WOMEN  SHOES</h1>
        <div className="container mx-auto px-4 md:px-20 bg-white mt-32 max-w-screen-2xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes4} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Brown"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Brown</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">4PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">650</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes5} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Blue"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Blue</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">5PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">650</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes6} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Green"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Green</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">6PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">699</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Women
