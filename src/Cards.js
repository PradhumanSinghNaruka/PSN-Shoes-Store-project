import React from 'react';
import Buy1 from './Buy1';

function Cards() {
  return (
    <>
        <h1 className='mx-auto md:px-20 px-4 mt-16 flex gap-20 text-black-700 md:text-8xl items-center justify-center'>MEN  SHOES</h1>
        <div className=" container mx-auto md:px-20 px-4 mt-40 flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img
                        src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/2d04e549-5de1-4125-bfe4-d232ffa869b9/air-jordan-1-low-og-wolf-grey-shoes-WcxvLP.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Air Jordan 1 Low OG
                        <div className="badge badge-secondary bg-violet-700 h-7 ">PREMIUM</div>
                    </h2>
                    <p>The Air Jordan 1 Low OG remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$120</div>
                        <div className=''><a className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200" onClick={()=>document.getElementById("buy1").showModal()}>Buy</a><Buy1/></div>
                    </div>  
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img className="h-96 w-96"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/365788af-c1c0-4353-a3a9-b899698ee768/WMNS+AIR+JORDAN+3+RETRO+TEX.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Air Jordan 3 Retro texture
                        <div className="badge badge-secondary bg-violet-700 h-7">PREMIUM</div>
                    </h2>
                    <p>The Air Jordan 3 Retro texturr remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$200</div>
                        <div className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200">Buy</div>
                    </div>  
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img className="h-96 w-96"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0aecb4c-3e97-4080-a944-dcbd89af7ee7/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Air Jordan 1Retro High OG
                        <div className="badge badge-secondary bg-violet-700 h-7">PREMIUM</div>
                    </h2>
                    <p>The Air Jordan 1Retro High OG remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$140</div>
                        <div className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200">Buy</div>
                    </div>  
                </div>
            </div>
        </div>

        <div className=" container mx-auto md:px-20 px-4 mt-40 flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_515,c_limit/f39c02f3-11d1-4898-90ef-b28b143d31a3/jordan-basketball-shoe-finder.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Air Jordan for Basketball
                        <div className="badge badge-secondary bg-violet-700 h-7">PREMIUM</div>
                    </h2>
                    <p>The Air Jordan for Basketball remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$250</div>
                        <div className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200">Buy</div>
                    </div>  
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img className="h-96 w-96"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/211f7e29-d8ff-405b-b655-0c847998c943/AIR+MAX+DN+SE+PRM.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Nike Air Mix Primium
                        <div className="badge badge-secondary bg-violet-700 h-7">PREMIUM</div>
                    </h2>
                    <p>Nike Air Mix Primium remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$200</div>
                        <div className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200">Buy</div>
                    </div>  
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl border border-black transform transition-transform hover:scale-105 duration-300">
                <figure>
                    <img className="h-96 w-96"
                        src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3feda762-1c94-49d1-b9a8-e072d063eb48/W+AIR+ZM+ALPHAFLY+NEXT%25+3+OLY.png"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Nike Alphafly 3 Electric
                        <div className="badge badge-secondary bg-violet-700 h-7">PREMIUM</div>
                    </h2>
                    <p>Nike Alphafly 3 Electric remakes the classic sneaker with new colors and textures.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline w-20 h-10 absolute left-4">$140</div>
                        <div className="badge badge-outline w-20 h-10 hover:bg-violet-700 hover:text-white transition duration-200">Buy</div>
                    </div>  
                </div>
            </div>
        </div>

    </>
  )
}

export default Cards
