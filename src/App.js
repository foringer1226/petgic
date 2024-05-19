import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from "./pages/home";
import ContactsPage from "./pages/contacts";
import PricesPage from "./pages/prices";
import GalleryPage from "./pages/gallery";
import ServicesPage from "./pages/services";
import FAQPage from "./pages/faq";
import ReviewsPage from "./pages/reviews";
import CabinetPage from "./pages/cabinet";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/services" element={<ServicesPage/>}/>
                        <Route path="/prices" element={<PricesPage/>}/>
                        <Route path="/faq" element={<FAQPage/>}/>
                        <Route path="/reviews" element={<ReviewsPage/>}/>
                        <Route path="/gallery" element={<GalleryPage/>}/>
                        <Route path="/contacts" element={<ContactsPage/>}/>
                        <Route path="/cabinet" element={<CabinetPage/>}/>
                    </Routes>
                </main>
            </Router>
        </div>
    );
}
