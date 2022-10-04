import "./App.css";
import { SubmitForm } from "./components/submitForm/SubmitForm";
import { SearchArticle } from "./components/searchArticle/SearchArticle";
import { Homepage } from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchArticle />} />
          <Route path="/post" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
