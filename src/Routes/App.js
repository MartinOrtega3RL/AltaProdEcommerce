import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";
import FirestoreContext from "../Context/FirestoreContext";

export default function App(){
  
  return(
    <>
      <BrowserRouter>
            <FirestoreContext>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                </Routes>
            </FirestoreContext>
      </BrowserRouter>
    </>
  )

}