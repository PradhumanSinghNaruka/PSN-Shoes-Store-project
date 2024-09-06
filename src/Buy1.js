import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Buy1() {
  return (
    <div>
      <dialog id="buy1" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-2xl text-violet-800">Enter Your Details</h3>
                <form       >
                    <div className='mt-6 space-y-2'>
                        <span className="text-lg">Full Name</span>
                        <br/>
                        <input type="email"
                        placeholder='Enter Your fullname' className='w-80 px-3 border rounded-md outline-none py-1'
                                      />
                        <br/>
                        {/* {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>} */}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className="text-lg">Phone Number</span>
                        <br/>
                        <input type="number"
                        placeholder='Enter Your Phone Number' className='w-80 px-3 border rounded-md outline-none py-1'
                               />
                        <br/>
                        {/* {errors.number && <span className='text-sm text-red-500'>This field is required</span>} */}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className="text-lg">Address</span>
                        <br/>
                        <input type="text"
                        placeholder='Enter Your Address' className='w-80 px-3 border rounded-md outline-none py-1'
                                 />
                        <br/>
                        {/* {errors.text && <span className='text-sm text-red-500'>This field is required</span>} */}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className="text-lg">Code</span>
                        <br/>
                        <input type="text"
                        placeholder='Enter Shoes Code' className='w-80 px-3 border rounded-md outline-none py-1'
                                 />
                        <br/>
                        {/* {errors.text && <span className='text-sm text-red-500'>This field is required</span>} */}
                    </div>
                <div className="modal-action">
                    {/* <form method="dialog">
                        <button className="btn hover:text-black hover:bg-violet-500 bg-black"> <Link to="/Payment" className='text-white'>Next</Link>{""}</button>
                    </form> */}
                    <Link to="/payment">
                <button type="button" className="btn hover:text-black hover:bg-violet-500 bg-black text-white">
                  Next
                </button>
              </Link>
                </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Buy1
