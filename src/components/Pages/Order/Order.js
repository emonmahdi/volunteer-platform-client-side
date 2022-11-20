import React, { useEffect, useState } from "react";
import Header from "../../Home/Header/Header";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="order-route">
        <h3>This is my orders items....{orders.length}</h3>
        <div className="container">
          <div className="row">
            {orders.map((order) => {
              const { name, event, img, date } = order;
              return (
                <div className="col-md-6">
                  <div className="single-order d-flex align-items-center border p-3 shadow rounded mb-3 bg-white">
                    <div className="row">
                      <div className="col-md-5">
                        <img src={img} className="w-50" alt="" />
                      </div>
                      <div className="col-md-7 text-start">
                        <div className="">
                          <h5>{event}</h5>
                          <h6>{date}</h6>
                        </div>
                        <button className="btn btn-danger d-block  mt-3">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;