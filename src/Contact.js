import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            number: data.number,
      };
      await axios.post("http://localhost:4001/contact/contact", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Submit Successfully");
          window.location.reload();
          setTimeout(() => {
            
          },3000);
          navigate(from, { replace: true });
        }
        localStorage.setItem("Contacts", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {
            
          },3000);
          window.location.reload();
          
        }
      });
};
  return (
    <div name="Contact" className="">
      <dialog name="Contact" id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg text-violet-800">Contact Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-6 space-y-2'>
                        <span>Name</span>
                        <br/>
                        <input type="fullname"
                        placeholder='Enter Your Full Name' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("fullname", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span>Phone Number</span>
                        <br/>
                        <input type="number"
                        placeholder='Enter Your Phone Number' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("number", { required: true })}/>
                        <br/>
                        {errors.number && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span>Email</span>
                        <br/>
                        <input type="email"
                        placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <p className='text-md mt-10'>My Contact Number is: <span className='underline text-blue-800' >8107773336</span></p>
                    <button className='btn mt-10 ml-6 bg-violet-800 text-white hover:bg-white hover:text-violet-800 duration-300'>Submit</button>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Contact
