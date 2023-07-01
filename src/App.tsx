import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import FavoritePage from './pages/favoritePage';
import DetailPage from './pages/detailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favoritos" element={<FavoritePage/>} />
        <Route path="/detalhes/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
