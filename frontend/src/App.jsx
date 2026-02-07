import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AppRouter } from './router';

function App() {
  return (
    <BrowserRouter>
      {/* Sayfa arka planı pembe ve metin petrol yeşili */}
      <div className="min-h-screen bg-[#FFDCF3] text-[#0D2D31]">
        <Navbar />
        {/* pt-24 navbar'ın yüksekliğine göre içerik alanı */}
        <main className="container mx-auto px-6 pt-24 pb-12">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;