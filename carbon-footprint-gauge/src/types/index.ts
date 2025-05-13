export interface UsageMetrics {
    computeTime: number; // in hours
    apiCalls: number; // total number of API calls
}

export interface CarbonFootprintEstimate {
    totalEmissions: number; // in kg CO₂
    breakdown: {
        computeEmissions: number; // in kg CO₂
        apiEmissions: number; // in kg CO₂
    };
}