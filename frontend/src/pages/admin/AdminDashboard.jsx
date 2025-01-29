// File: frontend/src/pages/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import '../../styles/admin/AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('users');

    return (
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <nav>
                    <button 
                        className={activeTab === 'users' ? 'active' : ''} 
                        onClick={() => setActiveTab('users')}
                    >
                        Users
                    </button>
                    <button 
                        className={activeTab === 'events' ? 'active' : ''} 
                        onClick={() => setActiveTab('events')}
                    >
                        Events
                    </button>
                    <button 
                        className={activeTab === 'projects' ? 'active' : ''} 
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button 
                        className={activeTab === 'announcements' ? 'active' : ''} 
                        onClick={() => setActiveTab('announcements')}
                    >
                        Announcements
                    </button>
                </nav>
            </div>

            <div className="admin-content">
                {activeTab === 'users' && <UserManagement />}
                {activeTab === 'events' && <EventManagement />}
                {activeTab === 'projects' && <ProjectManagement />}
                {activeTab === 'announcements' && <AnnouncementManagement />}
            </div>
        </div>
    );
};

export default AdminDashboard;
