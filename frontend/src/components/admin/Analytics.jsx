// File: frontend/src/components/admin/Analytics.jsx
import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import { api } from '../../utils/api';
import '../../styles/admin/Analytics.css';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState({
        userGrowth: [],
        eventParticipation: [],
        projectEngagement: []
    });

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        const data = await api.getAnalytics();
        setAnalyticsData(data);
    };

    return (
        <div className="analytics-container">
            <h2>Analytics Dashboard</h2>
            
            <div className="chart-container">
                <h3>User Growth</h3>
                <LineChart
                    width={600}
                    height={300}
                    data={analyticsData.userGrowth}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                </LineChart>
            </div>

            <div className="chart-container">
                <h3>Event Participation</h3>
                <LineChart
                    width={600}
                    height={300}
                    data={analyticsData.eventParticipation}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="event" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="participants" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Analytics;
