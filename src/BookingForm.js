import React, { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const availableTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here
        if (date && time && guests && occasion) {
            setShowConfirmation(true);
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={handleGuestsChange}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={handleOccasionChange}
                required
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />

            {showConfirmation && (
                <div style={{ marginTop: '10px' }}>
                    <h2>Reservation Details:</h2>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Number of guests: {guests}</p>
                    <p>Occasion: {occasion}</p>
                    <button onClick={() => setShowConfirmation(false)}>Close</button>
                </div>
            )}
        </form>
    );
}

export default BookingForm;
