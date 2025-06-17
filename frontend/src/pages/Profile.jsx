import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HorizontalLine from '../assets/components/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await axios.get('http://localhost:8000/auth/users/me', {
                    withCredentials: true // Required for cookies
                });
                setUser(response.data.username);
            } catch (error) {
                if (error.response?.status === 401) {
                    navigate('/login');
                } else {
                    console.error("Authentication error:", error);
                }
            } finally {
                setLoading(false);
            }
        }
        
        checkAuth();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/auth/logout', {}, {
                withCredentials: true // Important for cookie-based auth
            });
            setUser(null);
            toast.success("Logged out!");
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <>
            <HorizontalLine />
            <div className='px-10 lg:px-16 my-10'>
                <div className="bg-[#f0f0f0] p-10 rounded-[25px] flex flex-col items-center justify-center gap-10">
                    <p className="header-text text-black text-2xl lg:text-5xl">
                        {user} {/* Display actual username */}
                    </p>
                    {/* <p className="header-text text-black text-2xl lg:text-5xl">
                        balance:
                    </p> */}
                    <button onClick={handleLogout} className="w-full max-w-[200px] bg-black text-white text-center rounded-[25px] py-3 cursor-pointer sm:w-50">
                    Log out
                    </button>
                </div>
            </div>
        </>
    );
}

export default Profile;