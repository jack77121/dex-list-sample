import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Exchange from './pages/Exchange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="exchange/:exchangeId" element={<Exchange />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
