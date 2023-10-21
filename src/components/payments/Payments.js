import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Payments.scss";
import { MdOutlineDoneAll } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/slice/cartSlice";
const Payments = () => {
  const navigate = useNavigate();
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();
  const infoData = {
    success: {
      message: "The order has been placed",
      cta: "Shope more...",
      icon: <MdOutlineDoneAll />,
    },
    failure: {
      message: "Payment failed. Pls try again",
      cta: "Try again",
      icon: <ImCross />,
    },
  };

  if (status === "success") {
    dispatch(resetCart());
  }
  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="btn-primary" onClick={() => navigate(`/`)}>
        {infoData[status].cta}
      </button>
    </div>
  );
};

export default Payments;
