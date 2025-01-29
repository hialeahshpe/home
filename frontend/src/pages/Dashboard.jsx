// File: frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [userData, setUserData] = useState({
        upcomingEvents: [],
        myProjects: [],
        announcements: []
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [events, projects, announcements] = await Promise.all([
                api.getUserEvents(),
                api.getUserProjects(),
                api.getAnnouncements()
            ]);
            
            setUserData({
                upcomingEvents: events,
                myProjects: projects,
                announcements: announcements
            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Welcome back, {userData.name}</h1>
            </div>
            
            <div className="dashboard-grid">
                <div className="dashboar
