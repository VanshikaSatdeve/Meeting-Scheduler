import React, { useState } from 'react';
import axios from 'axios';

const Formmodel = ({ isOpen, onClose }) => {
    const [meetingDate, setMeetingDate] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [notes, setNotes] = useState('');
    const [workplace, setWorkplace] = useState('');

    const handleScheduleMeeting = () => {
        // Update meetingdata state with current form values
        const meetingdata = {
            meetingDate,
            meetingTime,
            name,
            email,
            guestEmail,
            numberOfGuests,
            notes,
            workplace
        };

        // Call updateData function to send meeting data to the server
        updateData(meetingdata);

        // Reset form fields
        setMeetingDate('');
        setMeetingTime('');
        setName('');
        setEmail('');
        setGuestEmail('');
        setNumberOfGuests(1);
        setNotes('');
        setWorkplace('');

        // Close modal
        onClose();
    };

    const updateData = (meetingdata) => {
        axios.post(`http://localhost:3001/metting`, meetingdata)
            .then(() => {
                window.alert("Record Added Successfully");
            })
            .catch((err) => {})
 
 
    }

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity duration-300 pointer-events-none'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
                <div className="relative bg-white rounded-lg w-full md:max-w-2xl p-6 transform transition-all duration-300 ease-in-out">
                    <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Schedule a Meeting</h2>
                    <form onSubmit={handleScheduleMeeting}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="meetingDate" className="block text-gray-700 mb-1">Meeting Date</label>
                                <input type="date" id="meetingDate" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="meetingTime" className="block text-gray-700 mb-1">Meeting Time</label>
                                <input type="time" id="meetingTime" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="guestEmail" className="block text-gray-700 mb-1">Guest Email</label>
                                <input type="email" id="guestEmail" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="numberOfGuests" className="block text-gray-700 mb-1">Number of Guests</label>
                                <input type="number" id="numberOfGuests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="notes" className="block text-gray-700 mb-1">Meeting Notes</label>
                                <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="workplace" className="block text-gray-700 mb-1">Workplace</label>
                                <textarea id="workplace" value={workplace} onChange={(e) => setWorkplace(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out">Schedule Meeting</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formmodel;
