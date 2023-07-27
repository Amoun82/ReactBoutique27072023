import { Routes, Route } from "react-router-dom";

import './App.css'
import GetArticles from './pages/Articles/getArticle'
import Header from "./pages/header/header";
import DetaileArticle from "./pages/Articles/detaileArticle";
import AjouterArticle from './pages/Articles/ajouterArticle';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/articles" element={<GetArticles />} />
        <Route path="/ajouter-article" element={<AjouterArticle />} />
        <Route path="/articles/detail-article/:id" element={<DetaileArticle />} />
      </Route>
    </Routes>
  )
}

export default App
