import React from "react";

const NewsLetter = () => {
  return (
    <div className="news-bg flex gap-11 items-center justify-center  max-[600px]:px-6 text-white">
      <h2 className="text-[30px] font-[500] inter text-[#FAFCFA]">
        Subscribe to our Newsletter
      </h2>
      <button className="border-2 border-white rounded-full px-8 py-2 inter font-[400] text-[16px] text-[#FAFCFA]">
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
