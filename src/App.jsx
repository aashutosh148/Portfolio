import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000)); 
            setLoading(false);
        };

        loadContent();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
