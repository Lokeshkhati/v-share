import React from "react";
import Searchbar from "./Searchbar";
import WhoToFollow from "./WhoToFollow";
const Widgets = () => {
  return (
    <>
      <div className="fixed  top-16 bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block scroll-none">
        <div className="sticky top-0 ">
          <Searchbar />
        </div>
        <WhoToFollow />
        {/* <WhoToFollow />
        <WhoToFollow /> */}
      </div>
    </>
  );
};

export default Widgets;
// <div className="sticky top-0 ">
//   <Searchbar />
// </div>
