import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alianza from "./Alianza";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/Alianza" element={<Alianza />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
