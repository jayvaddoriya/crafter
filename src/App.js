import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LayoutProvider from "./component/LayoutProvider/LayoutProvider";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import UseCases from "./pages/UseCases/UseCases";
import Features from "./pages/Features/Features";
import ScheduleNow from "./pages/ScheduleNow/ScheduleNow";
import Intingration from "./pages/Intigrations/Intigration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutProvider />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Intingration />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/useCases" element={<UseCases />} />
          <Route path="/scheduleNow" element={<ScheduleNow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
