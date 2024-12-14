import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Basketpage from "./Pages/Basketpage";

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