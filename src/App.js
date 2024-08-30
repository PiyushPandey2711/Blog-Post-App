// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogDetails from "./components/BlogDetails";
import EditBlogForm from "./components/EditBlogForm"; // Import EditBlogForm
import AddBlogForm from "./components/AddBlogForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/edit/:id" element={<EditBlogForm />} /> {/* Add this route */}
          <Route path="/add-blog" element={<AddBlogForm />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
