import { Routes, Route } from "react-router-dom";
import Error from "./LandingPage/Error";
import Page1 from "./LandingPage/PageOne";
import Page2 from "./LandingPage/PageTwo";
import Page3 from "./LandingPage/PageThree";
import SharedLayout from "./LandingPage/SharedLayout";

const LandingPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default LandingPage;
