import "./App.css";
import { SubmitForm } from "./components/submitForm/SubmitForm";
import { Homepage } from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
