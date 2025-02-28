import React from 'react';
import { FaHandshake, FaCloud, FaUsers} from "react-icons/fa6"; // Using other icons as well
import { TfiAngleRight } from "react-icons/tfi";
const Vsion = () => {
  return (
    <div className="why-techma mt-32 px-6 lg:px-20 flex flex-col lg:flex-row justify-around items-start">
      {/* Left Section - Text */}
      <div className="why font-bold lg:w-1/2">
        <h4 className="text-4xl tracking-lighter leading-normal">
          <span className="text-[rgb(34,61,18)]">Why choose</span> <br /> 
          <span className="text-[rgb(0,132,19)]">ACE FASHION</span>
        </h4>
        <p className="mt-4 leading-7">
          Why choose ACE? For our deep expertise in clothing <br /> 
          wears, customized dresses tailored to your unique needs, <br /> 
          and a forward-thinking approach integrating the latest <span className="text-[rgb(0,132,19)]">Fashion</span>
        </p>
        
        {/* Techma List */}
        <div className="techma-list mt-8 space-y-8">
          {/* Tech Partner */}
          <div className="flex items-start space-x-4">
            <FaHandshake className="text-[rgb(34,61,18)] w-8 h-8" />
            <div>
              <h3 className="text-[rgb(34,61,18)] text-2xl font-bold">Philantrophy</h3>
              <p className="font-semibold">
                Consider initiatives that support underpriviledged  <br /> 
                individuals in achieving goals, trying back tothe brand's <br />
                 message of hope and strength.
              </p>
            </div>
          </div>

          {/* We are Human */}
          <div className="flex items-start space-x-4">
            <FaUsers className="text-[c] w-8 h-8" />
            <div>
              <h3 className="text-[rgb(34,61,18)] text-2xl font-bold">Global Movement</h3>
              <p className="font-semibold">
                Position Ace as more than a clothing brand<br /> 
                but a movement that inspires people to reject <br /> 
               medocrity and strive for greatness.
              </p>
            </div>
          </div>
            {/* <button className='bg-[rgb(34,61,18)] text-white px-6 py-2 font-bold rounded-md hover:bg-green-800 transition flex'>Scheldule a consultation <TfiAngleRight className="text-lg mt-1 ms-4" /></button> */}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hero-img mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
        <img className="w-3/4" src="/people.png" alt="People illustration" />
      </div>
    </div>
  );
};

export default Vsion;
