import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Integrations from './pages/Integrations'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Features" element={<Features />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Integrations" element={<Integrations/>}/>
            </Routes>
        </Router>
    );
}