// File: frontend/src/utils/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
    async login(email, password) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    },

    async getEvents() {
        const response = await fetch(`${API_URL}/events`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        return await response.json();
    },

    async createEvent(eventData) {
        const response = await fetch(`${API_URL}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify(eventData)
        });
        return await response.json();
    }
};
