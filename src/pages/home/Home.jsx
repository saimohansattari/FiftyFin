import React from "react";
import VedioContainer from "./vediocontainer/VedioContainer";
import Ourpartners from "./partners-investers/Ourpartners";
import Ourinvestors from "./partners-investers/Ourinvestors";
import MobileBox from "./mobile_container/MobileBox";
import Flexibilities from "./flexibilities/Flexibilities";
import OurProducts from "./ourproducts/OurProducts";
import Interest from "./intrestcal/Interest";
import OurBlog from "./ourblog_container/OurBlog";

function Home() {


 


  return (
    <div>
      
      <VedioContainer />

      <Ourpartners />

      <Ourinvestors />

      <MobileBox />

      <Flexibilities />
      
      <OurProducts />

      <Interest />

      <OurBlog />
   

    </div>
  );
}

export default Home;
