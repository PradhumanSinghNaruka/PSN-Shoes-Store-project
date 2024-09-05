import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
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
            password: data.password,
      };
      await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
        <div className='flex item-center h-screen mt-32 justify-center'>
        <div className="w-[600px]">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-violet-800">Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-6 space-y-2'>
                        <span>Name</span>
                        <br/>
                        <input type="fullname"
                        placeholder='Enter Your Full Name' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("fullname", { required: true })}/>
                        <br/>
                        {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
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
                    <div className='mt-6 space-y-2'>
                        <span>Passward ~</span>
                        <br/>
                        <input type="password"
                        placeholder='Enter Your Passward' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("password", { required: true })}/>
                        <br/>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-6'>
                        <button className='bg-violet-800 text-white rounded-md px-3 py-1 hover:bg-violet-500 duration-300'>Sign Up</button>
                        <p>
                            Have Account? <button className='underline text-blue-800'
                            onClick={()=>
                                document.getElementById("my_modal_1").showModal()
                            }>
                            Login</button>{""}
                            <Login />
                        </p>
                    </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn"> <Link to="/" className='text-black'>Close</Link>{""}</button>
                    </form>
                </div>
                </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default Signup
