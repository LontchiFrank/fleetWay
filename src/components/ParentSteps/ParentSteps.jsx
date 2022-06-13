import React, { useState } from "react";
import FourthStep from "../FourthStep/FourthStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";

function ParentSteps() {
  const [change, setChange] = useState(1);

  const incement = () => {
    change = change + 1;
  };
  switch (change) {
    case 1:
      return <FirstStep />;
      break;
    case 2:
      return <SecondStep />;
      break;
    case 3:
      return <ThirdStep />;
      break;
    case 4:
      return <FourthStep />;
      break;

    default:
      return change;
      break;
  }
}

export default ParentSteps;
