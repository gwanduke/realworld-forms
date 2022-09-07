import { Route, Routes, useLocation } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { AnimatePresence, motion } from "framer-motion";
import { css } from "@emotion/css";

const TravelerInsurance = () => {
  const location = useLocation();

  return (
    <div
      className={css`
        position: relative;
        overflow-x: hidden;
        width: 360px;
        height: 100vh;
      `}
    >
      <AnimatePresence>
        {/* REF: https://stackoverflow.com/questions/70239122/react-router-dom-v6-with-framer-motion-v4 */}
        <Routes location={location} key={location.pathname}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default TravelerInsurance;
