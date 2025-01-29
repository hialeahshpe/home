// File: frontend/src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import '../styles/Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching events:', error);
            setLoading(false);
        }
    };

    return (
        <div className="events-page">
            <h1>SHPE MDC Events</h1>
            <div className="events-filter">
                <select defaultValue="all">
                    <option value="all">All Events</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past Events</option>
                </select>
            </div>
            <div className="events-grid">
                {loading ? (
                    <div>Loading events...</div>
                ) : (
                    events.map(event => (
                        <EventCard key={event._id} event={event} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Events;
