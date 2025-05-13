import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Carbon Footprint Gauge</h1>
                <p>
                    This application provides insights into the carbon footprint of your cloud services.
                    Explore the dashboard to see detailed usage metrics and carbon impact estimates.
                </p>
                <a href="/dashboard">Go to Dashboard</a>
            </main>
            <Footer />
        </div>
    );
};

export default Home;