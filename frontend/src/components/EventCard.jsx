// File: frontend/src/components/EventCard.jsx
import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <div className="event-date">
                {new Date(event.date).toLocaleDateString()}
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-location">
                <i className="fas fa-map-marker-alt"></i>
                {event.location}
            </div>
            <button className="btn-register">Register</button>
        </div>
    );
};

export default EventCard;
