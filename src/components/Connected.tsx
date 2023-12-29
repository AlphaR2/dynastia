import React, { FC } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Connected: FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="flex text-center text-sm lg:text-xl font-semibold lg:font-bold uppercase leading-5 lg:leading-10 mx-2 lg:mx-56">
          Welcome to the year of the dragon
        </h2>

        {/* <button className="flex items-center gap-2 text-xl mt-4 font-semibold">
          Go to Blacksmith 
        </button> */}
      </div>
    </div>
  );
};

export default Connected;
