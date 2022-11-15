import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import "./main.css";
import Footer from "./components/footer";
import Form from './components/form'

const App = () => {
  return (
    <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
           <Route path='/form' element={<Form />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </ErrorBoundary>
  );
};

export default App;
