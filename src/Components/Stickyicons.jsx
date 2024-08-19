import React from "react";
import phone from "../Images/phone.png";
import whatsapp from "../Images/whatsapp.png";
import mail from "../Images/mail.png";
const Stickyicons = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 fixed right-3 max-[600px]:right-5 bottom-[40%] z-[999]">
        <img src={phone} className="w-[30px] h-[30px]" alt="phone-symbol" />
        <img src={whatsapp} className="w-[30px] h-[30px]" alt="phone-symbol" />
        <img src={mail} className="w-[30px] h-[30px]" alt="phone-symbol" />
      </div>
    </div>
  );
};

export default Stickyicons;
