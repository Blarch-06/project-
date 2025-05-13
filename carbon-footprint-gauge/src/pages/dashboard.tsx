import React, { useEffect, useState } from 'react';
import { fetchUsageData } from '../utils/apiClient';
import Chart from '../components/Chart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UsageMetrics, CarbonFootprintEstimate } from '../types';

const Dashboard: React.FC = () => {
    const [usageMetrics, setUsageMetrics] = useState<UsageMetrics | null>(null);
    const [carbonEstimate, setCarbonEstimate] = useState<CarbonFootprintEstimate | null>(null);

    useEffect(() => {
        const getUsageData = async () => {
            try {
                const data = await fetchUsageData();
                setUsageMetrics(data.metrics);
                setCarbonEstimate(data.carbonEstimate);
            } catch (error) {
                console.error('Error fetching usage data:', error);
            }
        };

        getUsageData();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Dashboard</h1>
                {usageMetrics && (
                    <div>
                        <h2>Usage Metrics</h2>
                        <p>Compute Time: {usageMetrics.computeTime} hours</p>
                        <p>API Calls: {usageMetrics.apiCalls}</p>
                        <Chart data={usageMetrics} />
                    </div>
                )}
                {carbonEstimate && (
                    <div>
                        <h2>Carbon Footprint Estimate</h2>
                        <p>Estimated CO₂ Emissions: {carbonEstimate.emissions} kg</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;