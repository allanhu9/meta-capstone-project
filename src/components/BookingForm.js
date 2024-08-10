import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api.js';
import { format } from 'date-fns';

const BookingForm = (props) => {
    let currentDate = format(new Date(), 'yyyy-MM-dd');
    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [valid, setValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const success = submitAPI({ date, time, guests, occasion });
        setSubmitted(success);
    }
    useEffect(() => {
        if (submitted) {
            navigate('/confirmation');
        }
    }, [submitted])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formInput">
                    <label htmlFor="res-date">Choose date</label>
                    <input aria-label="On Click" type="date" id="res-date" min={currentDate} value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            props.getTimes(e.target.value);
                        }} required/>
                </div>
                <div className="formInput">
                    <label htmlFor="res-time">Choose time</label>
                    <select aria-label="On Click" id="res-time" value={time}
                        onChange={(e) => {
                            setTime(e.target.value);
                        }} required>
                        {props.available.map((availableTime) => {
                            return (<option key={availableTime} data-testid='timeOption'>{availableTime}</option>)
                        })}
                    </select>
                </div>
                <div className="formInput">
                    <label htmlFor="guests">Number of guests</label>
                    <input aria-label="On Click" type="number" placeholder="1" min="1" max="10" id="guests"
                        value={guests}
                        onChange={(e) => {
                            if (!e.target.validity.valid) {
                                setValid(false);
                            } else {
                                setValid(true);
                            }
                            setGuests(e.target.value);
                        }} />
                        {!valid && <p>Sorry! Our maximum table size is 10 people.</p>}
                </div>
                <div className="formInput">
                    <label htmlFor="occasion">Occasion</label>
                    <select aria-label="On Click" id="occasion" value={occasion} onChange={(e) => {
                        setOccasion(e.target.value);
                    }}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input aria-label="On Click" className="submitButton" type="submit" data-testid="submit" value="Make Your Reservation"
                    disabled={!valid} />
                </div>

                {submitted && <div data-testid="submitted"></div>}
            </form>
        </div>
    )
}

export default BookingForm;