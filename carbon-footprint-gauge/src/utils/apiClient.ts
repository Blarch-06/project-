import axios from 'axios';

const API_BASE_URL = 'https://api.openai.com/v1'; // Replace with the appropriate base URL for the cloud service provider

export const fetchUsageData = async (apiKey: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/usage`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching usage data:', error);
        throw error;
    }
};