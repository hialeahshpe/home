// File: frontend/src/components/profile/Profile.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import '../../styles/profile/Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        major: '',
        graduationYear: '',
        bio: '',
        avatar: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const data = await api.getProfile();
        setProfile(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.updateProfile(profile);
        setIsEditing(false);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file);
        
        const response = await api.uploadAvatar(formData);
        setProfile({ ...profile, avatar: response.avatarUrl });
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="avatar-container">
                    <img src={profile.avatar || '/default-avatar.png'} alt="Profile" />
                    {isEditing && (
                        <input 
                            type="file" 
                            onChange={handleFileUpload}
                            accept="image/*"
                        />
                    )}
                </div>
                <h1>{profile.name}</h1>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Major</label>
                    <input
                        type="text"
                        value={profile.major}
                        onChange={(e) => setProfile({...profile, major: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Graduation Year</label>
                    <input
                        type="number"
                        value={profile.graduationYear}
                        onChange={(e) => setProfile({...profile, graduationYear: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Bio</label>
                    <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                {isEditing ? (
                    <div className="button-group">
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <button type="button" onClick={() => setIsEditing(true)}>Edit Profile</button>
                )}
            </form>
        </div>
    );
};

export default Profile;
