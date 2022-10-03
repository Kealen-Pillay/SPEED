import "./App.css";
import { SubmitForm } from "./components/submitForm/SubmitForm";
import { SearchArticle2 } from "./components/searchArticle/SearchArticle2";
import { Homepage } from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/search"
            element={articles && <SearchArticle2 articles={articles} />}
          />
          <Route path="/post" element={<SubmitForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
