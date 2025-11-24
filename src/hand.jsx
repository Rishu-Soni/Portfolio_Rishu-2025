import hand_thumbup from "./Assets/Images/hand_images/hand1.png";
import hand_Stop from "./Assets/Images/hand_images/hand2.png";
import hand_threadHold from "./Assets/Images/hand_images/hand3.png";
import hand_pointing from "./Assets/Images/hand_images/hand4.png";
import hand_facingUp from "./Assets/Images/hand_images/hand5.png";
import "./CSS/hand.css";

function handPosition() {
  return (
    <>
      <img className=" handPng visible  " src={hand_thumbup} alt="" />
      <img className=" handPng  " src={hand_Stop} alt="" />
      <img className=" handPng  " src={hand_threadHold} alt="" />
      <img className=" handPng  " src={hand_pointing} alt="" />
      <img className=" handPng  " src={hand_facingUp} alt="" />
    </>
  );
}

export default handPosition;
