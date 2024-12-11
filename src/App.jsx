import { Route, Routes } from "react-router-dom";
import Header from "./Project/Header";
import HomePage from "./Project/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Basketpage from "./Project/Basketpage";

function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route  path="*" element={<NotFoundPage/>}/>
        <Route  path="/homepage" element={<HomePage/>}/>
        <Route  path="/basketpage" element={<Basketpage/>}/>
      </Routes>
    </>
  )
};

export default App;