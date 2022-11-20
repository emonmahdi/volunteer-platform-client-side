import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Home/Header/Header";
import "./Checkout.css";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../Auth/Loading/Loading";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  const { Id } = useParams();
  const [service, setService] = useState({});
  console.log(service);
  const { register, handleSubmit, reset  } = useForm();
  console.log(user);
 
  
 /*  const onSubmit = (data) => { 
    console.log(data);
    const url = `http://localhost:5000/order`;
    axios.post(url, data)
    .then(res => {
        console.log(res.data);
        toast('Your Order Successfully!');
        reset();
    })
  }; */

  const handlePlaceOrder = e => {
    e.preventDefault();
    const order = {
        email: user.email,
        name: user.displayName,
        date: service.date,
        img: service.image,
        event: service.title,
        serviceId: Id,
        address: e.target.address.value,
        phone: e.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(res => {
        console.log(res);
        const {data} = res;
        if(data.insertedId){
            toast("Your Order is Booked!!!");
            e.target.reset();
        }
    })
}

  useEffect(() => {
    fetch(`http://localhost:5000/events/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, [Id]);
  

  return (
    <>
      <Header />
      <div className="checkout-page">
        <h3 className="mb-3 text-primary">Place Order the {service?.title}</h3>
        <div className="container">
          <div className="row mx-auto w-100">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <img src={service.image} className="img-fluid w-50 mx-auto" alt="" />
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <form onSubmit={handlePlaceOrder} className='bg-light p-3 rounded-3'>
                <div>
                    <input className='form-control mb-3' value={user?.displayName} type="text" placeholder='Name' name='name' required disabled />
                </div>
                <div>
                    <input className='form-control mb-3' value={user?.email} type="email" placeholder='Email' name='email' required disabled />
                </div>
                <div>
                    <input className='form-control mb-3' value={service?.title} type="text" placeholder='Event' name='event' readOnly />
                </div>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Address' name='address' />
                </div>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Phone' name='phone' />
                </div>
                <div>
                    <input type="submit" className='btn btn-dark' value="Place Order" />
                </div>
            </form>
              {/* <form onSubmit={handleSubmit(onSubmit)} className='bg-light p-3 rounded-3'>
                <input  className='form-control mb-3' value={user?.displayName} placeholder='Name' 
                  {...register("name", )}
                />
                <input  className='form-control mb-3' {...register("email", )} value={user?.email}  /> 
                <input  className='form-control mb-3' value={service?.title}  {...register("events")}  />
                <input  className='form-control mb-3' placeholder='Address'  {...register("address")}  />
                <input  className='form-control mb-3' placeholder='Phone' {...register("phone")} /> 
                <input type="submit" value='Order' className="d-block w-100 btn btn-primary" />
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
