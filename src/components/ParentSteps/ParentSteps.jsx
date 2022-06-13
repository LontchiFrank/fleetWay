import React, { useState } from "react";
import FirstStep from "../FirstStep/FirstStep";
import FourthStep from "../FourthStep/FourthStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";

function ParentSteps({ change }) {
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
