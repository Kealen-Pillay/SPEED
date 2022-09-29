import "./App.css";
import { SubmitForm } from "./components/submitForm/SubmitForm";
import { Homepage } from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SubmitForm />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubmitForm />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
