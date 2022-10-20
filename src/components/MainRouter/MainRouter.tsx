import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ChooseTransportationPage } from "../../pages/ChooseTransportation/ChooseTransportationPage";
import { AddSupportingDataPage } from "../../pages/AddSupportingData/AddSupportingDataPage";
import { ConfirmChoicesPage } from "../../pages/ConfirmChoicesPage/ConfirmChoicesPage";
import { ApplicationMachineContext } from "../../context/StateMachines/StateMachines.context";
import { ThankYouPage } from "../../pages/ThankYouPage/ThankYouPage";
import { useSelector } from "@xstate/react";

export const MainRouter: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { applicationService } = useContext(ApplicationMachineContext);
  const currentPage = useSelector(applicationService, getHighestLevelState);

  useEffect(() => {
    if (!pathname.includes(currentPage)) {
      navigate(`/${currentPage}`);
    }
  });

  return (
    <Routes>
      <Route
        path="choose-transportation"
        element={<ChooseTransportationPage />}
      />
      <Route path="add-supporting-data" element={<AddSupportingDataPage />} />
      <Route path="confirm-choices" element={<ConfirmChoicesPage />} />
      <Route path="thank-you" element={<ThankYouPage />} />
    </Routes>
  );
};

//@ToDo: typing
const getHighestLevelState = (state: any) => {
  return state.toStrings()[0];
};
