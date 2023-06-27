import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import BookmarkPage from "./pages/bookmarkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favoritos" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
